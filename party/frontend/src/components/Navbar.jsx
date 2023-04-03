import { useCallback, useRef } from "react"
import ReactCanvasConfetti from "react-canvas-confetti"
import { FiMenu } from "react-icons/fi"
import { HiOutlineSearch } from "react-icons/hi"
import { HiOutlineShoppingBag } from "react-icons/hi2"
import { NavLink, Link } from "react-router-dom"

import { Popover } from "@headlessui/react"

import { Cart, NavbarSearch } from "."
import { partylogonowords } from "../assets"
import { useStateContext } from "../context/StateContext"

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

// search bar styling classes
const activeSearch = "text-pink-500"
const normalSearch = "hover:text-pink-500"

const Navbar = () => {
  const { totalQuantities, setQuery, setIsShowing, open, setOpen } =
    useStateContext()

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
  return (
    <nav>
      <ReactCanvasConfetti refConfetti={getInstance} style={canvasStyles} />
      <div className="flex w-full flex-wrap items-center justify-between px-4 py-0 sm:py-4">
        {/* logo */}
        <div className="mt-2 mx-5">
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
          className="relative z-10 block h-8 w-8 cursor-pointer text-white lg:hidden"
          onClick={() => setOpen(!open)}
        ></FiMenu>
        {/* links */}
        <div
          className={`${
            open ? "block" : "hidden"
          } w-full items-end text-white lg:flex lg:w-auto lg:items-center`}
        >
          <div className="relative z-20 flex flex-col items-end space-y-2 text-xl lg:flex-row lg:justify-between lg:space-x-8 lg:text-2xl ">
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
            <Popover
              as="div"
              className="my-auto flex text-left"
              onClick={() => {
                setQuery("")
              }}
            >
              <Popover.Button
                className={({ open }) => (open ? activeSearch : normalSearch)}
              >
                <HiOutlineSearch />
              </Popover.Button>
              <Popover.Panel className="glass absolute right-0 z-20 mt-10 origin-top-right rounded-md">
                <NavbarSearch />
              </Popover.Panel>
            </Popover>
            <div className="hi flex text-white lg:hidden">
              <button
                type="button"
                onClick={() => {
                  setIsShowing((isShowing) => !isShowing)
                }}
                className="relative z-10 py-2.5 text-4xl"
              >
                <HiOutlineShoppingBag className="hover:text-pink-500" />
                <span className="absolute top-8 rounded-full border-2 border-white bg-pink-500 px-2 text-center text-xs font-semibold">
                  {totalQuantities}
                </span>
              </button>
              {setIsShowing && <Cart />}
            </div>
          </div>
        </div>
        {/*shopping cart */}
        <div className="hidden text-white lg:flex">
          <button
            type="button"
            onClick={() => {
              setIsShowing((isShowing) => !isShowing)
            }}
            className="relative z-10 px-5 py-2.5 lg:text-6xl"
          >
            <HiOutlineShoppingBag className="hover:text-pink-500" />
            <span className="absolute top-12 rounded-full border-4 border-white bg-pink-500 px-2 text-center text-lg font-semibold">
              {totalQuantities}
            </span>
          </button>
          {setIsShowing && <Cart />}
        </div>
      </div>
    </nav>
  )
}

export default Navbar

//TODO: edit styling and responsiveness
//TODO: add cart interaction
//? confetti on click effect?
//? logo change?
