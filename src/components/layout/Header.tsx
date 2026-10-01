import { useEffect, useRef, useState } from "react"
import InternalLink from "@/components/navigation/InternalLink"
import { normalizeHash } from "@/navigation/router"

export default function Header({ light = false }: { light?: boolean }) {
  const [open, setOpen] = useState(false)
  const menuButtonRef = useRef<HTMLButtonElement>(null)
  const navRef = useRef<HTMLElement>(null)
  const hash = normalizeHash()
  const workCurrent =
    hash === "#/work"
      ? "location"
      : hash.startsWith("#/project/")
        ? "page"
        : undefined
  const close = () => setOpen(false)

  useEffect(() => {
    if (!open) return

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"
    navRef.current?.querySelector<HTMLAnchorElement>("a")?.focus()

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault()
        setOpen(false)
        menuButtonRef.current?.focus()
        return
      }

      if (event.key !== "Tab") return
      const items = [
        menuButtonRef.current,
        ...(navRef.current?.querySelectorAll<HTMLAnchorElement>("a") ?? []),
      ].filter(Boolean) as HTMLElement[]
      const first = items[0]
      const last = items[items.length - 1]
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }

    document.addEventListener("keydown", handleKeyDown)
    return () => {
      document.body.style.overflow = previousOverflow
      document.removeEventListener("keydown", handleKeyDown)
    }
  }, [open])

  return (
    <header className={`site-header ${light ? "on-light" : ""}`}>
      <InternalLink
        className="logo"
        href="#/"
        onClick={close}
        aria-label="Vipin, home"
      >
        Vipin
      </InternalLink>
      <button
        ref={menuButtonRef}
        className="menu-button"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-controls="primary-navigation"
        aria-label={open ? "Close navigation" : "Open navigation"}
      >
        <span aria-hidden="true" />
        <span aria-hidden="true" />
      </button>
      <nav
        ref={navRef}
        id="primary-navigation"
        className={open ? "open" : ""}
        aria-label="Primary navigation"
      >
        <InternalLink href="#/work" onClick={close} aria-current={workCurrent}>
          Work
        </InternalLink>
        <InternalLink
          href="#/about"
          onClick={close}
          aria-current={hash === "#/about" ? "location" : undefined}
        >
          About
        </InternalLink>
        <InternalLink
          href="#/resume"
          onClick={close}
          aria-current={hash === "#/resume" ? "page" : undefined}
        >
          Resume
        </InternalLink>
        <InternalLink
          href="#/contact"
          onClick={close}
          aria-current={hash === "#/contact" ? "location" : undefined}
        >
          Let's talk
        </InternalLink>
      </nav>
    </header>
  )
}
