import { asset } from "@/lib/paths";

export const site = {
  name: "Avinash Kondaveti",
  title: "Senior Backend Engineer",
  specialty: "Go",
  saiyanName: "Kakarot of the Backend",
  location: "Tekkali, Andhra Pradesh, India",
  email: "kondavetiavinash3@gmail.com",
  phone: "+91 89198 10046",
  linkedin: "https://linkedin.com/in/avinash-kondaveti-bb453b231",
  github: "https://github.com/avinas1209",
  resume: asset("/Avinash_Kondaveti_Resume.pdf"),
  yearsOfExperience: "4.6",
  intro: [
    "I build scalable microservices and event-driven systems in Go — the kind that stay calm at 10x traffic.",
    "Four and a half years across fintech and real-time platforms, training on concurrency, caching and clean system design.",
  ],
  summary:
    "Backend Engineer with 4.6 years of experience designing and building scalable microservices and distributed systems using Golang, MongoDB, PostgreSQL and event-driven architectures. Expertise in building high-performance REST APIs, implementing asynchronous messaging systems (NATS), and optimizing system performance, scalability, and reliability. Proven track record of delivering production-ready solutions in fintech and real-time platforms with a strong focus on concurrency, caching, and system design.",
  heroStack: [
    "Go",
    "MongoDB",
    "PostgreSQL",
    "Redis",
    "NATS",
    "Kafka",
    "Docker",
    "Kubernetes",
  ],
} as const;

export const philosophy = [
  {
    kanji: "力",
    title: "Power Comes From Simplicity",
    body: "The strongest service is the one you can hold in your head. I reach for boring, explicit Go over clever abstractions — goroutines with owners, contexts that actually cancel, errors that carry meaning.",
  },
  {
    kanji: "気",
    title: "Measure Before You Charge",
    body: "No optimisation without a number in front of it. Profile, benchmark, then change one thing. Every latency win I claim started as a p99 chart, not a hunch.",
  },
  {
    kanji: "耐",
    title: "Build For The Bad Day",
    body: "Retries, idempotency keys, backpressure, circuit breakers. Failure isn't an edge case in distributed systems — it's a Tuesday. Design the recovery path first.",
  },
  {
    kanji: "師",
    title: "Train In Public",
    body: "Design docs, readable PRs, structured logs, dashboards someone else can read at 3am. Ops burden shared is ops burden halved.",
  },
];

export const currentlyTraining = [
  { label: "Go 1.23 + generics-heavy internal libs", level: "Daily driver" },
  { label: "NATS JetStream — exactly-once & KV store", level: "In production" },
  { label: "OpenTelemetry traces across services", level: "Rolling out" },
  { label: "gRPC + protobuf contracts", level: "Learning deep" },
  { label: "Kubernetes operators & HPA tuning", level: "Exploring" },
];
