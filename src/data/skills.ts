export type Skill = {
  name: string;
  /** Scouter reading. Also drives the bar width (out of 9001). */
  power: number;
  note?: string;
};

export type SkillGroup = {
  id: string;
  title: string;
  kanji: string;
  /** Tailwind-safe accent token, see globals.css */
  accent: "orange" | "gold" | "blue" | "green" | "purple" | "cyan" | "red";
  blurb: string;
  skills: Skill[];
};

export const skillGroups: SkillGroup[] = [
  {
    id: "languages",
    title: "Languages",
    kanji: "語",
    accent: "orange",
    blurb: "What I actually write, most days.",
    skills: [
      { name: "Go", power: 9001, note: "Primary language, 4+ yrs" },
      { name: "Node.js / JavaScript", power: 6400, note: "Services & tooling" },
      { name: "TypeScript", power: 5800, note: "Typed APIs & frontends" },
      { name: "Python", power: 5200, note: "Automation & scripting" },
      { name: "SQL", power: 6800, note: "Query design & tuning" },
    ],
  },
  {
    id: "backend",
    title: "Backend",
    kanji: "核",
    accent: "gold",
    blurb: "API surfaces, service boundaries, distributed behaviour.",
    skills: [
      { name: "REST APIs", power: 8900, note: "Design, versioning, pagination" },
      { name: "Microservices", power: 8600, note: "Boundaries & contracts" },
      { name: "Distributed Systems", power: 8200, note: "Idempotency, retries, consistency" },
      { name: "WebSockets", power: 8000, note: "Real-time fan-out at scale" },
      { name: "gRPC / Protobuf", power: 6200, note: "Internal service contracts" },
      { name: "Concurrency", power: 8800, note: "Goroutines, channels, worker pools" },
    ],
  },
  {
    id: "data",
    title: "Databases & Caching",
    kanji: "蔵",
    accent: "green",
    blurb: "Where state lives, and how fast you can get it back.",
    skills: [
      { name: "MongoDB", power: 8500, note: "Schema design, aggregation, indexes" },
      { name: "PostgreSQL", power: 8100, note: "Transactions, constraints, EXPLAIN" },
      { name: "Redis", power: 8400, note: "Caching, locks, dedupe, pub/sub" },
      { name: "Query Optimisation", power: 8000, note: "Index strategy & profiling" },
    ],
  },
  {
    id: "messaging",
    title: "Messaging & Streaming",
    kanji: "波",
    accent: "cyan",
    blurb: "The event backbone — asynchronous by design.",
    skills: [
      { name: "NATS / JetStream", power: 8900, note: "Durable consumers, replay, DLQ" },
      { name: "Kafka", power: 6600, note: "Partitions, consumer groups" },
      { name: "Event-Driven Architecture", power: 8700, note: "Outbox, sagas, at-least-once" },
    ],
  },
  {
    id: "cloud",
    title: "Cloud",
    kanji: "天",
    accent: "blue",
    blurb: "Where the services actually run.",
    skills: [
      { name: "AWS", power: 6200, note: "EC2, S3, IAM, managed data services" },
      { name: "GCP", power: 5400, note: "Compute, storage, pub/sub basics" },
      { name: "Linux", power: 7200, note: "Daily driver for debugging" },
    ],
  },
  {
    id: "devops",
    title: "DevOps",
    kanji: "鍛",
    accent: "purple",
    blurb: "Ship it repeatably or it does not count.",
    skills: [
      { name: "Docker", power: 8300, note: "Multi-stage builds, slim images" },
      { name: "Kubernetes", power: 7400, note: "Deployments, probes, HPA" },
      { name: "CI/CD Pipelines", power: 7600, note: "Build, test, deploy gates" },
      { name: "Terraform", power: 5200, note: "Infrastructure as code" },
    ],
  },
  {
    id: "observability",
    title: "Observability",
    kanji: "眼",
    accent: "red",
    blurb: "The scouter. You cannot fix what you cannot read.",
    skills: [
      { name: "Structured Logging", power: 8600, note: "Correlated, redacted, queryable" },
      { name: "Prometheus", power: 7200, note: "Metrics, alerting rules" },
      { name: "Grafana", power: 7000, note: "Dashboards teams actually use" },
      { name: "OpenTelemetry", power: 6400, note: "Traces across service hops" },
      { name: "pprof / Profiling", power: 7800, note: "CPU, heap, goroutine leaks" },
    ],
  },
];

export const MAX_POWER = 9001;
