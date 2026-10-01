import CaseStudyHero from "@/components/case-study/CaseStudyHero"
import CaseStudyImage from "@/components/case-study/CaseStudyImage"
import CaseStudyNavigation from "@/components/case-study/CaseStudyNavigation"
import Footer from "@/components/layout/Footer"
import { prmGoImages, prmGoProject } from "@/data/projects/prm-go"
import { solarisProject } from "@/data/projects/solaris"
import type { Project } from "@/data/projects"

const approach = [
  {
    title: "Understand",
    copy: "The operational ecosystem was mapped across company teams, airport teams, employees, agents, passengers, services, and airport activity.",
  },
  {
    title: "Structure",
    copy: "Information architecture connected dashboards, airports, people, passengers, services, operational data, and reporting.",
  },
  {
    title: "Design",
    copy: "Dashboard, table, record, and management patterns were designed to keep dense operational information readable and actionable.",
  },
  {
    title: "Validate",
    copy: "Layouts and task flows were reviewed across desktop, tablet, and mobile contexts to protect hierarchy and role-relevant visibility.",
  },
  {
    title: "Refine",
    copy: "Reusable components, consistent states, and responsive rules created a scalable foundation for the portal.",
  },
]

const decisions = [
  {
    title: "Operational hierarchy",
    why: "The portal brings together airports, passengers, facilities, agents, employees, services, and activity.",
    response:
      "The dashboard prioritizes key metrics, current status, and recent operational activity before deeper records.",
  },
  {
    title: "Role-relevant navigation",
    why: "Company-level and airport-level teams need different views of the same operational ecosystem.",
    response:
      "Navigation groups information by operational domain while keeping related records connected and predictable.",
  },
  {
    title: "Data visibility",
    why: "Managers need to understand people, services, passengers, and airport operations without losing context.",
    response:
      "Structured cards, status indicators, tables, filters, and focused detail views support scanning and comparison.",
  },
  {
    title: "Responsive behavior",
    why: "Operational information needs to remain readable across different working contexts.",
    response:
      "Responsive layouts preserve priority, simplify dense regions, and maintain consistent controls across screen sizes.",
  },
]

export default function PrmGo() {
  const project: Project = {
    ...prmGoProject,
    title: "PRM Go Portal",
    meta: [
      ["Role", "Product Designer"],
      ["Project type", "Internal Operations & Management Portal"],
      ["Domain", "Aviation Operations · Airport Services"],
      ["Tools", "Figma"],
    ],
  }

  return (
    <main className="project-page prm-page editorial-case-page">
      <CaseStudyHero
        project={project}
        image={prmGoImages.cover}
        imageAlt="PRM Go Portal operations dashboard"
        imageClassName="prm-cover"
      />

      <section className="editorial-case-section light-section">
        <p className="section-label">Project context</p>
        <div className="case-context-grid">
          <div className="case-overview">
            <h2>A connected view of complex airport operations</h2>
            <p>
              Passenger assistance depends on people, teams, airports,
              facilities, services, passenger information, and operational
              coordination. PRM Go was designed as an internal portal that
              brings this information together for company, administration, and
              airport-management stakeholders.
            </p>
          </div>
          <div className="case-facts">
            <article>
              <h3>My role</h3>
              <p>
                As Product Designer, I led the UX strategy, information
                architecture, interaction design, responsive data patterns, and
                design-system documentation.
              </p>
            </article>
            <article>
              <h3>Responsibilities</h3>
              <ul>
                <li>Operational workflow and ecosystem mapping</li>
                <li>Information architecture and role-based navigation</li>
                <li>Dashboard, table, and record interaction patterns</li>
                <li>Responsive UI and component consistency</li>
              </ul>
            </article>
            <article>
              <h3>Tools</h3>
              <p>Figma</p>
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
              Operational information was complex and spread across people,
              airports, passengers, facilities, services, and ongoing activity.
            </p>
          </article>
          <article>
            <small>02</small>
            <h3>Impact</h3>
            <p>
              Different internal roles needed relevant information without being
              overwhelmed by the full operational data set or losing
              relationships between records.
            </p>
          </article>
          <article>
            <small>03</small>
            <h3>Design direction</h3>
            <p>
              The portal needed clearer hierarchy, role-relevant navigation,
              stronger data visibility, and consistent management workflows.
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
            <h3>Readable operational data</h3>
            <p>
              A clear type hierarchy separates navigation, KPI metrics, table
              content, record details, statuses, and supporting labels.
            </p>
          </article>
          <article>
            <small>Color usage</small>
            <div
              className="prm-swatches"
              aria-label="PRM Go interface color tokens"
            >
              <i />
              <i />
              <i />
              <i />
            </div>
            <p>
              Blue, navy, teal, and surface colors support navigation, actions,
              operational status, and content grouping.
            </p>
          </article>
          <article>
            <small>Components</small>
            <h3>Consistent management patterns</h3>
            <p>
              Buttons, cards, tables, filters, navigation, and status patterns
              use shared spacing and interaction states.
            </p>
          </article>
        </div>
      </section>

      <section className="editorial-case-section dark-section">
        <p className="section-label">Outcome</p>
        <h2>A portal that connects operations</h2>
        <div className="case-outcome-grid">
          <article>
            <h3>Centralized information</h3>
            <p>
              People, airports, passengers, facilities, services, and activity
              are brought into one operational experience.
            </p>
          </article>
          <article>
            <h3>Improved visibility</h3>
            <p>
              Dashboard hierarchy and structured records make important status
              and operational information easier to locate.
            </p>
          </article>
          <article>
            <h3>Consistent workflows</h3>
            <p>
              Shared navigation, tables, cards, filters, and responsive patterns
              reduce interface inconsistency across the portal.
            </p>
          </article>
        </div>
      </section>

      <section className="editorial-case-section light-section case-final-product">
        <p className="section-label">Final product</p>
        <div className="case-final-heading">
          <h2>Operational information, organized around real work</h2>
          <p>
            The final experience combines dashboard visibility with focused
            management views for airports, people, passengers, services, and
            operational activity.
          </p>
        </div>
        <CaseStudyImage
          src={prmGoImages.finalDashboard}
          alt="Final PRM Go Portal operations dashboard"
          className="case-final-image"
          objectFit="contain"
        />
      </section>

      <section className="editorial-case-section dark-section">
        <p className="section-label">What I learned</p>
        <div className="case-reflection-list">
          <p>
            Complex operational products need information architecture that
            reflects real relationships between people, places, and services.
          </p>
          <p>
            Dashboard design is most useful when hierarchy clearly separates
            immediate status from deeper management tasks.
          </p>
          <p>
            Consistent data and interaction patterns make dense workflows easier
            to understand across roles and screen sizes.
          </p>
        </div>
      </section>

      <CaseStudyNavigation
        next={solarisProject}
        title="Solaris brand"
        eyebrow="Brand design system"
        tone="light"
      />
      <Footer />
    </main>
  )
}
