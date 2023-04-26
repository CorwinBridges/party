import { useCallback, useRef, useState } from "react"
import ReactCanvasConfetti from "react-canvas-confetti"
import { FiMenu } from "react-icons/fi"
import { HiOutlineShoppingBag } from "react-icons/hi2"
import { NavLink, Link } from "react-router-dom"

import { motion } from "framer-motion"

import { Cart } from "."
import { partylogonowords } from "../assets"
import { useStateContext } from "../context/StateContext"
import { useMediaQuery } from "../utils"

// Canvas styling
const canvasStyles = {
  position: "fixed",
  pointerEvents: "none",
  width: "100%",
  height: "100%",
  top: 0,
  left: 0,
  zIndex: 100,
}
// Navbar styling classes
const activeLink =
  "underline decoration-pink-500 decoration-4 underline-offset-8"
const normalLink =
  "decoration-pink-500 decoration-4 underline-offset-8 hover:underline"

const Navbar = () => {
  const { toggleCart, open, setOpen, getTotalQuantity } = useStateContext()
  const [duration, setDuration] = useState(0)
  const isLg = useMediaQuery("(min-width: 1024px)")

  // Canvas confetti
  const refAnimationInstance = useRef(null)

  // Get canvas instance
  const getInstance = useCallback((instance) => {
    refAnimationInstance.current = instance
  }, [])

  // Make confetti shot
  const makeShot = useCallback((particleRatio, opts, mouseX, mouseY) => {
    // Make sure the confetti has been initialized
    refAnimationInstance.current &&
      refAnimationInstance.current({
        ...opts,
        // Get mouse position
        origin: {
          x: mouseX / window.innerWidth,
          y: mouseY / window.innerHeight,
        },
        // Get particle count
        particleCount: Math.floor(200 * particleRatio),
      })
  }, [])

  // Fire confetti
  const fireConfetti = useCallback(
    (event) => {
      const mouseX = event.clientX
      const mouseY = event.clientY

      makeShot(
        0.25,
        {
          spread: 6.5,
          startVelocity: 55,
        },
        mouseX,
        mouseY
      )

      makeShot(
        0.2,
        {
          spread: 15,
        },
        mouseX,
        mouseY
      )

      makeShot(
        0.35,
        {
          spread: 25,
          decay: 0.91,
          scalar: 0.8,
        },
        mouseX,
        mouseY
      )

      makeShot(
        0.1,
        {
          spread: 30,
          startVelocity: 25,
          decay: 0.92,
          scalar: 1.2,
        },
        mouseX,
        mouseY
      )

      makeShot(
        0.1,
        {
          spread: 30,
          startVelocity: 45,
        },
        mouseX,
        mouseY
      )
    },
    [makeShot]
  )

  const menuVariants = {
    open: {
      height: "auto",
      opacity: 1,
      transition: {
        duration: 0.3,
      },
    },
    closed: {
      height: isLg ? "auto" : 0,
      opacity: isLg ? 1 : 0,
      transition: {
        duration,
      },
    },
  }

  const toggleDuration = () => {
    setDuration(0.3)
    setTimeout(() => {
      setDuration(0)
    }, 369)
  }

  return (
    <nav>
      <ReactCanvasConfetti refConfetti={getInstance} style={canvasStyles} />
      <div className="flex w-full flex-wrap items-center justify-between px-4 py-0 sm:py-4">
        {/* logo */}
        <div className="mx-5 mt-2">
          <Link
            to="/"
            onClick={(event) => {
              setOpen(false)
              fireConfetti(event)
            }}
          >
            <img
              src={partylogonowords}
              alt="Logo"
              className="relative z-10 h-20"
            />
          </Link>
        </div>
        <FiMenu
          className="custom-pointer relative z-10 block h-8 w-8 text-white lg:hidden"
          onClick={() => {
            setOpen(!open)
            toggleDuration()
          }}
        ></FiMenu>
        {/* links */}
        <motion.div
          className={`${
            open ? "block" : "hidden"
          } w-full items-end text-white lg:flex lg:w-auto lg:items-center`}
          initial={false}
          animate={open ? "open" : "closed"}
          variants={menuVariants}
          style={{ zIndex: 10 }}
        >
          <div className="relative z-20 flex flex-col items-end justify-between space-y-2 text-xl lg:flex-row lg:space-x-8 lg:text-2xl ">
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? activeLink : normalLink)}
              onClick={() => setOpen(false)}
            >
              About
            </NavLink>
            <NavLink
              to="/shop"
              className={({ isActive }) => (isActive ? activeLink : normalLink)}
              onClick={() => setOpen(false)}
            >
              Shop
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) => (isActive ? activeLink : normalLink)}
              onClick={() => setOpen(false)}
            >
              Contact
            </NavLink>
            <div className="text-white lg:hidden">
              <button
                type="button"
                onClick={toggleCart}
                className="relative z-20 flex py-2.5 text-4xl"
              >
                <HiOutlineShoppingBag className="hover:text-pink-500" />
                <span className="absolute top-8 rounded-full border-2 border-white bg-pink-500 px-2 text-center text-xs font-semibold">
                  {getTotalQuantity()}
                </span>
              </button>
            </div>
          </div>
        </motion.div>
        {/*shopping cart */}
        <button
          type="button"
          onClick={toggleCart}
          className="relative z-20 hidden px-5 py-2.5 text-white lg:flex lg:text-6xl"
        >
          <HiOutlineShoppingBag className="hover:text-pink-500" />
          <span className="absolute top-12 rounded-full border-4 border-white bg-pink-500 px-2 text-center text-lg font-semibold">
            {getTotalQuantity()}
          </span>
        </button>
        <Cart />
      </div>
    </nav>
  )
}

export default Navbar
