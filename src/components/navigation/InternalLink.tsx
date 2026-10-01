import type { AnchorHTMLAttributes, MouseEvent } from "react"
import { navigateInternal } from "@/navigation/router"

export default function InternalLink({
  href,
  onClick,
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement> & { href: string }) {
  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(event)
    if (
      event.defaultPrevented ||
      event.button !== 0 ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey
    )
      return

    event.preventDefault()
    navigateInternal(href)
  }

  return <a {...props} href={href} onClick={handleClick} />
}
