import { useState } from "react"
import { HiOutlineSearch } from "react-icons/hi"
import { useNavigate } from "react-router-dom"

import { Combobox } from "@headlessui/react"
import Fuse from "fuse.js"

import { names } from "../../data"

const Search = () => {
  const [productQuery, setProductQuery] = useState("")
  const navigate = useNavigate()

  const fuse = new Fuse(names, {
    keys: ["title"],
    includeScore: true,
  })

  const results = fuse.search(productQuery)
  const nameResults = results.map((result) => result.item)
  return (
    <section className="pb-16 lg:text-2xl text-lg text-white">
      <Combobox
        as="div"
        onChange={(name) => {
          setProductQuery("")
          navigate(`/${name.id}`)
        }}
        className="relative mx-auto w-2/3"
      >
        <Combobox.Input
          onChange={(e) => {
            setProductQuery(e.target.value)
          }}
          type="text"
          placeholder="search..."
          className="glass w-full bg-transparent py-2 px-8 pr-10 leading-tight placeholder:text-white/70 focus:outline-none"
        />

        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-5 text-2xl">
          <HiOutlineSearch />
        </div>
        {nameResults.length > 0 && (
          <Combobox.Options
            static
            className="max-h-96 overflow-y-auto p-1 text-xl"
          >
            {nameResults.map((name) => (
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
            ))}
          </Combobox.Options>
        )}
        {productQuery && nameResults.length === 0 && (
          <div className="p-1">
            <p className="px-4 py-2 text-xl">No results found</p>
          </div>
        )}
      </Combobox>
    </section>
  )
}

export default Search
