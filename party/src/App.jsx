import {Route, Routes} from "react-router-dom"
import {About, Contact, Home, Shop} from "./pages"
import {Navbar} from "./components"
import "./index.css"

const App = () => {
  return (
    <div className="bg-gradient-to-b from-[#5400BF] to-[#1D0043]">
      <div className="container mx-auto">
        <Navbar/>
        <Routes>
          <Route path="/" element={< Home />}/>
          <Route path="/About" element={< About />}/>
          <Route path="Shop" element={< Shop />}/>
          <Route path="/Contact" element={< Contact />}/>
        </Routes>
      </div>
    </div>

  )
}

export default App;