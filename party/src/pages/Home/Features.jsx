import { FiAward, FiMove, FiRefreshCw, FiSettings } from "react-icons/fi"
import { Link } from "react-router-dom"

const featureData = [
  {
    title: "Patented Design",
    desc: "The Party in a Box is designed in many different ways to suit different occasions and themes. The boxes are patented so you do not find another type of party box like this. With our affordable boxes with different, you wouldn't want to look anywhere else. ",
    icon: <FiAward />,
  },
  {
    title: "Portable",
    desc: "The contents of the box are selected to be lightweight, compact, and easy to carry, such as paper decorations, disposable tableware, and small party favors. Party in a Box is a great option for those who want to host a party outdoors, at a park, or in a different location than their home.",
    icon: <FiMove />,
  },
  {
    title: "Reusable",
    desc: "Party in a Box is reusable depending on the materials used for its contents. The items in the box are made of durable materials like plastic, metal, and cloth, so they can be cleaned and reused for future parties.",
    icon: <FiRefreshCw />,
  },
  {
    title: "Set Up & Clean Up",
    desc: "Setting up Party in a Box has never been easier. With the press of a button, you can set up the party in mere seconds. If you purchased our clean up box, it is also done in a press of a button. This level of technology not only makes this product easy, but also worth it.",
    icon: <FiSettings />,
  },
]

const Features = () => {
  return (
    <section className="py-5 text-white lg:py-16">
      <div className="grid grid-cols-2 gap-8">
        <div className="grid lg:grid-cols-2 grid-cols-1 grid-rows-2 gap-8 text-center">
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
        <div className="mt-8 z-10">
          <h1 className="lg:text-6xl text-4xl font-bold">
            What is{" "}
            <span className="bg-gradient-to-tr from-red-400 via-pink-500 to-violet-500 bg-clip-text text-transparent">
              Party in a Box
            </span>
            ?
          </h1>
          <p className="mt-8 lg:text-2xl text-xl">
            Party in a Box is the ultimate hassle-free party solution. With
            hundreds of customizable themes, this revolutionary box uses
            advanced nanotechnology and cutting-edge artificial intelligence to
            instantly set up and clean your party in seconds. Try Party in a Box
            today and enjoy the ultimate party experience.
          </p>
          <div className="flex">
            <Link
              to="/shop"
              className="glass mt-8 px-8 py-4 text-center lg:text-2xl text-xl font-medium uppercase duration-200 ease-in-out hover:scale-110"
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
