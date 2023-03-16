import { useEffect } from "react"

import { CInfo, CForm } from "../../pages"

const Contact = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
  }, [])
  useEffect(() => {
    document.title = "Contact | Party in a Box"
  }, [])
  return (
    <>
      <div className="section-container">
        <CInfo />
      </div>
      <div className="section-container">
        <CForm />
      </div>
    </>
  )
}

export default Contact
