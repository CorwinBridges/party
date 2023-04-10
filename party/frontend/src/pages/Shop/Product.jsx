import { useState, useEffect } from "react"
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa"

import axios from "axios"
import { MotionConfig, motion } from "framer-motion"

import { partylogonowords } from "../../assets"

const productsTest = [
  {
    id: 1,
    title: "Birthday",
    price: 10,
    image: partylogonowords,
    rating: 4,
    old_price: 20,
    quantity: 10,
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor minima totam ipsam non libero molestias?",
  },
  {
    id: 2,
    title: "New Year's Eve",
    price: 20,
    image: partylogonowords,
    rating: 5,
    old_price: 40,
    quantity: 20,
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor minima totam ipsam non libero molestias?",
  },
  {
    id: 3,
    title: "Pi Day",
    price: 5,
    image: partylogonowords,
    rating: 4.5,
    old_price: 20,
    quantity: 150,
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor minima totam ipsam non libero molestias?",
  },
  {
    id: 4,
    title: "4th of July",
    price: 25,
    image: partylogonowords,
    rating: 3,
    old_price: 60,
    quantity: 75,
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor minima totam ipsam non libero molestias?",
  },
  {
    id: 5,
    title: "Valentine's Day",
    price: 15,
    image: partylogonowords,
    rating: 3.5,
    old_price: 20,
    quantity: 45,
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor minima totam ipsam non libero molestias?",
  },
  {
    id: 6,
    title: "Halloween",
    price: 40,
    image: partylogonowords,
    rating: 5,
    old_price: 50,
    quantity: 60,
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor minima totam ipsam non libero molestias?",
  },
]

const Product = () => {
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [products, setProducts] = useState([])

  const handleCardClick = (product) => {
    setSelectedProduct(selectedProduct === product ? null : product)
  }

  const duration = 0.3

  // function to render star ratings
  const renderStarRating = (rating) => {
    const fullStars = Math.floor(rating)
    const hasHalfStar = rating % 1 >= 0.5

    return (
      <div className="flex">
        {/* Full Stars */}
        {[...Array(fullStars)].map((_, index) => (
          <FaStar key={index} className="text-yellow-500" />
        ))}
        {/* Half Star */}
        {hasHalfStar && <FaStarHalfAlt className="text-yellow-500" />}
        {/* Empty Stars */}
        {[...Array(5 - Math.ceil(rating))].map((_, index) => (
          <FaRegStar key={index + fullStars} className="text-yellow-500" />
        ))}
      </div>
    )
  }

  useEffect(() => {
    const getProducts = async () => {
      const response = await axios.get("http://localhost:6968/products")
      setProducts(response.data)
    }
    getProducts()
  }, [])

  const handleSortClick = (sortType) => {
    let sortedProducts
    if (sortType === "title-asc") {
      sortedProducts = [...products].sort((a, b) =>
        a.title.localeCompare(b.title)
      )
    } else if (sortType === "title-desc") {
      sortedProducts = [...products].sort((a, b) =>
        b.title.localeCompare(a.title)
      )
    } else if (sortType === "price-asc") {
      sortedProducts = [...products].sort((a, b) => a.price - b.price)
    } else if (sortType === "price-desc") {
      sortedProducts = [...products].sort((a, b) => b.price - a.price)
    } else if (sortType === "rating-asc") {
      sortedProducts = [...products].sort((a, b) => a.rating - b.rating)
    } else if (sortType === "rating-desc") {
      sortedProducts = [...products].sort((a, b) => b.rating - a.rating)
    }
    setProducts(sortedProducts)
  }

  return (
    <>
      <h1 className="text-5xl font-bold text-yellow-400">
        ***These are just for testing***
      </h1>
      <div className="flex">
        <button
          className="rounded-md bg-indigo-600 px-4 py-2 text-center text-white shadow-lg hover:bg-indigo-700 focus:outline-none"
          onClick={() => handleSortClick("title-asc")}
        >
          Sort A-Z
        </button>
        <button
          className="ml-2 rounded-md bg-indigo-600 px-4 py-2 text-center text-white shadow-lg hover:bg-indigo-700 focus:outline-none"
          onClick={() => handleSortClick("title-desc")}
        >
          Sort Z-A
        </button>
        <button
          className="ml-2 rounded-md bg-indigo-600 px-4 py-2 text-center text-white shadow-lg hover:bg-indigo-700 focus:outline-none"
          onClick={() => handleSortClick("price-asc")}
        >
          Sort Price: Low to High
        </button>
        <button
          className="ml-2 rounded-md bg-indigo-600 px-4 py-2 text-center text-white shadow-lg hover:bg-indigo-700 focus:outline-none"
          onClick={() => handleSortClick("price-desc")}
        >
          Sort Price: High to Low
        </button>
        <button
          className="ml-2 rounded-md bg-indigo-600 px-4 py-2 text-center text-white shadow-lg hover:bg-indigo-700 focus:outline-none"
          onClick={() => handleSortClick("rating-asc")}
        >
          Sort Rating: Low to High
        </button>
        <button
          className="ml-2 rounded-md bg-indigo-600 px-4 py-2 text-center text-white shadow-lg hover:bg-indigo-700 focus:outline-none"
          onClick={() => handleSortClick("rating-desc")}
        >
          Sort Rating: High to Low
        </button>
      </div>
      <div className="grid grid-cols-1 gap-4 text-white lg:grid-cols-2 xl:grid-cols-3">
        {products.map((product, index) => (
          <div key={index}>
            <MotionConfig transition={{ duration: duration }}>
              <motion.div
                className={`glass cursor-pointer p-8 text-2xl ${
                  selectedProduct === product
                    ? "fixed bottom-0 left-0 right-0 top-0 m-auto flex h-3/4 w-2/3 flex-col items-center"
                    : "relative min-h-full"
                }`}
                style={{ borderRadius: 69 }}
                animate={
                  selectedProduct === product
                    ? { zIndex: 45 }
                    : {
                        zIndex: 10,
                        transition: {
                          delay: duration,
                        },
                      }
                }
                layout
                onClick={() => handleCardClick(product)}
              >
                <motion.img
                  className="mx-auto mb-4 max-h-48"
                  layout
                  src={partylogonowords}
                  alt={product.title}
                />
                <motion.div
                  layout="position"
                  className="mb-2 flex justify-between"
                >
                  <span>{product.title}</span>{" "}
                  <motion.span layout>${product.price}</motion.span>
                </motion.div>
                {/* Render Star Rating */}
                <motion.div
                  layout="position"
                  className="mb-4 flex items-center"
                >
                  <span className="mr-2 text-yellow-500">{product.rating}</span>
                  <span className="mr-2">
                    {renderStarRating(product.rating)}
                  </span>
                  <span className="text-neutral-400 underline">
                    ({product.quantity})
                  </span>
                </motion.div>
                <motion.div layout="position" className="mb-2 text-base">
                  Hello
                </motion.div>
                <motion.div className="flex justify-end" layout="position">
                  <motion.button
                    layout="position"
                    className="glass px-4 py-2 text-center text-2xl font-medium shadow-pink-500/30 duration-200 ease-in-out hover:scale-110"
                  >
                    Buy
                  </motion.button>
                </motion.div>
              </motion.div>
            </MotionConfig>
          </div>
        ))}
        <motion.div
          className={`pointer-events-auto absolute left-0 top-0 block h-full w-full bg-black opacity-0 ${
            selectedProduct ? "z-40" : "-z-10"
          }`}
          animate={{ opacity: selectedProduct ? 0.3 : 0 }}
        />
      </div>
    </>
  )
}

export default Product
