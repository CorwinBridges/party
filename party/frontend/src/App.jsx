import { Toaster } from "react-hot-toast"
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
  Shipping,
  Checkout,
  Thanks,
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
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/shipping" element={<Shipping />} />
          <Route path="/returns" element={<Returns />} />
          <Route path="/thanks" element={<Thanks />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
        <BackToTop />
        {/* Toast */}
        <Toaster
          toastOptions={{
            success: {
              className:
                "!bg-green-500 !shadow-green-500 !rounded-full !text-white !shadow-lg !border-2 !border-white/20 !from-white/10 !to-white/0",
            },
            error: {
              className:
                "!bg-red-500 !shadow-red-500 !rounded-full !text-white !shadow-lg !border-2 !border-white/20 !from-white/10 !to-white/0",
            },
            loading: {
              className:
                "!bg-purple-500 !shadow-purple-500 !rounded-full !text-white !shadow-xl !border-2 !border-white/20 !from-white/10 !to-white/0",
            },
          }}
        />
      </div>
    </StateContext>
  )
}

export default App
