import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='w-full flex py-6 justify-between items-center navbar h-[32px]'>
      <img src="../assets/Partylogo.png" alt="Logo" />
      <ul>
        <li>
          <NavLink to="/" className="hover:bg-pink-600">Home</NavLink>
        </li>
        <li>
          <NavLink to="/About" className="hover:bg-pink-600">About</NavLink>
        </li>
        <li>
          <NavLink to="/Shop" className="hover:bg-pink-600">Shop</NavLink>
        </li>
        <li>
          <NavLink to="/Contact" className="hover:bg-pink-600">Contact</NavLink>
        </li>
      </ul>
    </nav> 
  )
}

export default Navbar