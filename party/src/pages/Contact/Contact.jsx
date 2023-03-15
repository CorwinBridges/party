import { useEffect } from "react"

import { ContactInfo, CForm } from "../../pages"

const Contact = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
  }, [])
  return (
    <>
      <div className="section-container">
        <ContactInfo />
      </div>
      <div className="section-container">
        <CForm />
      </div>
    </>
  )
}

export default Contact
