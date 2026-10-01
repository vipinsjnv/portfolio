import type { ProjectId } from "@/data/projects"

export type AppRoute = { page: "home" } | { page: "resume" } | {
  page: "project"
  id: ProjectId
}
export type NavigationDetail = {
  behavior: ScrollBehavior
  kind: "link" | "pop"
  pageChanged: boolean
}

export const navigationEvent = "portfolio:navigate"
export const scrollPositions = new Map<string, number>()

export function normalizeHash(hash = window.location.hash) {
  if (!hash || hash === "#") return "#/"
  return hash.startsWith("#/") ? hash : `#/${hash.replace(/^#\/?/, "")}`
}

export function routeFromHash(value = window.location.hash): AppRoute {
  const hash = value.replace(/^#\/?/, "")
  if (hash.startsWith("project/"))
    return { page: "project", id: hash.split("/")[1] as ProjectId }
  if (hash === "resume") return { page: "resume" }
  return { page: "home" }
}

export function navigateInternal(href: string) {
  const currentHash = normalizeHash()
  const nextHash = normalizeHash(href)
  const currentRoute = routeFromHash(currentHash)
  const nextRoute = routeFromHash(nextHash)
  const sameHomePage = currentRoute.page === "home" && nextRoute.page === "home"

  scrollPositions.set(currentHash, window.scrollY)

  if (sameHomePage || currentHash === nextHash) {
    window.history.replaceState(window.history.state, "", nextHash)
  } else {
    window.history.pushState(window.history.state, "", nextHash)
  }

  window.dispatchEvent(
    new CustomEvent<NavigationDetail>(navigationEvent, {
      detail: {
        behavior: sameHomePage ? "smooth" : "instant",
        kind: "link",
        pageChanged:
          currentRoute.page !== nextRoute.page ||
          currentRoute.page === "project",
      },
    }),
  )
}
