import {
  Hero,
  Testimonials,
  Benefits,
  Features,
  FAQ,
  CTA,
  Logos,
  Steps,
} from "../../pages"
import { PageWrapper } from "../../utils"

const Home = () => {
  return (
    <>
      <div className="section-container">
        <Hero />
      </div>
      <div className="section-container">
        <Testimonials />
      </div>
      <Logos />
      <div className="section-container">
        <Benefits />
      </div>
      <div className="section-container">
        <Features />
      </div>
      <div className="section-container">
        <Steps />
      </div>
      <div className="section-container">
        <FAQ />
      </div>
      <div className="section-container">
        <CTA />
      </div>
    </>
  )
}

export default PageWrapper(Home)
