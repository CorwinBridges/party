import { Link } from "react-router-dom"

const CTA = () => {
  return (
    <section className="py-20 text-center text-white lg:py-40">
      <h1 className="text-5xl font-bold uppercase sm:text-6xl">
        Let's get this party{" "}
        <span className="bg-gradient-to-tr from-red-400 via-pink-500 to-violet-500 bg-clip-text text-transparent">
          startied
        </span>
        !
      </h1>
      <p className="mx-auto mt-5 text-xl font-light sm:text-3xl max-w-5xl">
        Make your next party unforgettable with Party in a Box. Everything you
        need for a successful celebration, all in one convenient package!
      </p>
      <Link to="Shop">
        <button
          type="button"
          className="glass mt-10 px-10 py-5 text-center text-xl duration-200 ease-in-out hover:scale-110 lg:text-3xl xl:text-4xl"
        >
          SHOP NOW
        </button>
      </Link>
    </section>
  )
}

export default CTA

//TODO: styling and responsivenss
