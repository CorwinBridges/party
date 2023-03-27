import { PageWrapper } from "../../utils"

const Shipping = () => {
  return (
    <div className="section-container">
      <section className="py-16 text-white">
        <div className="mx-auto max-w-5xl">
          <h1 className="mb-8 text-center text-5xl font-bold">
            Shipping Policy
          </h1>
          <h2 className="mb-4 text-2xl font-semibold">
            1. Shipping Method and Timing:
          </h2>
          <ul className="ml-8 mb-4 list-disc">
            <li>
              We offer standard shipping through various carriers including
              USPS, UPS, and FedEx.
            </li>
            <li>
              Orders are processed and shipped within 1-2 business days after
              payment is received.
            </li>
            <li>
              Delivery times vary based on the shipping method selected and the
              destination address.
            </li>
          </ul>
          <h2 className="mb-4 text-2xl font-semibold">2. Shipping Rates:</h2>
          <ul className="ml-8 mb-4 list-disc">
            <li>
              Shipping rates are calculated at checkout based on the weight and
              destination of the order.
            </li>
            <li>
              Customers can choose from various shipping options available with
              the corresponding rates.
            </li>
          </ul>
          <h2 className="mb-4 text-2xl font-semibold">3. Free Shipping:</h2>
          <ul className="ml-8 mb-4 list-disc">
            <li>
              We offer free standard shipping on orders over $50 within the
              continental United States.
            </li>
            <li>
              The order total must be $50 or more after any discounts and before
              tax to qualify for free shipping.
            </li>
          </ul>
          <h2 className="mb-4 text-2xl font-semibold">
            4. International Shipping:
          </h2>
          <ul className="ml-8 mb-4 list-disc">
            <li>We currently do not offer international shipping.</li>
          </ul>
          <h2 className="mb-4 text-2xl font-semibold">5. Order Tracking:</h2>
          <ul className="ml-8 mb-4 list-disc">
            <li>We provide tracking information for all orders.</li>
            <li>
              Customers will receive an email with a tracking number once the
              order has shipped.
            </li>
          </ul>
          <h2 className="mb-4 text-2xl font-semibold">6. Address Changes:</h2>
          <ul className="ml-8 mb-4 list-disc">
            <li>
              Please ensure that the shipping address provided during checkout
              is accurate.
            </li>
            <li>
              We are not responsible for packages that are sent to an incorrect
              address due to customer error.
            </li>
            <li>
              If you need to make changes to your shipping address, please
              contact us as soon as possible.
            </li>
          </ul>
          <h2 className="mb-4 text-2xl font-semibold">7. Delivery Issues:</h2>
          <ul className="ml-8 mb-4 list-disc">
            <li>
              If your order is lost or damaged during shipping, please contact
              us immediately so we can initiate an investigation with the
              carrier.
            </li>
            <li>
              We are not responsible for delivery delays caused by the carrier,
              but we will work with you to resolve any issues that arise.
            </li>
          </ul>
          <h2 className="mb-4 text-2xl font-semibold">
            8. Returns and Exchanges:
          </h2>
          <ul className="ml-8 mb-8 list-disc">
            <li>
              Please refer to our return and exchange policy for information on
              returning or exchanging products.
            </li>
          </ul>
          <p className="mb-8">
            Thank you for choosing Party in a Box for your party needs. If you
            have any questions or concerns regarding our shipping policy, please
            don't hesitate to contact us at{" "}
            <a href="mailto:support@partyinabox.com" className="underline">
              support@partyinabox.com
            </a>
            .
          </p>
        </div>
      </section>
    </div>
  )
}

export default PageWrapper(Shipping)
