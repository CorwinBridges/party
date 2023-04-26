import { Story, Start, Mission, HQ, Process, Awards, Team } from "../../pages"
import { PageWrapper } from "../../utils"

const About = () => {
  return (
    <>
      <div className="section-container">
        <Story />
      </div>
      <div className="section-container">
        <Start />
      </div>
      <div className="section-container">
        <Mission />
      </div>
      <div className="section-container">
        <HQ />
      </div>
      <div className="section-container">
        <Process />
      </div>
      <div className="section-container">
        <Awards />
      </div>
      <div className="section-container overflow-hidden">
        <Team />
      </div>
    </>
  )
}

export default PageWrapper(About, "About")
