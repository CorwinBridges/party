import { FiAward, FiMove, FiRefreshCw, FiSettings } from "react-icons/fi"
import { Link } from "react-router-dom"

import { motion } from "framer-motion"

import { slideInAnimation } from "../../data"
import { useMediaQuery } from "../../utils"

const featureData = [
  {
    title: "Patented Design",
    desc: "The Party in a Box is designed in many different ways to suit different occasions and themes.",
    icon: <FiAward />,
  },
  {
    title: "Portable",
    desc: "The contents of the box is small and lightweight.",
    icon: <FiMove />,
  },
  {
    title: "Reusable",
    desc: "The items in the box are made of durable materials like metal.",
    icon: <FiRefreshCw />,
  },
  {
    title: "Set Up & Clean Up",
    desc: "Setting and cleaning up has never been easier. You can set and clean up the party in seconds. ",
    icon: <FiSettings />,
  },
]

const Features = () => {
  const isXl = useMediaQuery("(min-width: 1280px)")
  return (
    <section className="py-16 text-white">
      {/* Right blur circle */}
      <div className="absolute -left-40 z-0 h-[50vh] w-1/2 rounded-full bg-[#F97FC8] opacity-[0.85] blur-[130px]" />
      <motion.div
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.1 }}
        className="relative z-10 grid grid-cols-1 gap-8 xl:grid-cols-7"
      >
        <div className="grid grid-cols-1 grid-rows-2 gap-4 text-center sm:grid-cols-2 lg:gap-8 xl:col-span-4">
          {featureData.map((feature, index) => (
            <motion.div
              variants={slideInAnimation(
                "up",
                "spring",
                isXl ? 0 + index * 0.2 : 0.6 + index * 0.2
              )}
              key={index}
              className={`glass rounded-[69px] p-8`}
            >
              <div className="mb-4 flex justify-center text-7xl">
                {feature.icon}
              </div>
              <h2 className="mb-4 text-2xl font-bold">{feature.title}</h2>
              <p className="text-md lg:text-lg">{feature.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="order-first mt-8 xl:order-last xl:col-span-3">
          <motion.h1
            variants={slideInAnimation("up", "spring", isXl ? 0.8 : 0)}
            className="text-center text-4xl font-bold lg:text-6xl xl:text-left"
          >
            What is{" "}
            <span className="bg-gradient-to-tr from-red-400 via-pink-500 to-violet-500 bg-clip-text text-transparent">
              Party in a Box
            </span>
            ?
          </motion.h1>
          <motion.p
            variants={slideInAnimation("up", "spring", isXl ? 1 : 0.2)}
            className="mx-auto mt-8 max-w-4xl text-center text-lg md:text-xl lg:text-2xl xl:mx-0 xl:max-w-none xl:text-left"
          >
            Party in a Box is the ultimate hassle-free party solution. With
            hundreds of customizable themes, this revolutionary box uses
            advanced nanotechnology and cutting-edge artificial intelligence to
            instantly set up and clean your party in seconds. Try Party in a Box
            today and enjoy the ultimate party experience.
          </motion.p>
          <motion.div
            variants={slideInAnimation("up", "spring", isXl ? 1.2 : 0.4)}
            className="flex justify-center xl:justify-start"
          >
            <Link
              to="/shop"
              className="glass mt-8 px-8 py-4 text-center text-xl font-medium uppercase duration-200 ease-in-out hover:scale-110 lg:text-2xl"
            >
              Shop now
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

export default Features

//TODO: tweak design, maybe flow chart thing
