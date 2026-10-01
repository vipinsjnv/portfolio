import type { Project, ProjectImages } from "./types"

export const solarisImages: ProjectImages = {
  cover: "/assets/solaris/cover.png",
  problem: "/assets/solaris/problem.png",
  process: "/assets/solaris/process.png",
  wireframes: "/assets/solaris/wireframes.png",
  colorArchitecture: "/assets/solaris/color-architecture.png",
  wcagCompliance: "/assets/solaris/wcag-compliance.png",
  photographyDirection: "/assets/solaris/photography-direction.png",
  componentLibrary: "/assets/solaris/component-library.png",
  designTokens: "/assets/solaris/design-tokens.png",
  finalUi: "/assets/solaris/final-ui.png",
  responsive: "/assets/solaris/responsive.png",
  showcase: "/assets/solaris/showcase.png",
  authenticInteraction: "/assets/solaris/photography-authentic-interaction.jpg",
  systematicClarity: "/assets/solaris/photography-systematic-clarity.jpg",
}

export const solarisProject: Project = {
  id: "solaris",
  index: "01",
  title: "Solaris brand design system",
  eyebrow: "Brand design system",
  subtitle: "Building a unified visual language from the ground up",
  description:
    "Crafting a comprehensive brand design system from the ground up — defining typography, color, WCAG-safe combinations, photography direction, and reusable components.",
  meta: [
    ["Client", "Solaris Portal"],
    ["Role", "Design System Architect"],
    ["Timeline", "3 Months (2024)"],
    ["Deliverables", "Guidelines & Token System"],
  ],
  challenge: "Creating cohesion from chaos across multiple portal interfaces",
  challengeCopy:
    "The Solaris Portal ecosystem was scaling at an unprecedented rate, but its visual interfaces were falling behind. Multiple portals lacked a unified design language, resulting in inconsistent customer experiences, fragmented brand identity, and technical overhead. My objective was clear: define a new visual foundation that bridged the gap between design vision and engineered reality.",
  processLabel: "Design foundations",
  processTitle: "A system built on clarity, accessibility, and scale",
  principles: [
    {
      title: "Typography",
      copy: "A clear type hierarchy improves scanning, establishes rhythm, and gives every interface a consistent voice.",
    },
    {
      title: "Accessible color",
      copy: "A purposeful palette includes verified WCAG-safe combinations for text, surfaces, states, and data.",
    },
    {
      title: "Photography direction",
      copy: "A consistent visual treatment brings warmth and humanity to a technical product ecosystem.",
    },
    {
      title: "Reusable components",
      copy: "Responsive patterns and implementation-ready tokens create one source of truth for every team.",
    },
  ],
  architectureTitle:
    "From brand decisions to implementation-ready foundations",
  architectureCopy:
    "The system connects visual foundations with reusable UI patterns. Typography, color, spacing, imagery, and component behavior are documented together so designers and developers can make consistent decisions without slowing down delivery.",
  flow: ["Audit", "Foundations", "Components", "Validate", "Adopt"],
  finalTitle: "One visual language across the Solaris ecosystem",
  finalCopy:
    "The final guidelines combine brand expression with practical product rules, giving teams flexible components without sacrificing consistency or accessibility.",
  outcome: "Verified outcomes & systemic adoption",
  outcomes: [
    {
      title: "60% faster handoff",
      copy: "Token-driven handoff reduced engineering preparation time and implementation bottlenecks.",
    },
    {
      title: "100% WCAG compliant",
      copy: "Every component is checked against WCAG 2.1 AA benchmarks.",
    },
    {
      title: "3 products unified",
      copy: "Feedbick, PRM Go, and Solaris now share one visual foundation.",
    },
    {
      title: "Token-driven systems",
      copy: "Codified tokens maintain alignment across web and mobile views.",
    },
  ],
  next: "feedback",
}
