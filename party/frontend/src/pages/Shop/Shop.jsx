import {
  Carousel,
  Search,
  Sort,
  Filter,
  Product,
  Pagination,
  Preview,
} from "../../pages"
import { PageWrapper } from "../../utils"

const products = [
  {
    title: "Product 1",
    price: 10,
    image: "https://via.placeholder.com/200x200/FF0000/FFFFFF?text=Product+1",
    rating: 4,
    old_price: 20,
    quantity: 10,
  },
  {
    title: "Product 2",
    price: 20,
    image: "https://via.placeholder.com/200x200/00FF00/FFFFFF?text=Product+2",
    rating: 5,
    old_price: 40,
    quantity: 20,
  },
  {
    title: "Product 3",
    price: 5,
    image: "https://via.placeholder.com/200x200/0000FF/FFFFFF?text=Product+3",
    rating: 4.5,
    old_price: 20,
    quantity: 150,
  },
  {
    title: "Product 4",
    price: 25,
    image: "https://via.placeholder.com/200x200/FFFF00/FFFFFF?text=Product+4",
    rating: 3,
    old_price: 60,
    quantity: 75,
  },
  {
    title: "Product 5",
    price: 15,
    image: "https://via.placeholder.com/200x200/00FFFF/FFFFFF?text=Product+5",
    rating: 3.5,
    old_price: 20,
    quantity: 45,
  },
  {
    title: "Product 6",
    price: 40,
    image: "https://via.placeholder.com/200x200/FF00FF/FFFFFF?text=Product+6",
    rating: 5,
    old_price: 50,
    quantity: 60,
  },
]

const Shop = () => {
  return (
    <>
      <Carousel />
      <div className="section-container">
        <Search />
      </div>
      <div className="section-container">
        <div className="grid grid-cols-6 gap-8">
          <div className="col-span-1">
            <Filter />
          </div>
          <div className="col-span-5">
            <div className="mb-8">
              <Sort />
            </div>
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
              {products.map((product, index) => (
                <Product key={index} {...product} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="section-container">
        <Pagination />
      </div>
      <div className="section-container">
        <Preview />
      </div>
    </>
  )
}

export default PageWrapper(Shop)
