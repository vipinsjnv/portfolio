export default function Mockup({
  label,
  tall = false,
}: {
  label: string
  tall?: boolean
}) {
  return (
    <div className={`mockup ${tall ? "tall" : ""}`}>
      <div className="mockup-top">
        <i />
        <i />
        <i />
      </div>
      <div className="mockup-ui">
        <div className="mockup-side" />
        <div className="mockup-main">
          <span>{label}</span>
          <div className="mockup-stats">
            <i />
            <i />
            <i />
          </div>
          <div className="mockup-lines">
            <i />
            <i />
            <i />
            <i />
          </div>
        </div>
      </div>
    </div>
  )
}
