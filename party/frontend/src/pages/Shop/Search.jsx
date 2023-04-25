import { useState, useRef } from "react"
import { HiOutlineSearch } from "react-icons/hi"

import { Combobox } from "@headlessui/react"
import axios from "axios"

import { useStateContext } from "../../context/StateContext"

const Search = () => {
  const [productQuery, setProductQuery] = useState("")
  const [searchResults, setSearchResults] = useState([])
  const { products, setFilteredProducts, filteredProducts, handleCardClick } =
    useStateContext()
  const searchInput = useRef(null)

  const searchItems = async (query) => {
    const schoolUrl = "http://10.64.32.244:6968/products"
    const localUrl = "http://localhost:6968/products"
    try {
      const res = await axios.get(localUrl)
      const filteredResults = res.data.filter((item) =>
        item.title.toLowerCase().includes(query.toLowerCase())
      )
      setSearchResults(filteredResults)
    } catch (err) {
      console.error("Error fetching search results from localUrl:", err)
      try {
        const res = await axios.get(schoolUrl)
        const filteredResults = res.data.filter((item) =>
          item.title.toLowerCase().includes(query.toLowerCase())
        )
        setSearchResults(filteredResults)
      } catch (err) {
        console.error("Error fetching search results from schoolUrl:", err)
      }
    }
  }

  const handleInputChange = (e) => {
    const query = e.target.value
    setProductQuery(query)

    if (query) {
      searchItems(query)
    } else {
      setSearchResults([])
    }
  }

  const handleSelectOption = (item) => {
    const correspondingProduct = products.find(
      (product) => product._id === item._id
    )
    if (!correspondingProduct) {
      return
    }
    setProductQuery("")
    setSearchResults([])
    handleCardClick(correspondingProduct)
    setTimeout(() => {
      if (searchInput.current) {
        searchInput.current.blur()
      }
    }, 0)
    const isProductInList = filteredProducts.some(
      (product) => product._id === item._id
    )
    if (!isProductInList) {
      const newFilteredProducts = [...filteredProducts, correspondingProduct]
      setFilteredProducts(newFilteredProducts)
    }
  }

  return (
    <section className="mb-12 text-lg text-white lg:text-2xl">
      <Combobox
        value={productQuery}
        onChange={(item) => handleSelectOption(item)}
        as="div"
        className="relative z-20 mx-auto w-2/3"
      >
        <Combobox.Input
          onChange={(e) => {
            handleInputChange(e)
          }}
          ref={searchInput}
          type="text"
          placeholder="Search for a product..."
          className="glass w-full bg-transparent px-6 py-2 pr-10 leading-tight outline-none placeholder:text-white/70 focus:border-pink-500 focus:ring-0"
        />

        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-5 text-2xl">
          <HiOutlineSearch />
        </div>
        {searchResults.length > 0 && (
          <Combobox.Options
            onMouseDown={(e) => {
              e.preventDefault()
            }}
            static
            className="glass absolute mt-2 max-h-96 w-full overflow-y-auto rounded-xl p-1 text-xl"
          >
            {searchResults.map((item) => (
              <Combobox.Option key={item._id} value={item}>
                {({ active }) => (
                  <div
                    onClick={(item) => {
                      handleSelectOption(item)
                    }}
                    className={`custom-pointer rounded-3xl px-4 py-2 ${
                      active ? "bg-pink-500 text-white" : ""
                    }`}
                  >
                    {item.title}
                  </div>
                )}
              </Combobox.Option>
            ))}
          </Combobox.Options>
        )}
        {productQuery && searchResults.length === 0 && (
          <div className="glass absolute mt-2 max-h-96 w-full overflow-y-auto rounded-xl p-1 text-xl">
            <p className="px-4 py-2 text-xl">No results found</p>
          </div>
        )}
      </Combobox>
    </section>
  )
}

export default Search
