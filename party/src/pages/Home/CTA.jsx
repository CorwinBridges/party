import { Link } from "react-router-dom"

const CTA = () => {
  return (
    <section className="py-20 text-center text-white lg:py-40">
      <h1 className="font-bold text-4xl md:text-5xl xl:text-6xl">
        LET'S GET THIS PARTY STARTIED!
      </h1>
      <p className="mt-5 text-xl sm:text-2xl md:text-3xl font-light">
        Make your next party unforgettable with Party in a Box. Everything you
        need for a successful celebration, all in one convenient package!
      </p>
      <Link to="Shop">
        <button
          type="button"
          className="glass mt-10 mr-2 mb-2 px-10 py-5 text-center text-xl duration-200 ease-in-out hover:scale-110 lg:text-3xl xl:text-4xl"
        >
          SHOP NOW
        </button>
      </Link>
    </section>
  )
}

export default CTA

//TODO: styling and responsivenss
