import { useState } from "react"
import toast from "react-hot-toast"
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa"

import { MotionConfig, motion } from "framer-motion"

import { useStateContext } from "../../context/StateContext"

const Product = () => {
  const { selectedProduct, handleCardClick, filteredProducts, addToCart } =
    useStateContext()
  const [imageLoaded, setImageLoaded] = useState({})

  const duration = 0.3

  // function to render star ratings
  const renderStarRating = (rating) => {
    const fullStars = Math.floor(rating)
    const hasHalfStar = rating % 1 >= 0.5
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0)

    return (
      <div className="flex items-center">
        {[...Array(fullStars)].map((_, index) => (
          <FaStar key={index} className="text-yellow-500" />
        ))}
        {hasHalfStar && <FaStarHalfAlt className="text-yellow-500" />}
        {[...Array(emptyStars)].map((_, index) => (
          <FaRegStar key={index + fullStars} className="text-yellow-500" />
        ))}
      </div>
    )
  }

  const handleAddToCart = (e, product) => {
    e.stopPropagation()

    const success = addToCart(product)

    if (success) {
      toast.success(`Added ${product.title} Box to Cart`, {
        duration: 2000,
      })
    } else {
      toast.error(`Max limit reached for the ${product.title} Box`, {
        duration: 2000,
      })
    }
  }

  return (
    <>
      {/* circle */}
      <div className="absolute -right-20">
        <div className="relative top-80 z-10 h-[400px] w-[400px] animate-[bounce_15s_linear_infinite] rounded-[50%] bg-gradient-to-b from-[#527CF4]/[0.54] to-[#7AEF7D]/[0.68] opacity-[0.75] blur-[3px]" />
      </div>
      <div className="absolute right-40">
        <div className="relative -bottom-[500px] z-10 h-[250px] w-[250px] animate-[bounce_15s_linear_infinite] rounded-[50%] bg-gradient-to-b from-[#527CF4]/[0.54] to-[#7AEF7D]/[0.68] opacity-[0.75] blur-[3px]" />
      </div>
      {/* product boxes */}
      <div className="grid grid-cols-1 gap-5 text-white sm:grid-cols-2 xl:grid-cols-3">
        {filteredProducts.map((product) => (
          <div
            key={product._id}
            className="h-[26.25rem] md:h-[27.25rem] lg:h-[28rem] xl:h-[30rem]"
          >
            <MotionConfig transition={{ duration: duration }}>
              <motion.div
                className={`glass p-8 text-2xl ${
                  selectedProduct === product
                    ? "fixed bottom-0 left-0 right-0 top-0 m-auto flex h-fit w-fit max-w-[calc(100%-2rem)] flex-col items-center"
                    : "relative hover:bg-purple-500/20"
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
                onClick={() => {
                  handleCardClick(product)
                }}
              >
                <div className="mb-4 w-full gap-8 md:flex md:justify-center">
                  <div className="relative flex-shrink-0">
                    {product.best_seller && (
                      <motion.div
                        layout
                        className="absolute -right-4 -top-3 z-50 mx-auto mb-4 rounded-2xl bg-fuchsia-600 px-4 py-2 text-xs font-bold text-white md:-right-12 md:-top-4 md:text-sm lg:text-base"
                      >
                        Best Seller
                      </motion.div>
                    )}
                    <div className="relative">
                      {!imageLoaded[product._id] && (
                        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform">
                          <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent text-pink-500 motion-reduce:animate-[spin_1.5s_linear_infinite]" />
                        </div>
                      )}
                      <motion.img
                        className={`mx-auto mb-4 h-44 rounded-3xl ${
                          !imageLoaded[product._id] ? "animate-pulse" : ""
                        } aspect-square bg-purple-600/50 p-4 xl:h-52`}
                        layout
                        src={`/assets/boxes/${product.image}`}
                        alt={product.title}
                        onLoad={() => {
                          setImageLoaded((prev) => ({
                            ...prev,
                            [product._id]: true,
                          }))
                        }}
                      />
                    </div>

                    <motion.div layout="position">
                      <div className="mb-2 bg-gradient-to-r from-red-400 to-pink-500 bg-clip-text text-center text-2xl font-bold text-transparent lg:text-3xl">
                        {product.title}
                      </div>
                      <div className="mb-2 bg-gradient-to-r from-red-400 to-pink-500 bg-clip-text text-center text-xl font-medium text-transparent lg:text-2xl">
                        <span className="mr-1">$</span>
                        {product.price}
                      </div>
                      <div className="col-span-1 mb-2 flex justify-center text-center text-xl font-light lg:text-2xl">
                        <span className="mr-2 text-yellow-500">
                          {product.rating}
                        </span>
                        <span className="mr-2 flex items-center">
                          {renderStarRating(product.rating)}
                        </span>
                      </div>
                    </motion.div>
                  </div>
                  <div
                    className={`flex max-w-2xl items-center text-center text-base font-normal sm:text-lg md:text-xl lg:text-2xl ${
                      selectedProduct === product ? "" : "hidden"
                    }`}
                  >
                    {product.description}
                  </div>
                </div>
                {/* Add to Cart */}
                <motion.div className="flex justify-end" layout="position">
                  <motion.button
                    layout="position"
                    className="glass px-4 py-2 text-center text-sm font-normal shadow-pink-500/30 ease-in-out md:text-lg lg:text-xl"
                    onClick={(e) => handleAddToCart(e, product)}
                  >
                    Add to Cart
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
          onClick={() => {
            if (selectedProduct) {
              handleCardClick(selectedProduct)
            }
          }}
          animate={{ opacity: selectedProduct ? 0.3 : 0 }}
        />
      </div>
    </>
  )
}

export default Product
