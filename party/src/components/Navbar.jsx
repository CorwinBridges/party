import {NavLink, Link} from 'react-router-dom';
import {partylogo} from '../assets';
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { HiOutlineSearch, HiSearch } from "react-icons/hi";

const Navbar = () => {
  const activeLink = 'underline decoration-pink-600 decoration-4 underline-offset-8 mx-5 z-10 relative';
  const normalLink = 'hover:underline decoration-pink-600 decoration-4 underline-offset-8 mx-5 z-10 relative'

  return (
    <nav
      className='w-full flex py-6 justify-between items-center text-white font-medium'>
      <Link to="/">
        <img src={partylogo} alt="Logo" className='h-28 z-10 relative'/>
      </Link>
      <div className='flex text-3xl'>
        <NavLink
          to="/About"
          className={({ isActive }) => (isActive ? activeLink : normalLink)}>ABOUT</NavLink>
        <NavLink
          to="/Shop"
          className={({ isActive }) => (isActive ? activeLink : normalLink)}>SHOP</NavLink>
        <NavLink
          to="/Contact"
          className={({ isActive }) => (isActive ? activeLink : normalLink)}>CONTACT</NavLink>
        <button className='mx-5 z-10 relative hover:text-pink-600 '><HiOutlineSearch /></button>
      </div>
      <button className='text-5xl mx-5 z-10 relative hover:text-pink-600'><HiOutlineShoppingBag /></button>
    </nav>
  )
}

export default Navbar
// dropdown search like designcode.io
// shop right sidebar like