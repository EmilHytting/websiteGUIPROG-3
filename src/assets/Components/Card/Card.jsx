import './Card.css'

function Card({ title, image, price, description, buttonText }) {
  return (
    <div className="card">
      <img src={image} alt={title} className="card-image" />
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-price">{price} kr</p>
        <p className="card-description">{description}</p>
        <button className="card-button">{buttonText}</button>
      </div>
    </div>
  )
}

export default Card
