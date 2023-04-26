import { useStateContext } from "../../context/StateContext"

const Order = () => {
  const {
    cartItems,
    updateCartItemQuantity,
    removeFromCart,
    calculateSubtotalPrice,
    calculateTaxes,
    calculateTotalPrice,
  } = useStateContext()

  return (
    <section className="px-10 py-16 md:px-0">
      <div className="mb-4 bg-gradient-to-bl from-purple-500 to-red-500 bg-clip-text text-2xl font-medium text-transparent md:text-3xl">
        Order Summary:
      </div>
      <div className="relative z-10 flex max-h-[48rem] flex-col rounded-3xl bg-purple-600/50 p-4">
        {/* Cart items */}
        <div className="flex-grow overflow-y-auto">
          <div className="px-4 py-6 sm:px-6">
            {cartItems.length === 0 ? (
              <div className="py-8 text-center text-xl font-medium text-white md:text-2xl">
                Bag is empty
              </div>
            ) : (
              <ul className="-my-6 divide-y-2 divide-white">
                {cartItems.map((product) => (
                  <li key={product._id} className="flex py-6">
                    <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-2xl bg-gradient-to-bl from-red-400 via-pink-500 to-violet-500 p-2">
                      <img
                        src={`/src/assets/boxes/${product.image}`}
                        alt={product.title}
                        className="h-full w-full object-cover object-center"
                      />
                    </div>

                    <div className="ml-4 flex flex-1 flex-col">
                      <div>
                        <div className="flex justify-between text-xl font-medium text-white">
                          <h3>{product.title}</h3>
                          <p className="ml-4">
                            $ {(product.price * product.quantity).toFixed(2)}
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
                              const newValue = parseInt(e.target.value)
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
                            onClick={() => removeFromCart(product._id)}
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

        {/* Total */}
        <div className="flex-shrink-0 divide-y-2 border-t-2 border-white px-4 sm:px-6">
          <div className="space-y-1 py-6 text-base text-white">
            <div className="flex justify-between">
              <p className=" text-pink-500 md:text-lg">Subtotal</p>
              <p>${calculateSubtotalPrice().toFixed(2)}</p>
            </div>
            <div className="flex justify-between">
              <p className=" text-pink-500 md:text-lg">Shipping</p>
              <p>$0.00</p>
            </div>
            <div className="flex justify-between">
              <p className=" text-pink-500 md:text-lg">Taxes</p>
              <p>${calculateTaxes().toFixed(2)}</p>
            </div>
          </div>
          <div className="py-6 text-xl font-medium text-white md:text-2xl">
            <div className="flex justify-between">
              <p className=" text-pink-500">Total</p>
              <p>${calculateTotalPrice().toFixed(2)}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Order
