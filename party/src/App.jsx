import { NavLink, Route, Routes } from "react-router-dom"
import { About, Contact, Home, Shop, Navbar, Hero, Testimonials, Benefits, Features, FAQ, CTA, Footer } from "./pages"
import "./index.css"


const App = () => {
  return (
    <>
    <Navbar />
    <Hero />
    <Testimonials />
    <Benefits />
    <Features />
    <FAQ />
    <CTA />
    <Footer />

    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/About" element={<About />} />
      <Route path="Shop" element={<Shop />} />
      <Route path="/Contact" element={<Contact />} />
    </Routes>
    </>
  )
}

export default App;