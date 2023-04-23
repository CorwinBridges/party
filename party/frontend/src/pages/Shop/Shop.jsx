import { Carousel, Search, Sort, Filter, Product } from "../../pages"
import { PageWrapper } from "../../utils"

const Shop = () => {
  return (
    <>
      <Carousel />
      <div className="section-container">
        <Search />
      </div>
      <div className="section-container">
        <div className="grid gap-8 lg:grid-cols-6">
          <div className="col-span-1 hidden lg:block">
            <Filter />
          </div>
          <div className="lg:col-span-5">
            <div className="mb-8 flex justify-between lg:justify-end">
              <div className="block lg:hidden">
                <Filter />
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

export default PageWrapper(Shop)
