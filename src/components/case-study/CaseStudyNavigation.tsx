import type { Project } from "@/data/projects"
import InternalLink from "@/components/navigation/InternalLink"
import Arrow from "@/components/ui/Arrow"

type CaseStudyNavigationProps = {
  next: Project
  eyebrow?: string
  tone?: "light" | "dark"
  title?: string
}

export default function CaseStudyNavigation({
  next,
  eyebrow = next.eyebrow,
  tone = "dark",
  title = next.title,
}: CaseStudyNavigationProps) {
  return (
    <section
      className={`next-project ${
        tone === "light" ? "light-section" : "dark-section"
      }`}
    >
      <p className="section-label">Next up</p>
      <h2>{title}</h2>
      <p>
        {next.index} — {eyebrow}
      </p>
      <div>
        <InternalLink href={`#/project/${next.id}`}>
          View project <Arrow />
        </InternalLink>
        <InternalLink href="#/work">Back to work</InternalLink>
      </div>
    </section>
  )
}
