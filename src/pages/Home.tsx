import Contact from "@/components/layout/Contact"
import Footer from "@/components/layout/Footer"
import Header from "@/components/layout/Header"
import InternalLink from "@/components/navigation/InternalLink"
import Arrow from "@/components/ui/Arrow"
import Button from "@/components/ui/Button"
import Mockup from "@/components/ui/Mockup"
import { projects, type Project } from "@/data/projects"

const services = [
  [
    "01",
    "UX Research",
    "Discovering customer opportunities through contextual interviews, usability studies, and competitive analysis.",
  ],
  [
    "02",
    "UX/UI Design",
    "Translating product behavior into clear user flows, wireframes, and polished interfaces.",
  ],
  [
    "03",
    "Product Design",
    "Aligning experience decisions with product strategy and measurable business outcomes.",
  ],
  [
    "04",
    "Design Systems",
    "Creating scalable components, naming, and tokens that support product teams at speed.",
  ],
  [
    "05",
    "Prototyping",
    "Validating complex ideas through interactive prototypes before implementation.",
  ],
  [
    "06",
    "Responsive Design",
    "Designing fluid, accessible experiences that adapt naturally across screen sizes.",
  ],
]

export default function Home() {
  return (
    <main>
      <section className="hero dark-section">
        <Header />
        <div className="hero-content reveal">
          <p className="kicker hero-slide-in-left">Hello, I'm Vipin</p>
          <h1 className="hero-slide-in-right">
            Product
            <br />
            designer
          </h1>
          <h2>I make complex digital products feel clear and intuitive</h2>
          <p className="hero-summary">
            UX/UI design, research, and scalable design systems shaped around
            real user needs
          </p>
          <div className="button-row">
            <Button href="#/work">View work</Button>
            <Button href="#/contact">Let's talk</Button>
          </div>
        </div>
      </section>

      <section className="about light-section" id="about">
        <p className="section-label">About</p>
        <div className="split reveal">
          <h2>
            I design digital experiences that make complex products simple,
            clear and useful
          </h2>
          <p>
            Focusing on the intersection of business strategy and human
            psychology, I help early-stage startups and global enterprises
            launch digital products that make complex ideas clear and create
            measurable value.
          </p>
        </div>
        <div className="fact-grid">
          <span>
            <small>Role</small>UX/UI Designer · Product Designer
          </span>
          <span>
            <small>Experience</small>Product Designer · 5+ years
          </span>
          <span>
            <small>Based in</small>Faridabad, India
          </span>
          <span>
            <small>Availability</small>Open to freelance projects
          </span>
        </div>
      </section>

      <section className="services dark-section">
        <p className="section-label">What I do</p>
        <div className="service-list">
          {services.map(([num, title, copy]) => (
            <article key={num} className="reveal">
              <span>{num}</span>
              <h3>{title}</h3>
              <p>{copy}</p>
              <Arrow />
            </article>
          ))}
        </div>
      </section>

      <section className="work light-section" id="work">
        <div className="section-heading">
          <div>
            <p className="section-label">Selected</p>
            <h2>
              Selected
              <br />
              work
            </h2>
          </div>
          <p>
            A selection of digital products, UX systems, and design foundations
            built to solve real business problems.
          </p>
        </div>
        <div className="project-list">
          {(Object.values(projects) as Project[]).map((project, index) => {
            const workTitle =
              project.id === "feedback"
                ? "Feedbick portal"
                : project.id === "prm"
                  ? "PRM Go portal"
                  : project.title

            return (
              <article
                className={`project-card reveal ${index % 2 ? "reverse" : ""}`}
                key={project.id}
              >
                <InternalLink
                  href={`#/project/${project.id}`}
                  className="project-visual"
                  aria-label={`View ${workTitle}`}
                >
                  <Mockup label={workTitle} />
                </InternalLink>
                <div className="project-copy">
                  <small>
                    {project.index} — {project.eyebrow}
                  </small>
                  <h3>{workTitle}</h3>
                  <p>{project.description}</p>
                  <InternalLink
                    className="text-link"
                    href={`#/project/${project.id}`}
                  >
                    View case study <Arrow />
                  </InternalLink>
                </div>
              </article>
            )
          })}
        </div>
      </section>

      <section className="experience dark-section">
        <div className="section-heading">
          <h2>Experience</h2>
          <InternalLink href="#/resume">
            View resume <Arrow />
          </InternalLink>
        </div>
        {[
          [
            "Feb 2021 — Present",
            "Jetbrain Robotics Pvt. Ltd. — UX/UI Designer",
            "Designing intuitive web and mobile interfaces, maintaining the Solaris Design System, and improving consistency across robotics products.",
          ],
          [
            "May 2019 — Jan 2020",
            "Absolutdata Research & Analytics — Graphic Designer",
            "Transforming complex data and research into clear presentations and branded communications for global stakeholders.",
          ],
        ].map(([date, title, copy]) => (
          <article className="experience-row" key={title}>
            <span>{date}</span>
            <div>
              <h3>{title}</h3>
              <p>{copy}</p>
            </div>
          </article>
        ))}
      </section>
      <Contact />
      <Footer />
    </main>
  )
}
