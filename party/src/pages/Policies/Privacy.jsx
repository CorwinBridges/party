import { useEffect } from "react"

const Privacy = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
    document.title = "Privacy | Party in a Box"
  }, [])
  return (
    <div className="section-container">
      <section className="py-16 text-white">
        <div className="mx-auto max-w-5xl">
          <h1 className="mb-8 text-center text-5xl font-bold">
            Privacy Policy
          </h1>
          <h2 className="mb-4 text-2xl font-semibold">
            Information Collection and Use:
          </h2>
          <ul className="ml-8 mb-4">
            <li className="mb-4">
              We collect information from our users when they place an order on
              our website. When placing an order, we may collect personal
              information such as name, email address, shipping address, and
              payment information. We use this information to process and
              fulfill your order, to communicate with you about your order, and
              to improve our services.
            </li>

            <li className="mb-4">
              We may also collect information about your use of our website,
              such as your IP address, browser type, and pages viewed. This
              information is collected to improve our website and to provide a
              better user experience.
            </li>
          </ul>

          <h2 className="mb-4 text-2xl font-semibold">Information Sharing:</h2>
          <ul className="ml-8 mb-4">
            <li className="mb-4">
              We may share your personal information with third-party service
              providers who assist us in processing orders and payments,
              shipping products, and providing customer support. These service
              providers are bound by confidentiality agreements and are
              prohibited from using your personal information for any other
              purpose.
            </li>

            <li className="mb-4">
              We may also share your personal information when required by law
              or to protect our rights and interests.
            </li>
          </ul>

          <h2 className="mb-4 text-2xl font-semibold">Information Security:</h2>
          <ul className="ml-8 mb-4">
            <li className="mb-4">
              We take reasonable measures to protect your personal information
              from unauthorized access, disclosure, alteration, or destruction.
              However, no method of transmission over the internet or electronic
              storage is 100% secure, and we cannot guarantee absolute security.
            </li>
          </ul>

          <h2 className="mb-4 text-2xl font-semibold">Cookies:</h2>
          <ul className="ml-8 mb-4">
            <li className="mb-4">
              We may use cookies to improve your browsing experience on our
              website. Cookies are small text files that are stored on your
              computer or mobile device when you visit our website. They help us
              remember your preferences and track your use of our website. You
              can choose to accept or decline cookies through your browser
              settings.
            </li>
          </ul>

          <h2 className="mb-4 text-2xl font-semibold">
            Links to Other Websites:
          </h2>
          <ul className="ml-8 mb-4">
            <li className="mb-4">
              Our website may contain links to other websites. Please note that
              we are not responsible for the privacy practices of these other
              websites. We encourage you to read their privacy policies before
              providing any personal information.
            </li>
          </ul>

          <h2 className="mb-4 text-2xl font-semibold">Children's Privacy: </h2>
          <ul className="ml-8 mb-4">
            <li className="mb-4">
              Our website is not intended for use by children under the age of
              13. We do not knowingly collect personal information from children
              under 13 years of age. If we become aware that we have collected
              personal information from a child under 13, we will take steps to
              delete the information as soon as possible.
            </li>
          </ul>
          <h2 className="mb-4 text-2xl font-semibold">
            Changes to This Privacy Policy:
          </h2>
          <ul className="ml-8 mb-4">
            <li className="mb-4">
              We reserve the right to modify this Privacy Policy at any time.
              Any changes will be effective immediately upon posting on our
              website. We encourage you to check this page periodically for
              updates.
            </li>
          </ul>
          <h2 className="mb-4 text-2xl font-semibold">Contact Us:</h2>
          <ul className="ml-8 mb-4">
            <li className="mb-4">
              If you have any questions or concerns about our Privacy Policy,
              please contact us at{" "}
              <a href="mailto:support@partyinabox.com" className="underline">
                support@partyinabox.com
              </a>
              .
            </li>
          </ul>
        </div>
      </section>
    </div>
  )
}

export default Privacy
