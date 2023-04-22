import { Route, Routes } from "react-router-dom"

import { Footer, Navbar, BackToTop, NotFound } from "./components"
import { StateContext } from "./context/StateContext"
import "./index.css"
import {
  About,
  Contact,
  Home,
  Shop,
  Terms,
  Privacy,
  Returns,
  Shipping
} from "./pages"

const App = () => {
  return (
    <StateContext>
      <div className="relative overflow-x-hidden bg-gradient-to-b from-[#5400BF] to-[#1D0043]">
        <div className="section-container">
          <Navbar />
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route exact path="/shop" element={<Shop />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/shipping" element={<Shipping />} />
          <Route path="/returns" element={<Returns />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
        <BackToTop />
      </div>
    </StateContext>
  )
}

export default App
