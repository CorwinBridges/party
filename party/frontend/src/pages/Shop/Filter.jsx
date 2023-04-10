import { useState } from "react"
import { HiChevronUp } from "react-icons/hi"
import { Range, getTrackBackground } from "react-range"

import { Disclosure } from "@headlessui/react"
import { motion, AnimatePresence } from "framer-motion"

const filters = [
  {
    id: "color",
    name: "Color",
    options: [
      { value: "white", label: "White", checked: false },
      { value: "beige", label: "Beige", checked: false },
      { value: "blue", label: "Blue", checked: true },
      { value: "brown", label: "Brown", checked: false },
      { value: "green", label: "Green", checked: false },
      { value: "purple", label: "Purple", checked: false },
    ],
  },
  {
    id: "category",
    name: "Category",
    options: [
      { value: "new-arrivals", label: "New Arrivals", checked: false },
      { value: "sale", label: "Sale", checked: false },
      { value: "travel", label: "Travel", checked: true },
      { value: "organization", label: "Organization", checked: false },
      { value: "accessories", label: "Accessories", checked: false },
    ],
  },
  {
    id: "size",
    name: "Size",
    options: [
      { value: "2l", label: "2L", checked: false },
      { value: "6l", label: "6L", checked: false },
      { value: "12l", label: "12L", checked: false },
      { value: "18l", label: "18L", checked: false },
      { value: "20l", label: "20L", checked: false },
      { value: "40l", label: "40L", checked: true },
    ],
  },
]

const subCategories = [
  { name: "Totes", href: "#" },
  { name: "Backpacks", href: "#" },
  { name: "Travel Bags", href: "#" },
  { name: "Hip Bags", href: "#" },
  { name: "Laptop Sleeves", href: "#" },
]

const STEP = 0.1
const MIN = 0
const MAX = 100

const Filter = ({ rtl }) => {
  const [values, setValues] = useState([20, 40])

  return (
    <div className="text-white">
      <h1 className="text-center text-4xl font-bold">Filter</h1>
      <h2>Categories</h2>
      <h2>Event Type</h2>
      <h2>Party Theme</h2>
      <h2>Color</h2>
      <h2>Price</h2>
      <h2>Brand</h2>
      <ul className="border-b-2 py-4">
        {subCategories.map((category) => (
          <li key={category.name}>
            <a href={category.href}>{category.name}</a>
          </li>
        ))}
      </ul>
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
                <span>{section.name}</span>
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
                    {section.options.map((option, optionIdx) => (
                      <div key={option.value} className="flex items-center">
                        <input
                          id={`filter-mobile-${section.id}-${optionIdx}`}
                          name={`${section.id}[]`}
                          defaultValue={option.value}
                          type="checkbox"
                          defaultChecked={option.checked}
                          className="h-4 w-4 rounded border-gray-300 text-pink-500 focus:ring-pink-400"
                        />
                        <label
                          htmlFor={`filter-mobile-${section.id}-${optionIdx}`}
                          className="ml-3 min-w-0 flex-1"
                        >
                          {option.label}
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
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        <Range
          step={0.1}
          min={0}
          max={100}
          values={values}
          onChange={(values) => setValues(values)}
          renderTrack={({ props, children }) => (
            <div {...props} className="h-1 w-full bg-gray-400">
              {children}
            </div>
          )}
          renderThumb={({ props }) => (
            <div {...props} className="h-6 w-6 rounded-full bg-gray-900" />
          )}
        />
      </div>
    </div>
  )
}

export default Filter
