import type { Project, ProjectImages } from "./types"

export const prmGoImages: ProjectImages = {
  cover: "/assets/prm-go/cover.png",
  problem: "/assets/prm-go/problem.png",
  research: "/assets/prm-go/research.png",
  userFlow: "/assets/prm-go/user-flow.png",
  wireframeDashboard: "/assets/prm-go/wireframe-dashboard.png",
  wireframeOperations: "/assets/prm-go/wireframe-operations.png",
  wireframeStatus: "/assets/prm-go/wireframe-status.png",
  finalDashboard: "/assets/prm-go/final-dashboard.png",
  finalOperations: "/assets/prm-go/final-operations.png",
  finalPassenger: "/assets/prm-go/final-passenger.png",
  finalServices: "/assets/prm-go/final-services.png",
  responsive: "/assets/prm-go/responsive.png",
  responsiveTablet: "/assets/prm-go/responsive-tablet.png",
  responsiveMobile: "/assets/prm-go/responsive-mobile.png",
  showcase: "/assets/prm-go/showcase.png",
  showcasePassenger: "/assets/prm-go/showcase-passenger.png",
  showcaseAirport: "/assets/prm-go/showcase-airport.png",
  showcaseAgents: "/assets/prm-go/showcase-agents.png",
  showcaseFilters: "/assets/prm-go/showcase-filters.png",
}

export const prmGoProject: Project = {
  id: "prm",
  index: "03",
  title: "PRM Go",
  eyebrow: "Partner relationship management",
  subtitle: "Internal aviation operations portal",
  description:
    "An internal portal connecting employees, agents, airports, passengers served, services delivered, and operational activity.",
  meta: [
    ["Role", "Product Designer"],
    [
      "Focus",
      "UX Strategy · UX/UI Design · Information Architecture · Interaction Design · Data Visualization",
    ],
    ["Platform", "Web Application"],
    ["Domain", "Aviation Operations · Airport Services"],
    ["Product type", "Internal Operations & Management Portal"],
  ],
  challenge: "The data was complex. The experience didn't need to be",
  challengeCopy:
    "Passenger assistance at airports depends on people, teams, services, locations, and operational coordination. PRM Go was designed as an internal portal to bring this information together and make it easier for teams to understand and manage their operations.",
  processLabel: "Product principles",
  processTitle: "The data was complex. The experience didn't need to be",
  principles: [
    {
      title: "Large amounts of data",
      copy: "Employees, agents, passengers, airports, services, and operational activity.",
    },
    {
      title: "Multiple levels of access",
      copy: "Company and airport teams see information relevant to their responsibilities.",
    },
    {
      title: "Operational visibility",
      copy: "Managers understand what is happening across people, services, and airports.",
    },
    {
      title: "Data-heavy interfaces",
      copy: "Tables, dashboards, metrics, and records remain readable and easy to navigate.",
    },
  ],
  architectureTitle: "Connecting people, airports, passengers, and services",
  architectureCopy:
    "The portal architecture mirrors the operational model. Related records remain connected while role-based navigation ensures airport teams, agents, and managers can reach the information relevant to their work.",
  flow: ["Dashboard", "Airports", "Employees", "Passengers", "Services"],
  finalTitle: "Operational information, organized around real work",
  finalCopy:
    "Dashboards provide an immediate overview, while focused management views support searching, filtering, reviewing records, and understanding activity across airports.",
  outcome: "A portal that connects operations",
  outcomes: [
    {
      title: "Centralized operations",
      copy: "One portal for managing the full operational picture.",
    },
    {
      title: "Structured information",
      copy: "Clear relationships between people, airports, services, and passengers.",
    },
    {
      title: "Operational clarity",
      copy: "Easier access to the information teams need to do their work.",
    },
  ],
  next: "solaris",
}
