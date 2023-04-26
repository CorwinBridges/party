import { IoClose } from "react-icons/io5"
import { Link } from "react-router-dom"

import { motion, AnimatePresence } from "framer-motion"

import { useStateContext } from "../context/StateContext"

const Cart = () => {
  const {
    cartItems,
    updateCartItemQuantity,
    removeFromCart,
    toggleCart,
    getTotalQuantity,
    isCartVisible,
    calculateSubtotalPrice,
    setOpen,
  } = useStateContext()

  const slideInVariants = {
    hidden: { x: "100%" },
    visible: { x: 0 },
    exit: { x: "100%" },
  }

  return (
    <>
      <AnimatePresence>
        {isCartVisible && (
          <motion.div
            key="cart"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={slideInVariants}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 z-40"
            onClick={toggleCart}
          >
            <div className="absolute inset-0 overflow-hidden">
              <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                <div
                  className="pointer-events-auto flex w-screen max-w-md flex-col bg-purple-700 shadow-xl"
                  onClick={(e) => e.stopPropagation()}
                >
                  {/* Header */}
                  <div className="flex items-center justify-between px-4 py-6 sm:px-6">
                    <h2 className="text-2xl font-semibold text-white">
                      Shopping cart ({getTotalQuantity()})
                    </h2>
                    <button onClick={toggleCart}>
                      <IoClose className="text-3xl text-white hover:text-gray-300" />
                    </button>
                  </div>

                  {/* Cart Items */}
                  <div className="flex-grow overflow-y-auto">
                    <div className="px-4 py-6 sm:px-6">
                      {cartItems.length === 0 ? (
                        <div className="py-8 text-center text-xl font-medium text-white">
                          Bag is empty
                        </div>
                      ) : (
                        <ul className="-my-6 divide-y-2 divide-white">
                          {cartItems.map((product) => (
                            <li key={product._id} className="flex py-6">
                              <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-2xl bg-gradient-to-bl from-red-400 via-pink-500 to-violet-500 p-2">
                                <img
                                  src={`/assets/boxes/${product.image}`}
                                  alt={product.title}
                                  className="h-full w-full object-cover object-center"
                                />
                              </div>

                              <div className="ml-4 flex flex-1 flex-col">
                                <div>
                                  <div className="flex justify-between text-xl font-medium text-white">
                                    <h3>{product.title}</h3>
                                    <p className="ml-4">
                                      ${" "}
                                      {(
                                        product.price * product.quantity
                                      ).toFixed(2)}
                                    </p>
                                  </div>
                                  <p className="mt-1 text-sm text-purple-300">
                                    {product.category}
                                  </p>
                                </div>
                                <div className="flex flex-1 items-end justify-between text-sm">
                                  <div className="text-purple-300">
                                    <label
                                      htmlFor={`quantity-${product._id}`}
                                      className="mr-2"
                                    >
                                      Qty
                                    </label>
                                    <input
                                      id={`quantity-${product._id}`}
                                      type="number"
                                      className="glass h-8 w-16 border-2 bg-transparent text-center focus:border-pink-500 focus:ring-0"
                                      value={product.quantity}
                                      min="1"
                                      max="69"
                                      onChange={(e) => {
                                        const newValue = parseInt(
                                          e.target.value
                                        )
                                        updateCartItemQuantity(
                                          product._id,
                                          newValue > 69 ? 69 : newValue
                                        )
                                      }}
                                    />
                                  </div>

                                  <div className="flex">
                                    <button
                                      type="button"
                                      onClick={() =>
                                        removeFromCart(product._id)
                                      }
                                      className="font-medium text-pink-500 hover:text-pink-400"
                                    >
                                      Remove
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>

                  {/* Subtotal */}
                  <div className="flex-shrink-0 border-t-2 border-white px-4 py-6 sm:px-6">
                    <div className="flex justify-between text-xl font-medium text-white">
                      <p>Subtotal</p>
                      <p>${calculateSubtotalPrice().toFixed(2)}</p>
                    </div>
                    <p className="mt-0.5 text-sm text-purple-300">
                      Shipping and taxes calculated at checkout.
                    </p>
                    <div className="mt-6">
                      <Link
                        to="/checkout"
                        onClick={() => {
                          toggleCart()
                          setOpen(false)
                        }}
                        className="flex items-center justify-center rounded-md border border-transparent bg-pink-500 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-pink-600"
                      >
                        Checkout
                      </Link>
                    </div>
                    <div className="mt-6 flex justify-center text-center text-sm text-purple-300">
                      <p>
                        or{" "}
                        <button
                          type="button"
                          className="font-medium text-pink-500 hover:text-pink-400"
                          onClick={toggleCart}
                        >
                          Continue Shopping
                        </button>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        className={`pointer-events-none absolute left-0 top-0 block h-full w-full bg-black opacity-0 ${
          isCartVisible ? "z-[39]" : "-z-10"
        }`}
        animate={{ opacity: isCartVisible ? 0.3 : 0 }}
      />
    </>
  )
}

export default Cart
