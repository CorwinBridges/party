import { useEffect } from "react"
import { animateScroll } from "react-scroll"

const PageWrapper = (WrappedComponent, pageTitle) => {
  return (props) => {
    useEffect(() => {
      animateScroll.scrollToTop({
        duration: 500,
        smooth: true,
      })
      document.title = `${pageTitle} | Party in a Box`
    }, [])

    return <WrappedComponent {...props} />
  }
}

export default PageWrapper
