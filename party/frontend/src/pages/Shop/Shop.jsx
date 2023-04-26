import { useStateContext } from "../../context/StateContext"
import { Carousel, Search, Sort, Filter, Product } from "../../pages"
import { PageWrapper } from "../../utils"

const Shop = () => {
  const { filteredProducts } = useStateContext()

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
            <Product />
          </div>
        </div>
      </div>
    </>
  )
}

export default PageWrapper(Shop, "Shop")
