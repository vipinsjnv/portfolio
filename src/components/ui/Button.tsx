import type { ReactNode } from "react"
import InternalLink from "@/components/navigation/InternalLink"
import Arrow from "./Arrow"

type ButtonProps = {
  href: string
  children: ReactNode
  dark?: boolean
}

export default function Button({ href, children, dark = false }: ButtonProps) {
  const className = `button ${dark ? "dark" : ""}`
  if (href.startsWith("#/")) {
    return (
      <InternalLink className={className} href={href}>
        {children} <Arrow />
      </InternalLink>
    )
  }

  const external = href.startsWith("http")
  return (
    <a
      className={className}
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
    >
      {children} <Arrow />
    </a>
  )
}
