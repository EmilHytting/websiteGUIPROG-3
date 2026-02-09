import { useState } from 'react'
import './Toggle.css'

function Toggle() {
  const [isVisible, setIsVisible] = useState(false)

  const handleToggle = () => {
    setIsVisible(!isVisible)
  }

  return (
    <div className="toggle-container">
      <button className="toggle-button" onClick={handleToggle}>
        {isVisible ? 'Skjul' : 'Vis'} element
      </button>

      {isVisible && (
        <div className="toggle-content">
          <h3>Dette element kan skjules!</h3>
          <p>Denne tekst vises kun når toggle er aktiv.</p>
          <img
            src="https://via.placeholder.com/300x200/667eea/ffffff?text=Toggle+Element"
            alt="Toggle element"
          />
        </div>
      )}
    </div>
  )
}

export default Toggle
