import type { Project } from "@/data/projects"
import Header from "@/components/layout/Header"
import InternalLink from "@/components/navigation/InternalLink"
import CaseStudyImage from "./CaseStudyImage"

type CaseStudyHeroProps = {
  project: Project
  image: string
  imageAlt: string
  imageClassName?: string
}

export default function CaseStudyHero({
  project,
  image,
  imageAlt,
  imageClassName = "",
}: CaseStudyHeroProps) {
  return (
    <section className="project-hero dark-section">
      <Header />
      <InternalLink href="#/work" className="back-link">
        ← Back to work
      </InternalLink>
      <span className="project-number">{project.index}</span>
      <h1>{project.title}</h1>
      <h2>{project.subtitle}</h2>
      <div className="project-meta">
        {project.meta.map(([label, value]) => (
          <span key={label}>
            <small>{label}</small>
            {value}
          </span>
        ))}
      </div>
      <CaseStudyImage
        src={image}
        alt={imageAlt}
        className={imageClassName}
        loading="eager"
      />
    </section>
  )
}
