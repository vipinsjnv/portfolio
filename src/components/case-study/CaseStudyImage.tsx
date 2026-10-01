import { useMemo, useState, type ReactNode } from "react"

type CaseStudyImageProps = {
  src: string
  alt: string
  className?: string
  aspectRatio?: string
  objectFit?: "cover" | "contain"
  loading?: "eager" | "lazy"
  caption?: ReactNode
}

function resolveAssetPath(src: string) {
  return `${import.meta.env.BASE_URL}${src.replace(/^\/+/, "")}`
}

export default function CaseStudyImage({
  src,
  alt,
  className = "",
  aspectRatio,
  objectFit = "cover",
  loading = "lazy",
  caption,
}: CaseStudyImageProps) {
  const [failed, setFailed] = useState(false)
  const resolvedSrc = useMemo(() => resolveAssetPath(src), [src])

  return (
    <figure
      className={`case-placeholder case-study-image ${
        caption ? "has-caption" : ""
      } ${className}`}
    >
      <div className="case-study-image-media" style={{ aspectRatio }}>
        {failed ? (
          <div
            className="case-study-image-fallback"
            role="img"
            aria-label={alt}
          >
            <span>Project image placeholder</span>
            <small>{alt}</small>
          </div>
        ) : (
          <img
            src={resolvedSrc}
            alt={alt}
            loading={loading}
            style={{ objectFit }}
            onError={() => setFailed(true)}
          />
        )}
      </div>
      {caption && <figcaption>{caption}</figcaption>}
    </figure>
  )
}
