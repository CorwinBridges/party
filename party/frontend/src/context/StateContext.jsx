import { createContext, useContext, useState } from "react"

const Context = createContext()

export const StateContext = ({ children }) => {
  const [open, setOpen] = useState(false)
  const [products, setProducts] = useState([])
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [filteredProducts, setFilteredProducts] = useState([])
  const [checkedValues, setCheckedValues] = useState([])
  const [checkedState, setCheckedState] = useState({})
  const [cartItems, setCartItems] = useState([])
  const [isCartVisible, setIsCartVisible] = useState(false)

  const toggleCart = () => {
    setIsCartVisible((isCartVisible) => !isCartVisible)
  }

  const handleCardClick = (product) => {
    setSelectedProduct(selectedProduct === product ? null : product)
  }

  const addToCart = (product) => {
    const itemIndex = cartItems.findIndex((item) => item._id === product._id)

    if (itemIndex === -1) {
      setCartItems([...cartItems, { ...product, quantity: 1 }])
    } else {
      const newCartItems = [...cartItems]
      newCartItems[itemIndex].quantity += 1
      setCartItems(newCartItems)
    }
  }

  const updateCartItemQuantity = (productId, newQuantity) => {
    const itemIndex = cartItems.findIndex((item) => item._id === productId)

    if (itemIndex !== -1 && newQuantity >= 1) {
      const newCartItems = [...cartItems]
      newCartItems[itemIndex].quantity = newQuantity
      setCartItems(newCartItems)
    }
  }

  const removeFromCart = (productId) => {
    setCartItems(cartItems.filter((item) => item._id !== productId))
  }

  const getTotalQuantity = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0)
  }

  return (
    <Context.Provider
      value={{
        open,
        setOpen,
        products,
        setProducts,
        selectedProduct,
        setSelectedProduct,
        handleCardClick,
        filteredProducts,
        setFilteredProducts,
        checkedValues,
        setCheckedValues,
        checkedState,
        setCheckedState,
        cartItems,
        setCartItems,
        isCartVisible,
        toggleCart,
        addToCart,
        updateCartItemQuantity,
        removeFromCart,
        getTotalQuantity,
      }}
    >
      {children}
    </Context.Provider>
  )
}

export const useStateContext = () => useContext(Context)
