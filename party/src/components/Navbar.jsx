import { useState } from "react"
import { FiMenu } from "react-icons/fi"
import { HiOutlineSearch, HiSearch } from "react-icons/hi"
import { HiOutlineShoppingBag } from "react-icons/hi2"
import { NavLink, Link } from "react-router-dom"

import { Popover } from "@headlessui/react"

import { Cart, NavbarSearch } from "."
import { partylogo, partylogonowords } from "../assets"
import { useStateContext } from "../context/StateContext"

// Navbar styling classes
const activeLink =
  "underline decoration-pink-500 decoration-4 underline-offset-8"
const normalLink =
  "decoration-pink-500 decoration-4 underline-offset-8 hover:underline"

// search bar styling classes
const activeSearch = "text-pink-500"
const normalSearch = "hover:text-pink-500"

const Navbar = () => {
  const { totalQuantities, setQuery, setIsShowing } = useStateContext()
  const [open, setOpen] = useState(false)
  return (
    <nav>
      <div className="flex w-full flex-wrap items-center justify-between p-4">
        {/* logo */}
        <div className="pt-2">
          <Link to="/">
            <img
              src={partylogonowords}
              alt="Logo"
              className="relative z-10 mx-5 h-20"
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
          <div className="relative z-20 flex flex-col items-end space-x-10 text-xl lg:flex-row lg:justify-between lg:text-2xl">
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? activeLink : normalLink)}
            >
              About
            </NavLink>
            <NavLink
              to="/shop"
              className={({ isActive }) => (isActive ? activeLink : normalLink)}
            >
              Shop
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) => (isActive ? activeLink : normalLink)}
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
            <div className="flex text-white lg:hidden">
              <button
                type="button"
                onClick={() => {
                  setIsShowing((isShowing) => !isShowing)
                }}
                className="relative z-10 px-5 py-2.5 text-6xl"
              >
                <HiOutlineShoppingBag className="hover:text-pink-500" />
                <span className="absolute top-12 rounded-full border-4 border-white bg-pink-500 px-2 text-center text-xs font-semibold">
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
            className="relative z-10 px-5 py-2.5 text-6xl"
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
