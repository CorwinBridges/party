import { CInfo, CForm } from "../../pages"
import { PageWrapper } from "../../utils"

const Contact = () => {
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

export default PageWrapper(Contact)
