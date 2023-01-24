import { NavLink, Link, useNavigate } from 'react-router-dom';
import { partylogo } from '../assets';
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { HiOutlineSearch, HiSearch } from "react-icons/hi";
import { Combobox, Menu, Transition, Popover } from '@headlessui/react'
import { useState } from 'react';
import { names } from '../data';
import { Cart } from '.';
import { useStateContext } from '../context/StateContext';

  const activeLink = 'underline decoration-pink-600 decoration-4 underline-offset-8 mx-5 z-10 relative';
  const normalLink = 'hover:underline decoration-pink-600 decoration-4 underline-offset-8 mx-5 z-10 relative';

  const activeSearch = 'mx-5 z-10 relative text-pink-600';
  const normalSearch = 'mx-5 z-10 relative hover:text-pink-600';

const Navbar = () => {
  const { showCart, setShowCart, totalQuantities } = useStateContext();
  const[query, setQuery] = useState('')
  const navigate = useNavigate();

  const filteredNames = query ? names.filter(name => name.title.toLowerCase().includes(query.toLowerCase())): []

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
        <Popover as='div'className="relative flex text-left">
          <Popover.Button className={({ open }) => (open ? activeSearch : normalSearch)}><HiOutlineSearch/></Popover.Button>
          <Popover.Panel className="absolute right-0 z-20 mt-11 w-72 origin-top-right rounded-md bg-white">
            <Combobox as='div' 
            onChange={(name) => {
              setQuery('');
              navigate(`/${name.id}`);
            }}
            className='text-black relative'>
              <div className='divide-y divide-pink-600'>
                <div className='flex items-center px-3 py-1'>
                  <HiOutlineSearch className='text-pink-600'/>
                  <Combobox.Input 
                  onChange={(e) => {
                    setQuery(e.target.value)
                  }}
                  className='flex w-full items-center rounded-md px-4 py-2 text-2xl h-10 focus:outline-0' placeholder='Search...'/>
                </div>
                {filteredNames.length > 0 && (
                  <Combobox.Options static className='p-1 text-xl max-h-96 overflow-y-auto'>
                    {filteredNames.map((name) => (
                      <Popover.Button className='w-full text-left' key={name.id}>
                        <Combobox.Option key={name.id} value={name}>
                          {({ active }) => (
                            <div className={`px-4 py-2 rounded-md cursor-pointer ${active ? 'bg-pink-600 text-white' : ''}`}>
                              {name.title}
                            </div>
                          )} 
                        </Combobox.Option>
                      </Popover.Button>
                    ))}
                  </Combobox.Options>
                )}
                {
                  query && filteredNames.length === 0 &&  (
                    <div className='p-1'>
                      <p className='px-4 py-2 text-xl'>No results found</p>
                    </div>
                  )
                }
              </div>
            </Combobox>
          </Popover.Panel>
        </Popover>
      </div>
      <div>
        <button type='button' onClick={() => setShowCart(true)} className='text-6xl mx-5 z-10 relative'>
          <HiOutlineShoppingBag className='hover:text-pink-600'/>
          <span className='absolute text-lg bg-pink-600 rounded-full text-center font-semibold px-2 -right-1 top-8 border-4 border-white'>{totalQuantities}</span>
        </button>
        {showCart && <Cart />}
      </div>
    </nav>
  )
}

export default Navbar