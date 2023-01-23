import { NavLink, Link } from 'react-router-dom';
import { partylogo } from '../assets';
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { HiOutlineSearch, HiSearch } from "react-icons/hi";
import { Combobox, Menu, Transition } from '@headlessui/react'
import { useState } from 'react';
import { names } from '../data';
import { Cart } from '.';

  const activeLink = 'underline decoration-pink-600 decoration-4 underline-offset-8 mx-5 z-10 relative';
  const normalLink = 'hover:underline decoration-pink-600 decoration-4 underline-offset-8 mx-5 z-10 relative';

  const activeSearch = 'mx-5 z-10 relative text-pink-600';
  const normalSearch = 'mx-5 z-10 relative hover:text-pink-600';

const Navbar = () => {
  const [sidebarState, setSidebarState] = useState(false);
  const handleClick = () => {
    setSidebarState(current => !current);
  };

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
        <Menu as='div'className="relative flex text-left">
          <Menu.Button className={({ open }) => (open ? activeSearch : normalSearch)}><HiOutlineSearch/></Menu.Button>
          <Menu.Items className="absolute right-0 z-20 mt-11 w-72 origin-top-right rounded-md bg-white">
            <Menu.Item disabled>
              <Combobox as='div' className='text-black relative'>
                <div className='divide-y divide-pink-600'>
                  <div className='flex items-center px-3 py-1'>
                    <HiOutlineSearch className='text-pink-600'/>
                    <Combobox.Input className='flex w-full items-center rounded-md px-4 py-2 text-2xl h-10 focus:outline-0' placeholder='Search...'/>
                  </div>
                  <Combobox.Options static className='py-1 text-xl max-h-96 overflow-y-auto px-1'>
                    {names.map((name) => (
                      <Combobox.Option key={name.id}>
                        {({ active }) => (
                          <div className={`px-4 py-2 rounded-md ${active ? 'bg-pink-600 text-white' : ''}`}>
                            {name.title}
                          </div>
                        )} 
                      </Combobox.Option>
                    ))}
                  </Combobox.Options>
                </div>
              </Combobox>
            </Menu.Item>
          </Menu.Items>
        </Menu>
      </div>
      <div>
        <button type='button' onClick={handleClick} className='text-5xl mx-5 z-10 relative hover:text-pink-600'><HiOutlineShoppingBag /></button>
          {sidebarState && <Cart />}
      </div>
    </nav>
  )
}

export default Navbar
// dropdown search like designcode.io
// shop right sidebar like