import './GridContainer.css'

function GridContainer({ children, columns = 3, rows = 3 }) {
  return (
    <div
      className="grid-container"
      style={{
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
        gridTemplateRows: `repeat(${rows}, auto)`
      }}
    >
      {children}
    </div>
  )
}

export default GridContainer
