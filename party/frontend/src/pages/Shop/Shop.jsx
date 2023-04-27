import { useState, useEffect } from "react"

import axios from "axios"

import { useStateContext } from "../../context/StateContext"
import { Carousel, Search, Sort, Filter, Product } from "../../pages"
import { PageWrapper } from "../../utils"

const Shop = () => {
  const { filteredProducts, setFilteredProducts, setProducts } =
    useStateContext()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const websiteUrl = "https://partyinaboxserver.vercel.app/api/products"
    const localUrl = "http://localhost:6968/api/products"

    const getProducts = async () => {
      try {
        const response = await axios.get(websiteUrl)
        setProducts(response.data)
        setFilteredProducts(response.data)
        setLoading(false)
      } catch (error) {
        console.error("Error fetching products from websiteUrl:", error)

        try {
          const response = await axios.get(localUrl)
          setProducts(response.data)
          setFilteredProducts(response.data)
          setLoading(false)
        } catch (error) {
          console.error("Error fetching products from localUrl:", error)
        }
      }
    }

    getProducts()
  }, [])

  return (
    <>
      <Carousel />
      <div className="section-container">
        <Search />
      </div>
      <div className="section-container">
        <div className="mb-16 grid gap-8 lg:grid-cols-6">
          <div className="col-span-1 hidden lg:block">
            <Filter />
          </div>
          <div className="lg:col-span-5">
            <div className="mb-8 flex items-center justify-between">
              <div className="block lg:hidden">
                <Filter />
              </div>
              <div className="hidden text-xl text-purple-400 sm:block">
                Showing {filteredProducts.length} Result(s)
              </div>
              <Sort />
            </div>
            {loading ? (
              <div className="flex h-[50vh] items-center justify-center">
                <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent text-pink-500 motion-reduce:animate-[spin_1.5s_linear_infinite]" />
                <span className="ml-4 text-4xl text-white">
                  Loading Products...
                </span>
              </div>
            ) : (
              <Product />
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default PageWrapper(Shop, "Shop")
