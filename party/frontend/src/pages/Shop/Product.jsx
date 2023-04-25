import toast, { Toaster } from "react-hot-toast";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";



import { MotionConfig, motion } from "framer-motion";



import { useStateContext } from "../../context/StateContext";


const Product = () => {
  const { selectedProduct, handleCardClick, filteredProducts, addToCart } =
    useStateContext()

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
    addToCart(product)
    toast(`Added ${product.title} Box to Cart`, {
      duration: 2000,
      className:
        "!bg-purple-500 !shadow-purple-500 !rounded-full !text-white !shadow-xl !border-2 !border-white/20 !from-white/10 !to-white/0",
    })
  }

  return (
    <>
      {/* circle */}
      <Toaster />
      <div className="absolute -right-20">
        <div className="relative top-80 z-10 h-[400px] w-[400px] animate-[bounce_15s_linear_infinite] rounded-[50%] bg-gradient-to-b from-[#527CF4]/[0.54] to-[#7AEF7D]/[0.68] opacity-[0.75] blur-[3px]" />
      </div>
      <div className="absolute right-40">
        <div className="relative -bottom-[500px] z-10 h-[250px] w-[250px] animate-[bounce_15s_linear_infinite] rounded-[50%] bg-gradient-to-b from-[#527CF4]/[0.54] to-[#7AEF7D]/[0.68] opacity-[0.75] blur-[3px]" />
      </div>
      {/* product boxes */}
      <div className="grid grid-cols-1 gap-5 px-10 text-white sm:grid-cols-2 lg:px-0 xl:grid-cols-3">
        {filteredProducts.map((product) => (
          <div key={product._id}>
            <MotionConfig transition={{ duration: duration }}>
              <motion.div
                className={`glass p-8 text-2xl ${
                  selectedProduct === product
                    ? "fixed bottom-0 left-0 right-0 top-0 m-auto flex h-fit w-2/3 flex-col items-center "
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
                onClick={() => {
                  handleCardClick(product)
                }}
              >
                <div className="mb-4 gap-8 md:flex md:justify-center">
                  <div className="relative">
                    {product.best_seller && (
                      <motion.div
                        layout
                        className="fixed right-6 top-5 mx-auto mb-4 z-50 rounded-2xl bg-fuchsia-600 px-4 py-2 lg:text-base text-sm font-bold text-white">
                          Best Seller
                      </motion.div>
                    )}
                    <motion.img
                      className="mx-auto mb-4 max-h-24 rounded-3xl bg-purple-600/50 p-4 lg:max-h-44 xl:max-h-52"
                      layout
                      src={`/src/assets/boxes/${product.image}`}
                      alt={product.title}
                    />
                    <motion.div
                      layout="position"
                      className="mb-2 text-center text-lg font-bold md:text-2xl lg:text-3xl "
                    >
                      <motion.span
                        layout="position"
                        className="bg-gradient-to-r from-red-400 to-pink-500 bg-clip-text text-transparent"
                      >
                        {product.title}
                      </motion.span>
                    </motion.div>
                    <motion.div
                      layout="position"
                      className="mb-2 text-center text-lg font-medium md:text-xl lg:gap-8 lg:text-2xl "
                    >
                      <motion.span
                        className="bg-gradient-to-r from-red-400 to-pink-500 bg-clip-text text-transparent "
                        layout="position"
                      >
                        ${product.price}
                      </motion.span>
                    </motion.div>
                    <motion.div
                      layout="position"
                      className="col-span-1 mb-2 flex justify-center text-center text-sm font-light md:text-xl lg:text-2xl"
                    >
                      <span className="mr-2 text-yellow-500">
                        {product.rating}
                      </span>
                      <span className="mr-2 flex items-center">
                        {renderStarRating(product.rating)}
                      </span>
                    </motion.div>
                  </div>
                  <div
                    className={`flex items-center text-center text-sm font-normal md:text-xl lg:text-2xl ${
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