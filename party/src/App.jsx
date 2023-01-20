import { NavLink, Route, Routes } from "react-router-dom"
import { About, Contact, Home, Shop } from "./pages"
import "./index.css"

const App = () => {
  return (
    <>
    <nav>
      <ul>
        <li>
          <NavLink to="/" className="hover:bg-pink-600">Home</NavLink>
        </li>
        <li>
          <NavLink to="/About" className="hover:bg-pink-600">About</NavLink>
        </li>
        <li>
          <NavLink to="/Shop" className="hover:bg-pink-600">Shop</NavLink>
        </li>
        <li>
          <NavLink to="/Contact" className="hover:bg-pink-600">Contact</NavLink>
        </li>
      </ul>
    </nav>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/About" element={<About />} />
      <Route path="/Shop" element={<Shop />} />
      <Route path="/Contact" element={<Contact />} />
    </Routes>
    </>
  )
}

export default App;