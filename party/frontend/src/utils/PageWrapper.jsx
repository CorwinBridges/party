import { useLayoutEffect } from "react"

const PageWrapper = (WrappedComponent, pageTitle) => {
  return (props) => {
    useLayoutEffect(() => {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
      document.title = `${pageTitle} | Party in a Box`
    }, [])

    return <WrappedComponent {...props} />
  }
}

export default PageWrapper
