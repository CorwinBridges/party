import { useEffect } from "react"
import { animateScroll } from "react-scroll"

const PageWrapper = (WrappedComponent) => {
  return (props) => {
    useEffect(() => {
      animateScroll.scrollToTop({
        duration: 500,
        smooth: true,
      })
      document.title = `${WrappedComponent.name} | Party in a Box`
    }, [])

    return <WrappedComponent {...props} />
  }
}

export default PageWrapper
