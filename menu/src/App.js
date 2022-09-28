import { useState } from "react"
import "./App.css"
import Menu from "./Menu"
import Categories from "./Categories"
import items from "./data"

function App() {
  const [menuItems, setMenuItems] = useState(items)
  const [categories, setCategories] = useState([])

  return (
    <main className="App">
      <section className="menu section">
        <div className="title">
          <h2>our menu</h2>
        </div>
        <Categories />
        <Menu items={menuItems} />
      </section>
    </main>
  )
}

export default App
