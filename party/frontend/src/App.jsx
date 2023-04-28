import { Suspense, lazy } from "react"
import { Toaster } from "react-hot-toast"
import { Route, Routes } from "react-router-dom"

import { Footer, Navbar, BackToTop, NotFound } from "./components"
import { StateContext } from "./context/StateContext"
import "./index.css"

const About = lazy(() => import("./pages/About/About"))
const Contact = lazy(() => import("./pages/Contact/Contact"))
const Home = lazy(() => import("./pages/Home/Home"))
const Shop = lazy(() => import("./pages/Shop/Shop"))
const Terms = lazy(() => import("./pages/Policies/Terms"))
const Privacy = lazy(() => import("./pages/Policies/Privacy"))
const Returns = lazy(() => import("./pages/Policies/Returns"))
const Shipping = lazy(() => import("./pages/Policies/Shipping"))
const Checkout = lazy(() => import("./pages/Checkout/Checkout"))
const Thanks = lazy(() => import("./pages/Checkout/Thanks"))

const App = () => {
  return (
    <StateContext>
      <div className="relative overflow-x-hidden bg-gradient-to-b from-[#5400BF] to-[#1D0043]">
        <div className="section-container">
          <Navbar />
        </div>
        <Suspense
          fallback={
            <div className="flex h-[50vh] items-center justify-center">
              <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent text-pink-500 motion-reduce:animate-[spin_1.5s_linear_infinite]" />
              <span className="ml-4 text-4xl text-white">
                Loading Products...
              </span>
            </div>
          }
        >
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
        </Suspense>
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
