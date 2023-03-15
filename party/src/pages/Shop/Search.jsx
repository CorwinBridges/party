import { HiOutlineSearch } from "react-icons/hi"
import { useNavigate } from "react-router-dom"

import { Combobox } from "@headlessui/react"
import Fuse from "fuse.js"

import { names } from "../../data"

const Search = () => {
  return (
    <section className="pb-16 text-2xl text-white">
      <div className="relative mx-auto w-2/3">
        <input
          type="text"
          placeholder="search..."
          className="glass w-full bg-transparent py-4 px-8 pr-10 leading-tight placeholder:text-white/70 focus:outline-none"
        />
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-5 text-2xl">
          <HiOutlineSearch />
        </div>
      </div>
    </section>
  )
}

export default Search
