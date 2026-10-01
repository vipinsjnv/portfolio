import CaseStudyHero from "@/components/case-study/CaseStudyHero"
import CaseStudyImage from "@/components/case-study/CaseStudyImage"
import CaseStudyNavigation from "@/components/case-study/CaseStudyNavigation"
import Footer from "@/components/layout/Footer"
import { feedbackImages, feedbackProject } from "@/data/projects/feedback"
import { prmGoProject } from "@/data/projects/prm-go"
import type { Project } from "@/data/projects"

const approach = [
  {
    title: "Understand",
    copy: "User interviews and workflow mapping clarified how product managers and support teams collect, review, and prioritize feedback.",
  },
  {
    title: "Structure",
    copy: "The information architecture organized feedback discovery, organizational context, insights, actions, and reporting into predictable domains.",
  },
  {
    title: "Design",
    copy: "Wireframes and interaction patterns focused on filtering, feedback details, category management, and clearer movement from insight to action.",
  },
  {
    title: "Validate",
    copy: "Interactive prototypes and usability benchmarks supported review of the core discovery, filtering, and feedback-management workflows.",
  },
  {
    title: "Refine",
    copy: "Material Design 3 patterns brought consistent hierarchy, controls, states, and responsive behavior to the final interface.",
  },
]

const decisions = [
  {
    title: "Information hierarchy",
    why: "Large volumes of feedback and organizational data made important information difficult to scan.",
    response:
      "The experience was structured around overview, feedback, insights, actions, reports, and administration.",
  },
  {
    title: "Feedback discovery",
    why: "Teams needed to find relevant entries without moving through disconnected views.",
    response:
      "Search and multi-dimensional filters support discovery by source, type, priority, status, and time range.",
  },
  {
    title: "Contextual detail views",
    why: "Individual feedback needed enough context to support interpretation and follow-up.",
    response:
      "Focused detail views bring together metadata, related information, and available actions in one predictable layout.",
  },
  {
    title: "Consistent workflows",
    why: "Inconsistent patterns increased cognitive load across data-heavy tasks.",
    response:
      "Reusable Material Design 3 components create consistent controls, states, navigation, and responsive behavior.",
  },
]

export default function Feedback() {
  const project: Project = {
    ...feedbackProject,
    title: "Feedbick Portal",
    meta: [
      ["Role", "Product Designer"],
      ["Project type", "User Feedback Platform"],
      ["Focus", "UX Strategy · Information Architecture · Interaction Design"],
      ["Tools", "Figma · Material Design 3"],
    ],
  }

  return (
    <main className="project-page feedback-page editorial-case-page">
      <CaseStudyHero
        project={project}
        image={feedbackImages.cover}
        imageAlt="Feedbick Portal dashboard interface"
        imageClassName="feedback-cover"
      />

      <section className="editorial-case-section light-section">
        <p className="section-label">Project context</p>
        <div className="case-context-grid">
          <div className="case-overview">
            <h2>
              A shared workspace for understanding and acting on feedback
            </h2>
            <p>
              The Feedbick Portal brings together large volumes of structured
              feedback and organizational information. Product and support teams
              need a clear way to review incoming feedback, understand its
              context, identify patterns, and move important insights toward
              action.
            </p>
          </div>
          <div className="case-facts">
            <article>
              <h3>My role</h3>
              <p>
                As Product Designer, I led the end-to-end UX strategy,
                information architecture, interaction patterns, and the scalable
                interface system.
              </p>
            </article>
            <article>
              <h3>Responsibilities</h3>
              <ul>
                <li>UX strategy and workflow mapping</li>
                <li>Information architecture and interaction design</li>
                <li>Wireframes and interactive prototypes</li>
                <li>Responsive UI and design-system consistency</li>
              </ul>
            </article>
            <article>
              <h3>Tools</h3>
              <p>Figma · Material Design 3</p>
            </article>
          </div>
        </div>
      </section>

      <section className="editorial-case-section dark-section">
        <p className="section-label">The challenge</p>
        <div className="case-challenge-grid">
          <article>
            <small>01</small>
            <h3>Problem</h3>
            <p>
              Feedback was scattered across multiple views with inconsistent
              filtering, unclear categorization, and limited connections between
              raw entries and actionable insights.
            </p>
          </article>
          <article>
            <small>02</small>
            <h3>Impact</h3>
            <p>
              Teams spent more time locating and interpreting information than
              analyzing themes, setting priorities, and deciding what required
              attention.
            </p>
          </article>
          <article>
            <small>03</small>
            <h3>Design direction</h3>
            <p>
              The portal needed clearer organization, predictable navigation,
              flexible filtering, and a direct path from feedback discovery to
              ownership and action.
            </p>
          </article>
        </div>
      </section>

      <section className="editorial-case-section light-section">
        <p className="section-label">UX / product approach</p>
        <div className="case-approach">
          {approach.map((step, index) => (
            <article key={step.title}>
              <small>0{index + 1}</small>
              <h3>{step.title}</h3>
              <p>{step.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="editorial-case-section dark-section">
        <p className="section-label">Key design decisions</p>
        <div className="case-decision-grid">
          {decisions.map((decision, index) => (
            <article key={decision.title}>
              <small>0{index + 1}</small>
              <h3>{decision.title}</h3>
              <dl>
                <dt>Why it mattered</dt>
                <dd>{decision.why}</dd>
                <dt>Design response</dt>
                <dd>{decision.response}</dd>
              </dl>
            </article>
          ))}
        </div>
      </section>

      <section className="editorial-case-section light-section">
        <p className="section-label">Design system / UI direction</p>
        <div className="case-system-grid">
          <article>
            <small>Typography</small>
            <h3>Clear data hierarchy</h3>
            <p>
              A Material Design 3 type scale separates page titles, feedback
              details, metadata, labels, and dense supporting information.
            </p>
          </article>
          <article>
            <small>Color usage</small>
            <div
              className="feedback-swatches"
              aria-label="Feedbick interface color tokens"
            >
              <i />
              <i />
              <i />
              <i />
            </div>
            <p>
              Primary, surface, neutral, and dark colors distinguish actions,
              content groups, states, and interface depth.
            </p>
          </article>
          <article>
            <small>Components</small>
            <h3>Reusable patterns</h3>
            <p>
              Buttons, inputs, filters, data cards, tables, and navigation
              patterns use consistent spacing and interaction states.
            </p>
          </article>
        </div>
      </section>

      <section className="editorial-case-section dark-section">
        <p className="section-label">Outcome</p>
        <h2>A clearer path from feedback to action</h2>
        <div className="case-outcome-grid">
          <article>
            <h3>Clearer hierarchy</h3>
            <p>
              Feedback, context, themes, actions, and reports are organized into
              understandable product areas.
            </p>
          </article>
          <article>
            <h3>Reduced cognitive load</h3>
            <p>
              Consistent navigation, filters, metadata, and detail patterns make
              data-heavy workflows easier to scan.
            </p>
          </article>
          <article>
            <h3>Responsive consistency</h3>
            <p>
              Shared components preserve hierarchy and interaction clarity
              across desktop, tablet, and mobile layouts.
            </p>
          </article>
        </div>
      </section>

      <section className="editorial-case-section light-section case-final-product">
        <p className="section-label">Final product</p>
        <div className="case-final-heading">
          <h2>A focused workspace for feedback at scale</h2>
          <p>
            The final experience combines dashboards, structured feedback views,
            filtering, insights, and detailed records in one coherent interface.
          </p>
        </div>
        <CaseStudyImage
          src={feedbackImages.finalDashboard}
          alt="Final Feedbick Portal dashboard interface"
          className="case-final-image"
          objectFit="contain"
        />
      </section>

      <section className="editorial-case-section dark-section">
        <p className="section-label">What I learned</p>
        <div className="case-reflection-list">
          <p>
            Information architecture is central to making dense product data
            feel understandable.
          </p>
          <p>
            Consistent interaction patterns help users move from discovery to
            prioritization with less friction.
          </p>
          <p>
            Complex workflows become clearer when context and actions remain
            connected.
          </p>
        </div>
      </section>

      <CaseStudyNavigation
        next={prmGoProject}
        title="PRM Go Portal"
        eyebrow="Partner relationship management"
        tone="light"
      />
      <Footer />
    </main>
  )
}
