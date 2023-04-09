import { RadioGroup, Disclosure } from "@headlessui/react"

const Filter = () => {
  return (
    <Disclosure as="div" className="text-white">
      <h1 className="text-2xl font-medium">Filter</h1>
      <Disclosure.Button>Categories</Disclosure.Button>
      <Disclosure.Panel>Yo</Disclosure.Panel>
      <Disclosure.Button>Event Type</Disclosure.Button>
      <h2>Party Theme</h2>
      <h2>Rating</h2>
      <h2>Color</h2>
      <h2>Price</h2>
      <h2>Brand</h2>
    </Disclosure>
  )
}

export default Filter
