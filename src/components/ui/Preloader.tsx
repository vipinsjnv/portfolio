import { useEffect, useState } from "react"

export default function Preloader({ onDone }: { onDone: () => void }) {
  const [progress, setProgress] = useState(1)

  useEffect(() => {
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches
    if (reduced) {
      sessionStorage.setItem("vipin-preloader-seen", "true")
      onDone()
      return
    }

    let value = 1
    const timer = window.setInterval(() => {
      value = Math.min(100, value + 2)
      setProgress(value)
      if (value === 100) {
        window.clearInterval(timer)
        window.setTimeout(() => {
          sessionStorage.setItem("vipin-preloader-seen", "true")
          onDone()
        }, 280)
      }
    }, 25)

    return () => window.clearInterval(timer)
  }, [onDone])

  return (
    <div
      className="preloader"
      aria-live="polite"
      aria-label={`Loading ${progress}%`}
    >
      <div className="preloader-word">Vipin</div>
      <div className="preloader-progress">
        <span>01</span>
        <i>
          <b style={{ width: `${progress}%` }} />
        </i>
        <span>{String(progress).padStart(2, "0")}</span>
      </div>
    </div>
  )
}
