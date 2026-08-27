export type Project = {
  slug: string;
  name: string;
  saga: string;
  tagline: string;
  powerLevel: number;
  featured: boolean;
  period: string;
  role: string;
  problem: string;
  architecture: string[];
  contribution: string[];
  technologies: string[];
  challenges: { title: string; body: string }[];
  results: { metric: string; label: string }[];
  links: { github?: string; demo?: string };
};

export const projects: Project[] = [
  {
    slug: "nats-event-backbone",
    name: "NATS Event Backbone",
    saga: "Namek Saga",
    tagline: "An asynchronous nervous system for a fleet of Go microservices.",
    powerLevel: 9001,
    featured: true,
    period: "2024 - Present",
    role: "Lead backend engineer",
    problem:
      "Services were calling each other synchronously over HTTP. One slow downstream dependency cascaded into timeouts everywhere, write paths blocked on side-effects like notifications and audit logging, and a single deploy could stall unrelated flows. We needed to decouple the write path from everything that merely reacts to it.",
    architecture: [
      "NATS JetStream as the durable message backbone, with subject hierarchies scoped per domain (txn.created, txn.settled, user.kyc.updated).",
      "Go publishers write to the stream inside the same transaction boundary as the state change, using an outbox-style guard so an event is never emitted for a rolled-back write.",
      "Durable pull consumers per service with explicit ack, max-deliver limits and a dead-letter subject for poison messages.",
      "Idempotency keys stored in Redis with a TTL so redelivered messages are safely no-ops.",
      "MongoDB as the system of record; Redis for hot-path reads and consumer dedupe state.",
    ],
    contribution: [
      "Designed the subject taxonomy, envelope schema and versioning rules that every service publishes against.",
      "Wrote the shared Go client library wrapping JetStream: connection lifecycle, reconnect with backoff, structured logging and panic-safe handler execution.",
      "Implemented the idempotency and dead-letter layers, plus a replay tool for reprocessing a subject range after a bad deploy.",
      "Tuned consumer concurrency with bounded worker pools so a bursty stream could not exhaust database connections.",
      "Instrumented consumer lag and ack latency, and set alerting thresholds on both.",
    ],
    technologies: ["Go", "NATS JetStream", "MongoDB", "Redis", "Docker", "Kubernetes"],
    challenges: [
      {
        title: "At-least-once means duplicates are guaranteed",
        body: "Any consumer that touched money or sent a message had to become idempotent. I standardised on a Redis-backed dedupe key derived from the event ID plus consumer name, so each consumer group dedupes independently without coordinating.",
      },
      {
        title: "Slow consumers created invisible backlogs",
        body: "Lag only surfaced when users complained. I exposed pending-message counts per durable consumer as metrics and alerted on sustained growth, which turned a support ticket into a dashboard.",
      },
      {
        title: "Ordering versus throughput",
        body: "Strict ordering per entity conflicted with parallel processing. Resolved by partitioning work by entity key across a bounded worker pool: order preserved where it matters, concurrency everywhere else.",
      },
    ],
    results: [
      { metric: "30%", label: "lower p95 API response time" },
      { metric: "0", label: "duplicate side-effects after idempotency layer" },
      { metric: "Peak", label: "load absorbed without blocking writes" },
    ],
    links: { github: "", demo: "" },
  },
  {
    slug: "realtime-websocket-gateway",
    name: "Real-Time WebSocket Gateway",
    saga: "Tournament Saga",
    tagline: "Thousands of live connections, one Go binary, sub-second fan-out.",
    powerLevel: 8400,
    featured: true,
    period: "2024 - Present",
    role: "Backend engineer",
    problem:
      "The product needed live updates (status changes, alerts, presence) that polling could not deliver without hammering the API. Clients refreshed every few seconds, most requests returned nothing new, and perceived latency was still measured in seconds.",
    architecture: [
      "A stateless Go WebSocket gateway behind a load balancer; connection state lives in the process, subscription state in Redis.",
      "Each connection owns a reader goroutine and a writer goroutine with a buffered send channel, so slow clients get dropped instead of blocking the hub.",
      "Fan-out driven by NATS: domain services publish, every gateway instance subscribes and pushes to its locally connected subscribers.",
      "Redis pub/sub plus a presence set for cross-instance awareness and reconnect resumption.",
      "Ping/pong heartbeats with read deadlines to reap dead connections deterministically.",
    ],
    contribution: [
      "Built the connection hub: registration, subscription routing, and graceful shutdown that drains sockets before the pod terminates.",
      "Implemented per-connection backpressure with bounded send buffers, write deadlines and drop-with-metric on overflow.",
      "Added authentication on the upgrade handshake and per-topic authorization before a subscription is accepted.",
      "Wrote a load-test harness that opened thousands of concurrent sockets to find goroutine and file-descriptor ceilings before production did.",
    ],
    technologies: ["Go", "WebSockets", "NATS", "Redis", "Kubernetes"],
    challenges: [
      {
        title: "Goroutine leaks under churn",
        body: "Every abandoned connection that did not fully close leaked two goroutines and a channel. Fixed with strict context propagation and a single owner responsible for closing each socket, verified with pprof goroutine dumps under sustained connect/disconnect load.",
      },
      {
        title: "One slow client should not stall everyone",
        body: "The naive hub wrote to clients synchronously. Replaced with bounded per-client buffers where an overflowing client is disconnected and reported, keeping fan-out latency flat regardless of the worst subscriber.",
      },
      {
        title: "Rolling deploys dropped every socket at once",
        body: "Added graceful shutdown with a close frame and a jittered reconnect hint so clients rejoin staggered rather than as a thundering herd.",
      },
    ],
    results: [
      { metric: "<1s", label: "end-to-end update delivery" },
      { metric: "0", label: "polling requests on live screens" },
      { metric: "Flat", label: "memory profile across long-lived connections" },
    ],
    links: { github: "", demo: "" },
  },
  {
    slug: "fintech-payments-microservices",
    name: "Fintech Payments Microservices",
    saga: "Cell Saga",
    tagline: "Money transfer, AEPS and recharge rails where every retry is real money.",
    powerLevel: 7600,
    featured: true,
    period: "2023 - 2024",
    role: "Associate software engineer",
    problem:
      "Payment flows spanned several external providers, each with its own latency profile, error vocabulary and occasional silent timeout. Transactions were failing at a rate the business could feel, and the failure states were ambiguous: nobody could tell a genuine decline from a lost response.",
    architecture: [
      "Go microservices split by rail (money transfer, AEPS, recharge), each owning its own state machine.",
      "An explicit transaction state machine, INITIATED to PENDING to SUCCESS / FAILED / REVERSED, persisted before every external call.",
      "Provider adapters behind a common interface, with per-provider timeouts, retry policy and response normalisation.",
      "Reconciliation jobs that query provider status APIs for anything stuck in PENDING beyond a threshold.",
      "Redis caching for provider metadata, routing rules and rate-limit counters; PostgreSQL as the ledger of record.",
    ],
    contribution: [
      "Designed and implemented REST APIs for the transfer and recharge flows, including idempotent create endpoints keyed by client reference.",
      "Built provider integrations and the normalisation layer that turned inconsistent provider errors into a single actionable error taxonomy.",
      "Introduced the reconciliation worker that resolved ambiguous PENDING transactions instead of leaving them to support.",
      "Added Redis caching and trimmed chatty inter-service calls on the hot path.",
      "Helped move services into Docker and Kubernetes for consistent environments across staging and production.",
    ],
    technologies: ["Go", "PostgreSQL", "Redis", "REST", "Docker", "Kubernetes"],
    challenges: [
      {
        title: "Timeouts are not failures",
        body: "A provider timeout could mean success. Treating it as a failure risked double-debiting a customer. The state machine had to hold ambiguity as a first-class state and let reconciliation decide, never the request handler.",
      },
      {
        title: "Idempotency across retries",
        body: "Clients retried aggressively on mobile networks. Client-supplied reference keys plus a unique constraint meant a retried request returned the original result instead of creating a second transaction.",
      },
      {
        title: "Provider-specific failure modes",
        body: "Each rail failed differently. Per-provider timeout budgets and circuit-style cutoffs stopped one degraded provider from consuming the whole worker pool.",
      },
    ],
    results: [
      { metric: "25%", label: "improvement in transaction success rate" },
      { metric: "20%", label: "reduction in service latency" },
      { metric: "Fewer", label: "stuck transactions reaching support" },
    ],
    links: { github: "", demo: "" },
  },
  {
    slug: "cloud-security-api-layer",
    name: "Cloud Security API Layer",
    saga: "Android Saga",
    tagline: "Authentication, authorization and data protection for cloud security modules.",
    powerLevel: 6100,
    featured: false,
    period: "2022 - 2023",
    role: "Software engineer",
    problem:
      "Security modules needed a backend surface where every endpoint enforced identity and scope consistently. Validation logic was drifting between handlers, which is exactly how authorization gaps appear.",
    architecture: [
      "A middleware chain handling authentication, scope-based authorization, request validation and structured error responses before any handler runs.",
      "Centralised validation schemas so rules live in one place rather than per handler.",
      "Sensitive fields encrypted at rest and redacted from logs by default.",
      "Table-driven unit tests plus integration tests exercising the full middleware chain.",
    ],
    contribution: [
      "Built secure REST endpoints covering authentication, authorization and data-protection flows.",
      "Refactored validation and middleware into a shared chain, removing duplicated checks across handlers.",
      "Reduced per-request middleware overhead by short-circuiting cheap checks first and avoiding redundant deserialisation.",
      "Wrote unit and integration test suites that became part of the CI gate.",
    ],
    technologies: ["Go", "Node.js", "REST", "JWT", "Middleware", "Testing"],
    challenges: [
      {
        title: "Consistency beats cleverness in authz",
        body: "Handler-local permission checks were the real risk. Moving enforcement into a chain that fails closed meant a missing annotation denies access rather than silently allowing it.",
      },
      {
        title: "Logging without leaking",
        body: "Structured logs are useless if you strip everything and dangerous if you strip nothing. Field-level redaction with an explicit allowlist gave debuggable logs that stayed safe.",
      },
    ],
    results: [
      { metric: "1", label: "enforcement path for every endpoint" },
      { metric: "CI", label: "gated by unit and integration tests" },
      { metric: "Lower", label: "per-request middleware overhead" },
    ],
    links: { github: "", demo: "" },
  },
  {
    slug: "analytics-reporting-automation",
    name: "Analytics & Reporting Automation",
    saga: "Saiyan Saga",
    tagline: "Where the training started: REST APIs for analytics, and Python that killed the manual reports.",
    powerLevel: 4200,
    featured: false,
    period: "2021 - 2022",
    role: "Programmer analyst trainee",
    problem:
      "Analytics dashboards were slow to load and the recurring reports behind them were assembled by hand every cycle: hours of copy-paste that produced a different answer depending on who ran it.",
    architecture: [
      "Backend modules exposing REST endpoints over the analytics datastore, with pagination and query shaping pushed down to SQL.",
      "Python jobs that pulled, transformed and published the recurring reports on a schedule.",
    ],
    contribution: [
      "Built backend modules and REST APIs for analytics applications, trimming payloads and pushing aggregation into the database.",
      "Automated the reporting workflow end to end in Python, replacing the manual assembly step.",
    ],
    technologies: ["Python", "REST", "SQL"],
    challenges: [
      {
        title: "The slow part was never the code",
        body: "Response time was dominated by unindexed queries and over-fetching. Profiling the queries first, then shaping the API around them, is a lesson that has carried into every service since.",
      },
    ],
    results: [
      { metric: "25%", label: "faster response times" },
      { metric: "40%", label: "less manual reporting effort" },
    ],
    links: { github: "", demo: "" },
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
