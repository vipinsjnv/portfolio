import Contact from "@/components/layout/Contact"
import Footer from "@/components/layout/Footer"
import Header from "@/components/layout/Header"
import Arrow from "@/components/ui/Arrow"

const selectedResumeProjects = [
  {
    title: "Solaris Brand Design System",
    description: [
      "Designed a scalable visual and component system to establish a consistent product language across digital interfaces.",
      "Defined typography, color, accessibility, reusable UI patterns, and systematic building blocks to improve consistency and accelerate product design.",
    ],
  },
  {
    title: "Feedbick",
    description: [
      "Designed a data-driven feedback platform that transforms unstructured feedback into organized, actionable insights.",
      "Developed the information architecture and interaction patterns to help users navigate, interpret, prioritize, and act on feedback more efficiently.",
    ],
  },
  {
    title: "PRM Go — Internal Aviation Operations Portal",
    description: [
      "Designed an internal operations portal to simplify complex passenger-assistance and operational workflows.",
      "Structured information architecture and task flows around requests, assignment, assistance, monitoring, and completion to make operational work easier to manage.",
    ],
  },
]

export default function Resume() {
  const printResume = () => window.print()
  return (
    <main className="resume-page">
      <section className="resume-hero dark-section">
        <Header />
        <p className="kicker">Professional profile</p>
        <h1>Resume</h1>
        <h2>A snapshot of my professional journey</h2>
        <p>
          UX/UI Designer based in Faridabad, Haryana, with expertise in creating
          intuitive web and mobile interfaces, design systems, and interactive
          prototypes.
        </p>
        <button className="button" onClick={printResume}>
          Download CV (PDF) <Arrow />
        </button>
      </section>
      <section className="resume-content dark-section">
        <p className="section-label">Experience</p>
        <article>
          <time>Feb 2021 — Present</time>
          <div>
            <h3>
              <span className="resume-role">UX/UI Designer</span>
              <span className="resume-company">
                Jetbrain Robotics Pvt Ltd
              </span>
            </h3>
            <p className="resume-location">Gurugram, Haryana</p>
            <ul>
              <li>
                Led the design of intuitive web and mobile interfaces for
                robotics systems, simplifying complex workflows for users with
                limited technical backgrounds.
              </li>
              <li>
                Developed and refined design systems to improve interface
                consistency and streamline the overall design process.
              </li>
              <li>
                Created interactive prototypes, mockups, and user flows using
                Figma and Adobe XD to communicate design solutions effectively.
              </li>
              <li>
                Collaborated closely with engineering teams to translate user
                needs into practical, user-centered product experiences.
              </li>
              <li>
                Designed the Robotic Control App, improving the usability of
                robot operations and contributing to a 30% reduction in user
                training time.
              </li>
              <li>
                Designed the Solaris Portal, enabling users to monitor robotic
                units, manage user information, and access historical
                maintenance records through a streamlined interface.
              </li>
            </ul>
            <div className="selected-resume-projects">
              <h4>Selected Product &amp; Design Projects</h4>
              {selectedResumeProjects.map((project) => (
                <div className="selected-resume-project" key={project.title}>
                  <h5>{project.title}</h5>
                  <ul>
                    {project.description.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </article>
        <article>
          <time>May 2019 — Jan 2020</time>
          <div>
            <h3>
              <span className="resume-role">Graphic Designer</span>
              <span className="resume-company">
                Absolutdata Research &amp; Analytics
              </span>
            </h3>
            <ul>
              <li>
                Transformed complex data and research findings into clear visual
                presentations.
              </li>
              <li>
                Developed PowerPoint presentations and leadership materials for
                global stakeholders.
              </li>
              <li>
                Produced branded and client-focused communications across
                digital formats.
              </li>
            </ul>
          </div>
        </article>
      </section>
      <section className="resume-block light-section">
        <p className="section-label">Education</p>
        <div className="education">
          <time>May 2019</time>
          <h3>Bachelor of Technology in Computer Science & Engineering</h3>
          <p>National Institute of Technology, Kurukshetra, Haryana</p>
        </div>
      </section>
      <section className="resume-block dark-section">
        <p className="section-label">Skills & architecture</p>
        <div className="skill-columns">
          <div>
            <h3>Design</h3>
            <span>UX/UI Design</span>
            <span>Design Systems</span>
            <span>User Flow Design</span>
            <span>Prototyping</span>
          </div>
          <div>
            <h3>Tools</h3>
            <span>Figma</span>
            <span>Adobe XD</span>
          </div>
          <div>
            <h3>Technical skills</h3>
            <span>HTML/CSS</span>
            <span>JavaScript</span>
          </div>
        </div>
      </section>
      <section className="resume-block light-section">
        <p className="section-label">Additional info</p>
        <div className="info-cards">
          <span>
            <small>Languages</small>Fluent in Hindi (native), English
          </span>
          <span>
            <small>Interests</small>UX/UI design trends, Painting, Gaming
          </span>
        </div>
      </section>
      <Contact />
      <Footer />
    </main>
  )
}
