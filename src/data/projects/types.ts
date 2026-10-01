export type ProjectId = "solaris" | "feedback" | "prm"

export type ProjectCopy = {
  title: string
  copy: string
}

export type Project = {
  id: ProjectId
  index: string
  title: string
  eyebrow: string
  subtitle: string
  description: string
  meta: [string, string][]
  challenge: string
  challengeCopy: string
  processLabel: string
  processTitle: string
  principles: ProjectCopy[]
  architectureTitle: string
  architectureCopy: string
  flow: string[]
  finalTitle: string
  finalCopy: string
  outcome: string
  outcomes: ProjectCopy[]
  next: ProjectId
}

export type ProjectImages = Record<string, string>
