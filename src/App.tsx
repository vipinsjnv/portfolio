import { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react"
import Preloader from "@/components/ui/Preloader"
import type { ProjectId } from "@/data/projects"
import {
  navigationEvent,
  normalizeHash,
  routeFromHash,
  scrollPositions,
  type NavigationDetail,
} from "@/navigation/router"
import Home from "@/pages/Home"
import Resume from "@/pages/Resume"
import Feedback from "@/pages/projects/Feedback"
import PrmGo from "@/pages/projects/PrmGo"
import Solaris from "@/pages/projects/Solaris"

const projectPages: Record<ProjectId, () => React.JSX.Element> = {
  solaris: Solaris,
  feedback: Feedback,
  prm: PrmGo,
}

export default function App() {
  const [location, setLocation] = useState(normalizeHash)
  const [navigationKey, setNavigationKey] = useState(0)
  const [loading, setLoading] = useState(
    () => sessionStorage.getItem("vipin-preloader-seen") !== "true",
  )
  const finishLoading = useMemo(() => () => setLoading(false), [])
  const route = useMemo(() => routeFromHash(location), [location])
  const navigationRef = useRef<NavigationDetail>({
    behavior: "instant",
    kind: "link",
    pageChanged: false,
  })
  const previousLocationRef = useRef(location)

  useEffect(() => {
    const previousScrollRestoration = window.history.scrollRestoration
    window.history.scrollRestoration = "manual"

    const updateFromLink = (event: Event) => {
      navigationRef.current = (event as CustomEvent<NavigationDetail>).detail
      const nextLocation = normalizeHash()
      previousLocationRef.current = nextLocation
      setLocation(nextLocation)
      setNavigationKey((key) => key + 1)
    }

    const updateFromHistory = () => {
      scrollPositions.set(previousLocationRef.current, window.scrollY)
      const nextLocation = normalizeHash()
      navigationRef.current = {
        behavior: "instant",
        kind: "pop",
        pageChanged: true,
      }
      previousLocationRef.current = nextLocation
      setLocation(nextLocation)
      setNavigationKey((key) => key + 1)
    }

    window.addEventListener(navigationEvent, updateFromLink)
    window.addEventListener("popstate", updateFromHistory)
    return () => {
      window.history.scrollRestoration = previousScrollRestoration
      window.removeEventListener(navigationEvent, updateFromLink)
      window.removeEventListener("popstate", updateFromHistory)
    }
  }, [])

  useLayoutEffect(() => {
    if (loading) return

    const navigation = navigationRef.current
    if (navigation.kind === "pop") {
      window.scrollTo({
        top: scrollPositions.get(location) ?? 0,
        behavior: "instant",
      })
      return
    }

    if (route.page === "home") {
      const anchor = location.replace("#/", "")
      if (["work", "about", "contact"].includes(anchor)) {
        const target = document.getElementById(anchor)
        target?.scrollIntoView({
          behavior: navigation.behavior,
          block: "start",
        })
        if (target && navigation.kind === "link") {
          target.setAttribute("tabindex", "-1")
          target.focus({ preventScroll: true })
        }
      } else {
        window.scrollTo({ top: 0, behavior: "instant" })
      }
    } else {
      window.scrollTo({ top: 0, behavior: "instant" })
    }

    if (navigation.pageChanged) {
      const main = document.querySelector<HTMLElement>("main")
      main?.setAttribute("tabindex", "-1")
      main?.focus({ preventScroll: true })
    }
  }, [location, route, loading, navigationKey])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible")
        }),
      { threshold: 0.12 },
    )

    document.querySelectorAll(".reveal").forEach((element) => {
      if (element.getBoundingClientRect().top < window.innerHeight) {
        element.classList.add("visible")
      } else {
        element.classList.add("reveal-pending")
        observer.observe(element)
      }
    })

    return () => observer.disconnect()
  }, [location, loading])

  if (loading) return <Preloader onDone={finishLoading} />
  if (route.page === "resume") return <Resume />
  if (route.page === "project") {
    const ProjectPage = projectPages[route.id]
    return ProjectPage ? <ProjectPage /> : <Home />
  }
  return <Home />
}
