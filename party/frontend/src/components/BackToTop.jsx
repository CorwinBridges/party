import { useState, useEffect } from "react"
import { FaArrowUp } from "react-icons/fa"
import { animateScroll } from "react-scroll"

import { motion } from "framer-motion"

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false)

  const handleScroll = () => {
    const currentScrollY = window.scrollY
    if (currentScrollY > 0) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }

  const handleBackToTop = () => {
    animateScroll.scrollToTop({
      duration: 500,
      smooth: true,
    })
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <motion.button
      className={`glass fixed bottom-12 right-12 z-30 p-3 text-white ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      type="button"
      onClick={handleBackToTop}
      initial={{ opacity: 0 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.3 }}
    >
      <FaArrowUp className="text-5xl" />
    </motion.button>
  )
}

export default BackToTop
