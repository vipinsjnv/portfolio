import InternalLink from "@/components/navigation/InternalLink"

export default function Footer({ light = false }: { light?: boolean }) {
  return (
    <footer className={light ? "light" : ""}>
      <InternalLink className="logo" href="#/">
        Vipin
      </InternalLink>
      <p>© 2026 Vipin</p>
      <div className="footer-links">
        <InternalLink href="#/work">Work</InternalLink>
        <InternalLink href="#/about">About</InternalLink>
        <InternalLink href="#/resume">Resume</InternalLink>
        <InternalLink href="#/contact">Let's talk</InternalLink>
      </div>
      <p>Designed &amp; built by Vipin.</p>
    </footer>
  )
}
