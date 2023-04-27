import { Payment, Order } from "../../pages"
import { PageWrapper } from "../../utils"

const Checkout = () => {
  return (
    <>
      <div className="section-container">
        <div className="grid grid-cols-1 gap-8 py-16 lg:grid-cols-2">
          <div className="order-last lg:order-first">
            <Payment />
          </div>
          <div className="order-first lg:order-last">
            <Order />
          </div>
        </div>
      </div>
    </>
  )
}

export default PageWrapper(Checkout, "Checkout")
