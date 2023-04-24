import { useState } from "react"
import { HiChevronDown } from "react-icons/hi"

import { Menu } from "@headlessui/react"

import { useStateContext } from "../../context/StateContext"

const Sort = () => {
  const [selectedOption, setSelectedOption] = useState("Default")
  const { filteredProducts, setFilteredProducts, products } = useStateContext()

  const options = [
    "Default",
    "Top Rated",
    "Low to High",
    "High to low",
    "A - Z",
    "Z - A",
  ]

  const handleSortClick = (option) => {
    setSelectedOption(option)
    let sortedProducts = [...filteredProducts]
    switch (option) {
      case "Top Rated":
        sortedProducts = sortedProducts.sort((a, b) => b.rating - a.rating)
        break
      case "Low to High":
        sortedProducts = sortedProducts.sort((a, b) => a.price - b.price)
        break
      case "High to low":
        sortedProducts = sortedProducts.sort((a, b) => b.price - a.price)
        break
      case "A - Z":
        sortedProducts = sortedProducts.sort((a, b) =>
          a.title.localeCompare(b.title)
        )
        break
      case "Z - A":
        sortedProducts = sortedProducts.sort((a, b) =>
          b.title.localeCompare(a.title)
        )
        break
      case "Default":
        sortedProducts = products
        break
    }
    setFilteredProducts(sortedProducts)
  }

  return (
    <div className="flex justify-end text-white">
      <Menu as="div" className="relative inline-block text-left">
        <div className="flex items-center">
          <span className="mr-2 text-xl">Sort:</span>
          <Menu.Button className="glass inline-flex w-full items-center justify-center px-4 py-2 font-medium text-white">
            {selectedOption}{" "}
            <HiChevronDown className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
          </Menu.Button>
        </div>

        <Menu.Items className="glass absolute right-0 z-20 mt-2 w-56 rounded-2xl bg-violet-800/50 p-1">
          {options.map((option) => (
            <Menu.Item key={option}>
              {({ active }) => (
                <li
                  className={`${
                    active ? "bg-pink-500" : ""
                  } block rounded-2xl px-4 py-2 text-sm font-medium hover:bg-pink-500`}
                  onClick={() => handleSortClick(option)}
                >
                  {option}
                </li>
              )}
            </Menu.Item>
          ))}
        </Menu.Items>
      </Menu>
    </div>
  )
}

export default Sort
