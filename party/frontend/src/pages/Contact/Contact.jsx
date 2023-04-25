import { CInfo, CForm, Review } from "../../pages"
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
      <div className="section-container">
        <Review/>
      </div>
    </>
  )
}

export default PageWrapper(Contact)
