import './App.css'
import { useState } from 'react'
import Header from './assets/Components/Header/Header'
import Footer from './assets/Components/Footer/Footer'
import GridContainer from './assets/Components/GridContainer/GridContainer'
import Card from './assets/Components/Card/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app-container">
      <Header />

      <main>
        <div className="counter-section">
          <button onClick={() => setCount(count + 1)}>
            Count is {count}
          </button>
          <button onClick={() => setCount(0)}>
            Reset
          </button>
        </div>

        <GridContainer columns={3} rows={3}>
          <Card
            title="React Kursus"
            image="https://via.placeholder.com/400x200/667eea/ffffff?text=React"
            price="499"
            description="Lær React fra bunden med denne omfattende kursus"
            buttonText="Køb nu"
          />
          <Card
            title="JavaScript Guide"
            image="https://via.placeholder.com/400x200/f093fb/ffffff?text=JavaScript"
            price="399"
            description="Mestre JavaScript med praktiske eksempler"
            buttonText="Køb nu"
          />
          <Card
            title="CSS Mastery"
            image="https://via.placeholder.com/400x200/4facfe/ffffff?text=CSS"
            price="299"
            description="Bliv en CSS ekspert med moderne techniques"
            buttonText="Køb nu"
          />
          <Card
            title="Node.js Backend"
            image="https://via.placeholder.com/400x200/43e97b/ffffff?text=NodeJS"
            price="599"
            description="Byg kraftfulde backend applikationer"
            buttonText="Køb nu"
          />
          <Card
            title="TypeScript Pro"
            image="https://via.placeholder.com/400x200/fa709a/ffffff?text=TypeScript"
            price="449"
            description="Tilføj type safety til dine projekter"
            buttonText="Køb nu"
          />
          <Card
            title="Git & GitHub"
            image="https://via.placeholder.com/400x200/764ba2/ffffff?text=Git"
            price="199"
            description="Lær version control som en professionel"
            buttonText="Køb nu"
          />
          <Card
            title="Web Design"
            image="https://via.placeholder.com/400x200/f5576c/ffffff?text=Design"
            price="549"
            description="Skab smukke og brugervenlige interfaces"
            buttonText="Køb nu"
          />
          <Card
            title="API Development"
            image="https://via.placeholder.com/400x200/38f9d7/ffffff?text=API"
            price="499"
            description="Design og byg RESTful APIs"
            buttonText="Køb nu"
          />
          <Card
            title="Testing"
            image="https://via.placeholder.com/400x200/667eea/ffffff?text=Testing"
            price="349"
            description="Skriv robust tests for din kode"
            buttonText="Køb nu"
          />
        </GridContainer>
      </main>

      <Footer />
    </div>
  )
}

export default App
