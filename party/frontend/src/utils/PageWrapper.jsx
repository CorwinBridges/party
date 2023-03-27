import { useEffect } from "react"

const PageWrapper = (WrappedComponent) => {
  return (props) => {
    useEffect(() => {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
      document.title = `${WrappedComponent.name} | Party in a Box`
    }, [])

    return <WrappedComponent {...props} />
  }
}

export default PageWrapper
