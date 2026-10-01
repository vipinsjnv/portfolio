import { feedbackProject } from "./feedback"
import { prmGoProject } from "./prm-go"
import { solarisProject } from "./solaris"
import type { Project, ProjectId } from "./types"

export const projects: Record<ProjectId, Project> = {
  solaris: solarisProject,
  feedback: feedbackProject,
  prm: prmGoProject,
}

export type { Project, ProjectId, ProjectImages } from "./types"
