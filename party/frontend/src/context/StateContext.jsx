import React, { createContext, useContext, useState } from "react";


const Context = createContext()

export const StateContext = ({ children }) => {
  const [isShowing, setIsShowing] = useState(false)
  const [open, setOpen] = useState(false)
  const [products, setProducts] = useState([])
  const [selectedProduct, setSelectedProduct] = useState(null)

  const handleCardClick = (product) => {
    setSelectedProduct(selectedProduct === product ? null : product)
  }

  return (
    <Context.Provider
      value={{
        isShowing,
        setIsShowing,
        open,
        setOpen,
        products,
        setProducts,
        selectedProduct,
        setSelectedProduct,
        handleCardClick,
      }}
    >
      {children}
    </Context.Provider>
  )
}

export const useStateContext = () => useContext(Context)