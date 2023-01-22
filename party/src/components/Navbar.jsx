import {NavLink, Link} from 'react-router-dom';
import {partylogo} from '../assets';
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { HiOutlineSearch, HiSearch } from "react-icons/hi";

const Navbar = () => {
  return (
    <nav
      className='w-full flex py-6 justify-between items-center navbar text-white font-medium'>
      <Link to="/">
        <img src={partylogo} alt="Logo" className='h-28 z-10 relative'/>
      </Link>
      <ul className='justify-center items-center flex text-3xl'>
        <li>
          <NavLink
            to="/About"
            className="hover:underline decoration-pink-600 decoration-4 underline-offset-8 mx-5 z-10 relative">ABOUT</NavLink>
        </li>
        <li>
          <NavLink
            to="/Shop"
            className="hover:underline decoration-pink-600 decoration-4 underline-offset-8 mx-5 z-10 relative">SHOP</NavLink>
        </li>
        <li>
          <NavLink
            to="/Contact"
            className="hover:underline decoration-pink-600 decoration-4 underline-offset-8 mx-5 z-10 relative">CONTACT</NavLink>
        </li>
        <button className='hover:underline decoration-pink-600 decoration-4 underline-offset-8 mx-5 z-10 relative'><HiOutlineSearch /></button>
      </ul>
      <button className='text-5xl hover:underline decoration-pink-600 decoration-4 underline-offset-8 mx-5 z-10 relative'><HiOutlineShoppingBag /></button>

    </nav>
  )
}

export default Navbar