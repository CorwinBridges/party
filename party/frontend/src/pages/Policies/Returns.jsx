import { PageWrapper } from "../../utils"

const Returns = () => {
  return (
    <div className="section-container">
      <section className="py-16 text-white">
        <div className="mx-auto max-w-5xl">
          <h1 className="mb-8 text-center text-5xl font-bold">Return Policy</h1>
          <ol className="mb-8 list-inside list-decimal text-2xl">
            <li>Items must be returned within 30 days of the delivery date.</li>
            <li>
              All items must be in their original packaging, unused and in the
              same condition as when they were received.
            </li>
            <li>Refunds will be issued to the original payment method.</li>
            <li>Shipping fees are non-refundable.</li>
            <li>
              Returns for personalized or custom-made items will not be accepted
              unless there was an error on our end.
            </li>
            <li>
              We reserve the right to deny any return that does not meet our
              return policy requirements.
            </li>
          </ol>
          <p className="mb-8">
            To initiate a return, please contact our customer service team at{" "}
            <a href="mailto:support@partyinabox.com" className="underline">
              support@partyinabox.com
            </a>{" "}
            with your order number and reason for the return. We will provide
            you with instructions on how to return your item.
          </p>
        </div>
      </section>
    </div>
  )
}

export default PageWrapper(Returns, "Returns")
