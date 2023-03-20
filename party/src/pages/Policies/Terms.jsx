import { useEffect } from "react"

const Terms = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
    document.title = "Terms | Party in a Box"
  }, [])
  return (
    <div className="section-container">
      <section className="py-16 text-white">
        <div className="mx-auto max-w-5xl">
          <h1 className="mb-8 text-center text-5xl font-bold">
            Terms and Conditions
          </h1>

          <h2 className="mb-4 text-2xl font-bold">1. Introduction</h2>
          <p className="mb-4">
            Welcome to Party in a Box! These terms and conditions outline the
            rules and regulations for the use of our website and the products
            and services offered through it. By using our website, you accept
            these terms and conditions in full. If you disagree with these terms
            and conditions or any part of these terms and conditions, you must
            not use our website.
          </p>

          <h2 className="mb-4 text-2xl font-bold">
            2. Intellectual Property Rights
          </h2>
          <p className="mb-4">
            Unless otherwise stated, we or our licensors own the intellectual
            property rights in the website and material on the website. Subject
            to the license below, all these intellectual property rights are
            reserved.
          </p>

          <h2 className="mb-4 text-2xl font-bold">3. License to Use Website</h2>
          <p className="mb-4">
            You may view, download for caching purposes only, and print pages
            from the website for your own personal use, subject to the
            restrictions set out below and elsewhere in these terms and
            conditions.
          </p>

          <h2 className="mb-4 text-2xl font-bold">
            4. Limitation of Liability
          </h2>
          <p className="mb-4">
            We will not be liable to you in relation to the contents of, or use
            of, or otherwise in connection with, this website:
          </p>
          <ul className="ml-8 mb-4 list-disc">
            <li>for any indirect, special or consequential loss; or</li>
            <li>
              for any business losses, loss of revenue, income, profits or
              anticipated savings, loss of contracts or business relationships,
              loss of reputation or goodwill, or loss or corruption of
              information or data.
            </li>
          </ul>
          <p className="mb-4">
            These limitations of liability apply even if we have been expressly
            advised of the potential loss.
          </p>

          <h2 className="mb-4 text-2xl font-bold">5. Indemnification</h2>
          <p className="mb-4">
            You agree to indemnify and hold us and our affiliates, officers,
            directors, agents, and employees harmless from any claim or demand,
            including reasonable attorneys' fees, made by any third party due to
            or arising out of your breach of these terms and conditions, your
            violation of any law or the rights of a third party, or your use of
            our website or the products and services offered through it.
          </p>

          <h2 className="mb-4 text-2xl font-bold">6. Privacy Policy</h2>
          <p className="mb-4">
            We respect your privacy and are committed to protecting your
            personal information. Please see our Privacy Policy for more
            information on how we collect, use, and protect your personal
            information.
          </p>
          <h2 className="mb-4 text-2xl font-bold">7. Termination</h2>
          <p className="mb-4">
            We reserve the right to terminate your access to our website and the
            products and services offered through it at any time and without
            notice, if you breach these terms and conditions or for any other
            reason. Upon termination, you must immediately cease all use of our
            website and the products and services offered through it.
          </p>

          <h2 className="mb-4 text-2xl font-bold">
            8. Governing Law and Jurisdiction
          </h2>
          <p className="mb-4">
            These terms and conditions will be governed by and construed in
            accordance with the laws of the state of California, without regard
            to its conflict of law provisions. You irrevocably submit to the
            exclusive jurisdiction of the courts in that State or location for
            the purposes of resolving any disputes that may arise out of or
            relate to these terms and conditions or your use of our website or
            the products and services offered through it.
          </p>

          <h2 className="mb-4 text-2xl font-bold">
            9. Changes to these Terms and Conditions
          </h2>
          <p className="mb-4">
            We may revise these terms and conditions from time to time. The
            revised terms and conditions will apply to the use of our website
            from the date of their publication on our website. Please check this
            page regularly to ensure you are familiar with the current version.
          </p>

          <h2 className="mb-4 text-2xl font-bold">10. Contact Us</h2>
          <p>
            If you have any questions about these terms and conditions or our
            website, please contact us at{" "}
            <a href="mailto:support@partyinabox.com" className="underline">
              support@partyinabox.com
            </a>{" "}
          </p>
        </div>
      </section>
    </div>
  )
}

export default Terms
