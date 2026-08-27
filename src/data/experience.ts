export type Experience = {
  company: string;
  role: string;
  period: string;
  start: string;
  location?: string;
  saga: string;
  powerLevel: number;
  summary: string;
  responsibilities: string[];
  achievements: { metric: string; label: string }[];
  stack: string[];
};

export const experiences: Experience[] = [
  {
    company: "Tectoro Consulting Pvt Ltd",
    role: "Golang Developer",
    period: "June 2024 – Present",
    start: "2024",
    saga: "Super Saiyan Saga",
    powerLevel: 9001,
    summary:
      "Leading backend design for fintech and real-time products — Go services, MongoDB, Redis and a NATS event backbone.",
    responsibilities: [
      "Designed and led development of scalable backend services in Golang, MongoDB and Redis for fintech and real-time applications.",
      "Built event-driven architectures on NATS enabling reliable asynchronous processing under high load.",
      "Built high-performance REST APIs and real-time WebSocket communication services with low latency and high availability.",
      "Owned caching strategy, query tuning and service-to-service interaction patterns.",
      "Implemented observability practices — structured logging, monitoring and error handling — improving production stability.",
    ],
    achievements: [
      { metric: "30%", label: "faster API response time" },
      { metric: "↑", label: "throughput under peak load" },
      { metric: "24/7", label: "real-time services availability" },
    ],
    stack: ["Go", "MongoDB", "Redis", "NATS", "WebSockets", "Docker"],
  },
  {
    company: "BPS Pvt Ltd",
    role: "Associate Software Engineer",
    period: "Sept 2023 – June 2024",
    start: "2023",
    saga: "Cell Saga",
    powerLevel: 6200,
    summary:
      "Payments microservices for money transfer, AEPS and recharge flows — where a failed transaction is a real person's money.",
    responsibilities: [
      "Enhanced and maintained Golang microservices for payment platforms covering money transfer, AEPS and recharge workflows.",
      "Designed RESTful APIs and integrated external financial service providers.",
      "Introduced Redis-based caching and optimised inter-service communication.",
      "Contributed to containerisation and deployment workflows with Docker and Kubernetes.",
    ],
    achievements: [
      { metric: "25%", label: "higher transaction success rate" },
      { metric: "20%", label: "lower service latency" },
      { metric: "3", label: "payment rails maintained" },
    ],
    stack: ["Go", "PostgreSQL", "Redis", "Docker", "Kubernetes"],
  },
  {
    company: "Nouveau Labs",
    role: "Software Engineer",
    period: "April 2022 – Feb 2023",
    start: "2022",
    saga: "Android Saga",
    powerLevel: 3400,
    summary:
      "Secure backend APIs for cloud security modules — authentication, authorization and data protection.",
    responsibilities: [
      "Built secure backend APIs for cloud security modules covering authentication, authorization and data protection.",
      "Optimised request validation and middleware efficiency across the API surface.",
      "Wrote unit and integration tests, raising code quality inside an Agile delivery cycle.",
    ],
    achievements: [
      { metric: "AuthN/AuthZ", label: "hardened across modules" },
      { metric: "↑", label: "test coverage on critical paths" },
    ],
    stack: ["Go", "Node.js", "REST", "Middleware", "Testing"],
  },
  {
    company: "Cognizant",
    role: "Programmer Analyst Trainee",
    period: "Sept 2021 – March 2022",
    start: "2021",
    saga: "Saiyan Saga",
    powerLevel: 1500,
    summary:
      "First arc: backend modules and REST APIs for analytics apps, plus Python automation for reporting.",
    responsibilities: [
      "Built backend modules and REST APIs for analytics applications.",
      "Automated reporting workflows in Python.",
    ],
    achievements: [
      { metric: "25%", label: "faster response times" },
      { metric: "40%", label: "less manual reporting effort" },
    ],
    stack: ["Python", "REST", "SQL"],
  },
];

export const education = {
  degree: "B.Tech, Computer Science Engineering",
  school: "Gayatri Vidya Parishad College of Engineering, Visakhapatnam",
  period: "2017 – 2021",
  gpa: "8.1 / 10",
};
