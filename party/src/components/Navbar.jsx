import {NavLink} from 'react-router-dom';
import {partylogo} from '../assets';

const Navbar = () => {
  return (
    <nav
      className='w-full flex py-6 justify-between items-center navbar text-white font-medium'>
      <img src={partylogo} alt="Logo" className='h-48'/>
      <ul className='justify-center items-center flex text-3xl'>
        <li>
          <NavLink
            to="/"
            className="hover:underline decoration-pink-600 decoration-4 underline-offset-8 mx-5">Home</NavLink>
        </li>
        <li>
          <NavLink
            to="/About"
            className="hover:underline decoration-pink-600 decoration-4 underline-offset-8 mx-5">About</NavLink>
        </li>
        <li>
          <NavLink
            to="/Shop"
            className="hover:underline decoration-pink-600 decoration-4 underline-offset-8 mx-5">Shop</NavLink>
        </li>
        <li>
          <NavLink
            to="/Contact"
            className="hover:underline decoration-pink-600 decoration-4 underline-offset-8 mx-5">Contact</NavLink>
        </li>
        <button>search</button>
      </ul>
      <button>shop</button>

    </nav>
  )
}

export default Navbar