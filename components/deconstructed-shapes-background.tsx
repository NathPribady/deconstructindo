export default function DeconstructedShapesBackground() {
  return (
    <div aria-hidden="true" className="absolute inset-0 -z-20 overflow-hidden pointer-events-none">
      {/* Shape 1: Slowly rotating and fading square outline */}
      <div className="shape shape-square-outline"></div>

      {/* Shape 2: Drifting and pulsing subtle circle */}
      <div className="shape shape-drifting-circle"></div>

      {/* Shape 3: Glitching line segment */}
      <div className="shape shape-glitching-line"></div>

      {/* Shape 4: Another smaller rotating outline */}
      <div className="shape shape-small-rotating-outline"></div>

      {/* Shape 5: Fading dot */}
      <div className="shape shape-fading-dot"></div>
    </div>
  )
}
