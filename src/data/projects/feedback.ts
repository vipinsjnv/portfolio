import type { Project, ProjectImages } from "./types"

export const feedbackImages: ProjectImages = {
  cover: "/assets/feedback/cover.png",
  problem: "/assets/feedback/problem.png",
  research: "/assets/feedback/research.png",
  userFlow: "/assets/feedback/user-flow.png",
  wireframeDashboard: "/assets/feedback/wireframe-dashboard.png",
  wireframeFeedback: "/assets/feedback/wireframe-feedback.png",
  wireframeFilters: "/assets/feedback/wireframe-filters.png",
  finalDashboard: "/assets/feedback/final-dashboard.png",
  finalFeedback: "/assets/feedback/final-feedback.png",
  finalInsights: "/assets/feedback/final-insights.png",
  finalExport: "/assets/feedback/final-export.png",
  responsive: "/assets/feedback/responsive.png",
  responsiveTablet: "/assets/feedback/responsive-tablet.png",
  responsiveMobile: "/assets/feedback/responsive-mobile.png",
  showcase: "/assets/feedback/showcase.png",
  showcaseFiltering: "/assets/feedback/showcase-filtering.png",
  showcaseTrends: "/assets/feedback/showcase-trends.png",
  showcaseSubmission: "/assets/feedback/showcase-submission.png",
  showcaseCollaboration: "/assets/feedback/showcase-collaboration.png",
}

export const feedbackProject: Project = {
  id: "feedback",
  index: "02",
  title: "Feedbick",
  eyebrow: "User feedback platform",
  subtitle:
    "Turning complex feedback data into a clearer, more actionable experience",
  description:
    "A redesigned Feedbick portal that brings large volumes of structured feedback and organizational information into one clear, navigable system.",
  meta: [
    ["Role", "Product Designer"],
    [
      "Focus",
      "UX Strategy · UX/UI Design · Information Architecture · Interaction Design",
    ],
    ["Platform", "Web Application"],
    ["Design system", "Material Design 3"],
  ],
  challenge:
    "A data-heavy experience needed to become easier to understand, navigate and act on",
  challengeCopy:
    "The challenge was not simply to make the interface look cleaner, but to make complex information easier to find, understand, and act on. I led the end-to-end UX strategy, defining information architecture, interaction patterns, and a scalable design system built on Material Design 3.",
  processLabel: "Research & discovery",
  processTitle:
    "Understanding how teams turn customer feedback into decisions",
  principles: [
    {
      title: "User interviews",
      copy: "In-depth interviews uncovered how product managers collect, review, and prioritize feedback.",
    },
    {
      title: "Workflow mapping",
      copy: "Existing workflows revealed redundant steps and points where users lost context.",
    },
    {
      title: "Competitive analysis",
      copy: "Patterns, filtering approaches, and organizational hierarchies were benchmarked.",
    },
    {
      title: "Usability benchmarks",
      copy: "Baseline metrics were established across core tasks before implementation.",
    },
  ],
  architectureTitle:
    "A clearer structure for finding, understanding, and acting on feedback",
  architectureCopy:
    "Feedback was reorganized around the tasks users perform most: reviewing incoming items, identifying themes, understanding organizational context, and moving an insight toward action. Persistent filters and predictable detail views reduce context switching.",
  flow: ["Overview", "Feedback inbox", "Themes", "Organizations", "Insights"],
  finalTitle: "A focused workspace for feedback at scale",
  finalCopy:
    "The final experience combines dashboards, structured lists, flexible filtering, and detailed records into a coherent Material Design 3 interface.",
  outcome: "Verified outcomes & platform adoption",
  outcomes: [
    {
      title: "User outcome",
      copy: "Faster feedback discovery and less time navigating between views and categories.",
    },
    {
      title: "Business outcome",
      copy: "Improved cross-department alignment on product priorities and feature requests.",
    },
    {
      title: "UX improvement",
      copy: "Core feedback workflows were streamlined from eight steps to three.",
    },
  ],
  next: "prm",
}
