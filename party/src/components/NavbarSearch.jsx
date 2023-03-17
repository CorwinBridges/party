import { HiOutlineSearch, HiSearch } from "react-icons/hi"
import { useNavigate } from "react-router-dom"

import { Combobox, Popover } from "@headlessui/react"
import Fuse from "fuse.js"

import { useStateContext } from "../context/StateContext"
import { names } from "../data"

const NavbarSearch = () => {
  const { setQuery, query } = useStateContext("")
  const navigate = useNavigate()

  const fuse = new Fuse(names, {
    keys: ["title"],
    includeScore: true,
  })

  const results = fuse.search(query)
  const nameResults = results.map((result) => result.item)

  return (
    <Combobox
      as="div"
      onChange={(name) => {
        setQuery("")
        navigate(`/${name.id}`)
      }}
      className="relative text-white"
    >
      <div className="divide-y divide-pink-500">
        <div className="flex items-center px-4 py-2">
          <HiOutlineSearch className="text-3xl text-pink-500" />
          <Combobox.Input
            onChange={(e) => {
              setQuery(e.target.value)
            }}
            className="flex h-10 w-full items-center bg-inherit ml-4 text-2xl focus:outline-0 placeholder:text-white/70"
            placeholder="Search..."
          />
        </div>
        {nameResults.length > 0 && (
          <Combobox.Options
            static
            className="max-h-96 overflow-y-auto p-1 text-xl"
          >
            {nameResults.map((name) => (
              <Popover.Button className="w-full text-left" key={name.id}>
                <Combobox.Option key={name.id} value={name}>
                  {({ active }) => (
                    <div
                      className={`cursor-pointer rounded-md px-4 py-2 ${
                        active ? "bg-pink-500 text-white" : ""
                      }`}
                    >
                      {name.title}
                    </div>
                  )}
                </Combobox.Option>
              </Popover.Button>
            ))}
          </Combobox.Options>
        )}
        {query && nameResults.length === 0 && (
          <div className="p-1">
            <p className="px-4 py-2 text-xl">No results found</p>
          </div>
        )}
      </div>
    </Combobox>
  )
}

export default NavbarSearch
