import { FiAward, FiMove, FiRefreshCw, FiSettings } from "react-icons/fi"
import { Link } from "react-router-dom"

const featureData = [
  {
    title: "Patented Design",
    desc: "Description for feature 1",
    icon: <FiAward />,
  },
  {
    title: "Portable",
    desc: "Description for feature 2",
    icon: <FiMove />,
  },
  {
    title: "Reusable",
    desc: "Description for feature 3",
    icon: <FiRefreshCw />,
  },
  {
    title: "Set Up & Clean Up",
    desc: "Description for feature 4",
    icon: <FiSettings />,
  },
]

const Features = () => {
  return (
    <section className="py-5 text-white lg:py-16">
      <div className="grid grid-cols-2 gap-8">
        <div className="grid grid-cols-2 grid-rows-2 gap-6 text-center">
          {featureData.map((feature, index) => (
            <div key={index} className={`glass rounded-[69px] p-8`}>
              <div className="mb-5 flex justify-center text-9xl">
                {feature.icon}
              </div>
              <h2 className="mb-5 text-2xl font-semibold lg:text-3xl">
                {feature.title}
              </h2>
              <p className="text-sm lg:text-lg">{feature.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-8">
          <h1 className="text-6xl font-bold">
            What is{" "}
            <span className="bg-gradient-to-tr from-red-400 via-pink-500 to-violet-500 bg-clip-text text-transparent">
              Party in a Box
            </span>
            ?
          </h1>
          <p className="mt-8 text-2xl">
            Party in a Box is the ultimate hassle-free party solution. With
            hundreds of customizable themes, this revolutionary box uses
            advanced nanotechnology and cutting-edge artificial intelligence to
            instantly set up and clean your party in seconds. Try Party in a Box
            today and enjoy the ultimate party experience.
          </p>
          <Link to="Shop">
            <button
              type="button"
              className="glass mt-8 mr-2 mb-2 px-8 py-4 text-center text-2xl font-medium duration-200 ease-in-out hover:scale-110"
            >
              SHOP NOW
            </button>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Features

//TODO: tweak design, maybe flow chart thing
