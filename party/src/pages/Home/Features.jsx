import { FiAward, FiMove, FiRefreshCw, FiSettings } from "react-icons/fi"
import { Link } from "react-router-dom"

const featureData = [
  {
    title: "Patented Design",
    desc: "The Party in a Box is designed in many different ways to suit different occasions and themes. The boxes are patented so you do not find another type of party box like this.",
    icon: <FiAward />,
  },
  {
    title: "Portable",
    desc: "The contents of the box is small and lightweight, so Party in a Box is a great option for those who want to host a party outdoors, at a park, or in a different location than their home.",
    icon: <FiMove />,
  },
  {
    title: "Reusable",
    desc: "The items in the box are made of durable materials like plastic, metal, and cloth, so they can be cleaned and reused for future parties.",
    icon: <FiRefreshCw />,
  },
  {
    title: "Set Up & Clean Up",
    desc: "Setting and cleaning up has never been easier. With the press of a button, you can set and clean up the party in mere seconds. ",
    icon: <FiSettings />,
  },
]

const Features = () => {
  return (
    <section className="py-5 text-white lg:py-16">
      {/* Right blur circle */}
      <div className="absolute -left-40 z-0 h-[50vh] w-1/2 rounded-full bg-[#F97FC8] opacity-[0.85] blur-[130px]" />
      <div className="grid grid-cols-3 gap-8">
        <div className="col-span-2 grid grid-cols-1 grid-rows-2 gap-8 text-center lg:grid-cols-2">
          {featureData.map((feature, index) => (
            <div key={index} className={`glass rounded-[69px] p-8`}>
              <div className="mb-4 flex justify-center text-7xl">
                {feature.icon}
              </div>
              <h2 className="mb-4 text-2xl font-bold">{feature.title}</h2>
              <p className="text-sm lg:text-xl">{feature.desc}</p>
            </div>
          ))}
        </div>

        <div className="z-10 mt-8">
          <h1 className="text-4xl font-bold lg:text-6xl">
            What is{" "}
            <span className="bg-gradient-to-tr from-red-400 via-pink-500 to-violet-500 bg-clip-text text-transparent">
              Party in a Box
            </span>
            ?
          </h1>
          <p className="mt-8 text-sm md:text-xl lg:text-2xl">
            Party in a Box is the ultimate hassle-free party solution. With
            hundreds of customizable themes, this revolutionary box uses
            advanced nanotechnology and cutting-edge artificial intelligence to
            instantly set up and clean your party in seconds. Try Party in a Box
            today and enjoy the ultimate party experience.
          </p>
          <div className="flex">
            <Link
              to="/shop"
              className="glass mt-8 px-8 py-4 text-center text-xl font-medium uppercase duration-200 ease-in-out hover:scale-110 lg:text-2xl"
            >
              Shop now
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features

//TODO: tweak design, maybe flow chart thing
