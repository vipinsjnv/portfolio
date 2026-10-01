import CaseStudyHero from "@/components/case-study/CaseStudyHero"
import CaseStudyImage from "@/components/case-study/CaseStudyImage"
import CaseStudyNavigation from "@/components/case-study/CaseStudyNavigation"
import Footer from "@/components/layout/Footer"
import { feedbackProject } from "@/data/projects/feedback"
import { solarisImages, solarisProject } from "@/data/projects/solaris"
import { contactDetails } from "@/data/contact"

export default function Solaris() {
  const project = solarisProject
  const next = feedbackProject
  const typeRows = [
    [
      "Display Large",
      "League Spartan 700 (48px)",
      "High-impact brand presentation titles",
    ],
    [
      "Heading 1",
      "League Spartan 700 (32px)",
      "Standard major document headers",
    ],
    [
      "Heading 2",
      "League Spartan 600 (24px)",
      "Subsections and segment titles",
    ],
    [
      "Body Large",
      "Noto Sans Regular (16px)",
      "Standard narrative body paragraphs demanding comfortable, high-volume screen reading flow.",
    ],
    [
      "Body Medium",
      "Noto Sans Regular (14px)",
      "The default type scale utilized across lists, tables, complex content cards, and input values.",
    ],
    [
      "Micro Label",
      "Noto Sans SemiBold (12px)",
      "Micro labels / tag indicators",
    ],
  ]
  const tokens = [
    ["$spacing-xs", "4px", "Micro-padding for inside badge layouts."],
    ["$spacing-sm", "12px", "Spacing for inner components and small headers."],
    ["$spacing-md", "24px", "Default padding inside cards and forms."],
    [
      "$radius-sm",
      "4px",
      "Corner radius for buttons, text inputs, and controls.",
    ],
    ["$radius-md", "8px", "Default radius for dashboard cards and panels."],
  ]

  return (
    <main className="project-page solaris-page">
      <CaseStudyHero
        project={project}
        image={solarisImages.cover}
        imageAlt="Solaris design system cover"
        imageClassName="solaris-cover"
      />

      <section className="case-section light-section">
        <p className="section-label">The challenge</p>
        <div className="split">
          <h2>
            Creating cohesion from chaos across multiple portal interfaces
          </h2>
          <div className="case-copy">
            <p>
              The Solaris Portal ecosystem was scaling at an unprecedented rate,
              but its visual interfaces were falling behind. Multiple distinct
              portals, including the Feedbick Portal and PRM Go operations app,
              lacked a unified design language. This disjointed architecture
              resulted in inconsistent customer experiences, fragmented brand
              identity, and massive technical overhead during cross-platform
              product handoffs.
            </p>
            <p>
              As Design System Architect, my objective was clear: audit all
              existing customer-facing platforms, define an entirely new visual
              foundation, and publish a robust, WCAG AA compliant architectural
              system that bridged the gap between design vision and engineered
              reality.
            </p>
          </div>
        </div>
      </section>

      <section className="case-section dark-section solaris-principles">
        <p className="section-label">Design principles</p>
        <div className="principle-grid">
          {[
            [
              "Systematic consistency",
              "Every design pattern, visual weight, and interaction token must function cohesively across the entire Solaris ecosystem to eliminate disjointed user flows.",
            ],
            [
              "Accessible by default",
              "Accessibility is a core architectural metric, not an afterthought. Colors, typography, contrast ratios, and layouts support WCAG 2.1 AA benchmarks.",
            ],
            [
              "Scalable architecture",
              "Components and style guidelines flow elegantly from highly atomic micro-layouts to wide-format monitors without structural breakdown.",
            ],
            [
              "Developer-friendly tokens",
              "All design choices are codified into multi-platform JSON tokens, establishing a singular source of truth that simplifies implementation.",
            ],
          ].map(([title, copy], index) => (
            <article key={title}>
              <small>0{index + 1}</small>
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="solaris-detail light-section">
        <p className="section-label">Typography decisions</p>
        <div className="solaris-heading">
          <div>
            <h2>Type scale & hierarchy</h2>
            <p>
              League Spartan must be utilized for structural, editorial
              headlines to retain brand punch. All body narrative, parameter
              settings, and label indicators must adopt Noto Sans for clean,
              legibly distinct screen execution.
            </p>
          </div>
          <strong>Ratio 1:1.333 system</strong>
        </div>
        <div className="type-table">
          {typeRows.map(([name, spec, purpose]) => (
            <div key={name}>
              <span>{name}</span>
              <span>{spec}</span>
              <b>{purpose}</b>
            </div>
          ))}
        </div>
      </section>

      <section className="solaris-detail dark-section color-section">
        <p className="section-label">Color architecture — OKLCH</p>
        <div className="solaris-feature">
          <div>
            <h2>Perceptually uniform color</h2>
            <p>
              Traditional hex/HSL palettes suffer from uneven brightness steps,
              which can cause accessibility issues. We migrated the Solaris
              color system entirely to the OKLCH color space. This allows us to
              scale lightness step-by-step with guaranteed perceptual
              uniformity, meaning text remains readable at any scale.
            </p>
          </div>
          <div className="palette-card">
            <small>Primary core orange · OKLCH scale</small>
            <div className="swatch-row orange">
              {[900, 800, 700, 600, 500, 400, 300, 200, 100].map((n) => (
                <i key={n}>
                  <span>{n}</span>
                </i>
              ))}
            </div>
            <div className="palette-columns">
              <div>
                <small>Secondary core blue</small>
                <div className="swatch-row blue">
                  {[900, 700, 500, 300].map((n) => (
                    <i key={n} />
                  ))}
                </div>
              </div>
              <div>
                <small>Neutral slate</small>
                <div className="swatch-row slate">
                  {[900, 700, 500, 300].map((n) => (
                    <i key={n} />
                  ))}
                </div>
              </div>
            </div>
            <small>Semantic status colors</small>
            <div className="status-colors">
              <span>Success</span>
              <span>Warning</span>
              <span>Error</span>
              <span>Info</span>
            </div>
          </div>
        </div>
      </section>

      <section className="solaris-detail light-section">
        <p className="section-label">WCAG compliance</p>
        <div className="solaris-feature">
          <div>
            <h2>Accessibility-first color pairing</h2>
            <p>
              We tested all color pairings to ensure high contrast. By
              calculating relative luminance programmatically in the Solaris
              guidelines, we eliminated contrast issues across dashboards,
              lists, and form actions.
            </p>
          </div>
          <div className="contrast-list">
            <div className="deep-blue">
              <span>White text on Strong Deep Blue background</span>
              <b>14.2:1</b>
              <em>AAA pass</em>
            </div>
            <div>
              <span>Slate 800 body text on white surface</span>
              <b>11.8:1</b>
              <em>AAA pass</em>
            </div>
            <div className="core-orange">
              <span>White text on Core Orange for UI elements</span>
              <b>3.1:1</b>
              <em>AA large</em>
            </div>
          </div>
        </div>
      </section>

      <section className="solaris-detail dark-section">
        <p className="section-label">Photography direction</p>
        <div className="solaris-feature photography-feature">
          <div>
            <h2>Visual storytelling framework</h2>
            <p>
              A complete set of rules governing editorial photography,
              human-centered focus, natural lighting, color grading with warm
              shadows and authentic midtones, and subject framing scales across
              Solaris corporate and public campaigns.
            </p>
          </div>
          <div className="photo-grid">
            <CaseStudyImage
              src={solarisImages.authenticInteraction}
              alt="A product team collaborating in a naturally lit workspace"
              aspectRatio="1 / 1"
              caption={
                <>
                  Authentic interaction <small>Photo by Beatriz Cattel</small>
                </>
              }
            />
            <CaseStudyImage
              src={solarisImages.systematicClarity}
              alt="Technology components arranged with systematic clarity"
              aspectRatio="1 / 1"
              caption={
                <>
                  Systematic clarity <small>Photo by Vadim Sherbakov</small>
                </>
              }
            />
          </div>
        </div>
      </section>

      <section className="solaris-detail light-section">
        <p className="section-label">Component library</p>
        <div className="split solaris-intro">
          <h2>Systematic building blocks</h2>
          <p>
            We designed atomic elements that serve as building blocks for
            complex applications. These components are fully responsive, support
            dark mode by default, and have clear interaction states for default,
            hover, focus, and disabled behavior.
          </p>
        </div>
        <div className="component-showcase">
          <article>
            <h3>Primary buttons</h3>
            <p>Filled, outlined, and disabled button states.</p>
            <button>Submit</button>
            <button className="outline">Cancel</button>
            <button disabled>Disabled</button>
          </article>
          <article>
            <h3>Text inputs</h3>
            <p>Floating labels and filled states.</p>
            <label>
              Email address
              <input placeholder={contactDetails.email} />
            </label>
            <label>
              Full name
              <input defaultValue="Vipin Kumar" />
            </label>
          </article>
          <article>
            <h3>Data cards</h3>
            <p>Compact metric cards with trend indicators.</p>
            <div className="metric">
              <span>Active users</span>
              <b>2,847</b>
              <em>↗ +12%</em>
            </div>
          </article>
          <article>
            <h3>Navigation bars</h3>
            <p>Horizontal nav with active and inactive items.</p>
            <nav>
              <span>Dashboard</span>
              <b>Analytics</b>
              <span>Settings</span>
            </nav>
          </article>
        </div>
      </section>

      <section className="solaris-detail dark-section">
        <p className="section-label">Design tokens</p>
        <div className="solaris-feature">
          <div>
            <h2>From decisions to code</h2>
            <p>
              We codified spacing, corner radii, and drop shadows into
              platform-agnostic design tokens. Developers can consume the design
              system directly in their code, making system-wide style changes
              effortless.
            </p>
          </div>
          <div className="token-table">
            <small>
              Core spacing & radii tokens · Sass / Tailwind compatible
            </small>
            {tokens.map(([token, value, purpose]) => (
              <div key={token}>
                <b>{token}</b>
                <span>{value}</span>
                <p>{purpose}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="case-section light-section outcomes">
        <p className="section-label">The impact</p>
        <h2>Verified outcomes & systemic adoption</h2>
        <div className="outcome-grid">
          <article>
            <h3>60% faster handoff</h3>
            <p>
              Direct handoff using Figma-to-code tokens reduced engineering
              preparation time and cut implementation bottlenecks.
            </p>
          </article>
          <article>
            <h3>100% WCAG compliant</h3>
            <p>
              Every component is thoroughly checked, ensuring full WCAG 2.1 AA
              level compliance.
            </p>
          </article>
          <article>
            <h3>3 products unified</h3>
            <p>
              Nexus Health Feedbick Portal, PRM Go Operations application, and
              Solaris main workspace are integrated.
            </p>
          </article>
          <article>
            <h3>Token-driven systems</h3>
            <p>
              Codified tokens maintain visual alignment across Svelte, React,
              and Android views.
            </p>
          </article>
        </div>
        <p className="note">
          Note: Metrics shown are verified based on internal team reports. No
          fabricated statistics.
        </p>
      </section>

      <CaseStudyNavigation next={next} />
      <Footer />
    </main>
  )
}
