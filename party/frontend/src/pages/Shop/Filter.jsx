import { HiChevronUp, HiChevronDown } from "react-icons/hi"

import { Disclosure, Menu } from "@headlessui/react"
import { motion, AnimatePresence } from "framer-motion"

import { useStateContext } from "../../context/StateContext"

const filters = [
  {
    id: "category",
    name: "Category",
    options: [
      { value: "Holidays", label: "Holidays" },
      { value: "Events", label: "Events" },
      { value: "Themes", label: "Themes" },
      { value: "Colors", label: "Colors" },
    ],
  },
  {
    id: "color",
    name: "Color",
    options: [
      { value: "gold", label: "Gold", color: "gold" },
      { value: "silver", label: "Silver", color: "silver" },
      { value: "black", label: "Black", color: "black" },
      { value: "orange", label: "Orange", color: "orange" },
      { value: "purple", label: "Purple", color: "purple" },
      { value: "brown", label: "Brown", color: "brown" },
      { value: "red", label: "Red", color: "red" },
      { value: "blue", label: "Blue", color: "blue" },
      { value: "yellow", label: "Yellow", color: "yellow" },
      { value: "pink", label: "Pink", color: "pink" },
    ],
  },
]

const Filter = () => {
  const {
    products,
    setFilteredProducts,
    checkedValues,
    setCheckedValues,
    checkedState,
    setCheckedState,
  } = useStateContext()

  const handleInputChange = (option, isChecked) => {
    const matchingValues = isChecked
      ? [...checkedValues, option.value]
      : checkedValues.filter((value) => value !== option.value)

    setCheckedValues(matchingValues)

    setCheckedState((prevState) => ({
      ...prevState,
      [option.value]: isChecked,
    }))

    const colorFilters = matchingValues.filter((value) =>
      filters
        .find((f) => f.id === "color")
        .options.some((o) => o.value === value)
    )
    const categoryFilters = matchingValues.filter((value) =>
      filters
        .find((f) => f.id === "category")
        .options.some((o) => o.value === value)
    )

    const matchingProducts =
      colorFilters.length === 0 && categoryFilters.length === 0
        ? products
        : products.filter((product) => {
            const matchingColors = colorFilters.every((color) =>
              product.color.includes(color)
            )
            const matchingCategories =
              categoryFilters.length === 0
                ? true
                : categoryFilters.some(
                    (category) => product.category === category
                  )
            return matchingColors && matchingCategories
          })

    setFilteredProducts(matchingProducts)
  }

  const getFilteredCount = (option) => {
    return products.filter((product) => {
      const isColor = filters
        .find((f) => f.id === "color")
        .options.some((o) => o.value === option.value)
      const isCategory = filters
        .find((f) => f.id === "category")
        .options.some((o) => o.value === option.value)

      const matchingColor = isColor
        ? product.color.includes(option.value)
        : true
      const matchingCategory = isCategory
        ? product.category === option.value
        : true

      return matchingColor && matchingCategory
    }).length
  }

  return (
    <div className="text-white">
      <div className="hidden lg:block">
        <h1 className="text-left text-4xl font-bold">Filter</h1>
        {/* Filter Panel */}
        {filters.map((section) => (
          <Disclosure
            defaultOpen
            key={section.id}
            as="div"
            className="border-b-2 py-4"
          >
            {({ open }) => (
              <>
                {/* button open and closed descriptions */}
                <Disclosure.Button className="flex w-full justify-between text-2xl">
                  <span className="bg-gradient-to-r from-red-400 to-pink-500 bg-clip-text font-semibold text-transparent">
                    {section.name}
                  </span>
                  <motion.div
                    animate={{ rotate: open ? -180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <HiChevronUp className="text-4xl" />
                  </motion.div>
                </Disclosure.Button>
                <AnimatePresence>
                  {open && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8, height: 0 }}
                      animate={{
                        opacity: 1,
                        scale: 1,
                        height: "auto",
                        transition: {
                          opacity: { duration: 0.2, delay: 0.1 }, // Add a delay of 0.1 seconds for opacity
                          scale: { duration: 0.3 },
                          height: { duration: 0.3 },
                        },
                      }}
                      exit={{
                        opacity: 0,
                        scale: 0.8,
                        height: 0,
                        transition: {
                          opacity: { duration: 0.15 }, // Faster transition for opacity on exit
                          scale: { duration: 0.3 },
                          height: { duration: 0.3 },
                        },
                      }}
                      style={{ originX: 0 }}
                    >
                      {section.options.map((option) => (
                        <div key={option.value} className="flex items-center">
                          <input
                            type="checkbox"
                            className="custom-pointer ml-3 h-4 w-4 rounded border-2 border-gray-300 text-pink-500 focus:ring-pink-400"
                            onChange={(e) =>
                              handleInputChange(option, e.target.checked)
                            }
                            checked={checkedState[option.value] || false}
                            style={{
                              borderColor: option.color,
                            }}
                          />
                          <label
                            className="ml-3 min-w-0 flex-1"
                            style={{
                              color: option.color,
                            }}
                          >
                            {option.label} ({getFilteredCount(option)})
                          </label>
                        </div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </>
            )}
          </Disclosure>
        ))}
      </div>

      {/* Mobile Dropdown Menu */}
      <div className="block lg:hidden">
        <Menu as="div" className="relative inline-block text-left">
          <div className="flex items-center">
            <span className="mr-2 hidden text-xl xs:block">Filter:</span>
            <Menu.Button className="glass inline-flex w-full items-center justify-center px-4 py-2 font-medium text-white">
              Filter{" "}
              <HiChevronDown
                className="-mr-1 ml-2 h-5 w-5"
                aria-hidden="true"
              />
            </Menu.Button>
          </div>

          <Menu.Items className="glass absolute left-14 z-20 mt-2 w-56 rounded-2xl bg-violet-800/50 p-1">
            {filters.map((section, index) => (
              <div
                key={section.name}
                className={`mx-4 py-2 ${
                  index !== filters.length - 1 ? "border-b-2" : ""
                }`}
              >
                {/* button open and closed descriptions */}
                <span className="bg-gradient-to-r from-red-400 to-pink-500 bg-clip-text text-2xl font-semibold text-transparent">
                  {section.name}
                </span>
                {section.options.map((option) => (
                  <div key={option.value} className="flex items-center">
                    <input
                      type="checkbox"
                      className="custom-pointer h-4 w-4 rounded border-gray-300 text-pink-500 focus:ring-pink-400"
                      onChange={(e) =>
                        handleInputChange(option, e.target.checked)
                      }
                      checked={checkedState[option.value] || false}
                    />
                    <label className="ml-3 min-w-0 flex-1" style={option.style}>
                      {option.label} ({getFilteredCount(option)})
                    </label>
                  </div>
                ))}
              </div>
            ))}
          </Menu.Items>
        </Menu>
      </div>
    </div>
  )
}

export default Filter
