import { useState } from 'react'
import './Counter.css'

function Counter() {
  const [count, setCount] = useState(0)

  const handleClick = () => {
    setCount(count + 1)
  }

  const handleReset = () => {
    setCount(0)
  }

  return (
    <div className="counter">
      <p className="counter-display">Du har klikket {count} gange.</p>
      <button className="counter-button" onClick={handleClick}>Klik!</button>
      <button className="counter-button reset-button" onClick={handleReset}>Nulstil</button>
    </div>
  )
}

export default Counter
