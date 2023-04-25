import { Payment, Order } from "../../pages"
import { PageWrapper } from "../../utils"

const Checkout = () => {
  return (
    <>
      <div className="section-container">
        <div className="grid grid-cols-1 gap-8 py-16 md:grid-cols-2">
          <div className="order-last md:order-first">
            <Payment />
          </div>
          <div className="order-first md:order-last">
            <Order />
          </div>
        </div>
      </div>
    </>
  )
}

export default PageWrapper(Checkout)
