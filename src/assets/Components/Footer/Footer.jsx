import './Footer.css'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <p className="footer-text">© {currentYear} - React Counter App</p>
      <p className="footer-credits">Lavet med React + Vite</p>
    </footer>
  )
}

export default Footer
