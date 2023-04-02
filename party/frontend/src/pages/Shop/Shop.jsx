import { useState, useEffect } from "react"

import Axios from "axios"

import {
  Carousel,
  Search,
  Sort,
  Filter,
  Product,
  Pagination,
  Preview,
} from "../../pages"
import { PageWrapper } from "../../utils"

const products = [
  {
    title: "Birthday",
    price: 10,
    image: "https://via.placeholder.com/200x200/FF0000/FFFFFF?text=Product+1",
    rating: 4,
    old_price: 20,
    quantity: 10,
  },
  {
    title: "New Year's Eve",
    price: 20,
    image: "https://via.placeholder.com/200x200/00FF00/FFFFFF?text=Product+2",
    rating: 5,
    old_price: 40,
    quantity: 20,
  },
  {
    title: "Pi Day",
    price: 5,
    image: "https://via.placeholder.com/200x200/0000FF/FFFFFF?text=Product+3",
    rating: 4.5,
    old_price: 20,
    quantity: 150,
  },
  {
    title: "4th of July",
    price: 25,
    image: "https://via.placeholder.com/200x200/FFFF00/FFFFFF?text=Product+4",
    rating: 3,
    old_price: 60,
    quantity: 75,
  },
  {
    title: "Valentine's Day",
    price: 15,
    image: "https://via.placeholder.com/200x200/00FFFF/FFFFFF?text=Product+5",
    rating: 3.5,
    old_price: 20,
    quantity: 45,
  },
  {
    title: "Halloween",
    price: 40,
    image: "https://via.placeholder.com/200x200/FF00FF/FFFFFF?text=Product+6",
    rating: 5,
    old_price: 50,
    quantity: 60,
  },
]

const Shop = () => {
  const [listOfProducts, setListOfProducts] = useState([])
  const [title, setTitle] = useState("")
  const [price, setPrice] = useState(0)
  const [description, setDescription] = useState("")
  useEffect(() => {
    Axios.get("http://localhost:6968/getProducts").then((response) => {
      setListOfProducts(response.data)
      console.log(...response.data)
    })
  }, [])

  const createProduct = () => {
    Axios.post("http://localhost:6968/createProduct", {
      title,
      price,
      description,
    }).then((response) => {
      alert("Product created")
      setListOfProducts([...listOfProducts, { title, price, description }])
    })
  }

  return (
    <>
      <Carousel />
      <div className="section-container">
        <Search />
      </div>
      <div className="section-container">
        <div className="grid grid-cols-6 gap-8">
          <div className="col-span-1">
            <Filter />
          </div>
          <div className="col-span-5">
            <div className="mb-8">
              <Sort />
            </div>
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
              {listOfProducts.map((product, index) => (
                <Product key={index} {...product} />
              ))}
            </div>
            <div>
              <input
                type="text"
                placeholder="Title..."
                onChange={(e) => {
                  setTitle(e.target.value)
                }}
              />
              <input
                type="number"
                placeholder="Price..."
                onChange={(e) => {
                  setPrice(e.target.value)
                }}
              />
              <input
                type="text"
                placeholder="Description..."
                onChange={(e) => {
                  setDescription(e.target.value)
                }}
              />
              <button type="button" onClick={createProduct}>
                Create Product
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="section-container">
        <Pagination />
      </div>
      <div className="section-container">
        <Preview />
      </div>
    </>
  )
}

export default PageWrapper(Shop)
