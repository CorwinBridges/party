import { Link } from "react-router-dom"

import { motion } from "framer-motion"

import { gift3d } from "../../assets"
import { slideInAnimation } from "../../data"
import { useMediaQuery } from "../../utils"

const Hero = () => {
  const isLg = useMediaQuery("(min-width: 1024px)")
  return (
    <section className="py-6 lg:py-16">
      <motion.div
        initial="initial"
        whileInView="animate"
        viewport={{ once: false, amount: 0.1 }}
        className="relative z-10 grid gap-8 lg:grid-cols-2"
      >
        {/* Left column */}
        <div className="order-1 text-white lg:order-none">
          <motion.div
            variants={slideInAnimation("up", "spring", isLg ? 0 : 0.2)}
            className="mx-auto max-w-xl text-center text-4xl font-black uppercase sm:text-5xl lg:mx-0 lg:max-w-sm lg:text-left xl:max-w-none xl:text-7xl"
          >
            The{" "}
            <span className="bg-gradient-to-bl from-red-400 to-pink-500 bg-clip-text text-transparent">
              perfect party
            </span>{" "}
            all in one box
          </motion.div>
          <motion.div
            variants={slideInAnimation("up", "spring", isLg ? 0.2 : 0.4)}
            className="mx-auto mt-4 max-w-xl text-center text-2xl font-normal lg:max-w-none lg:text-start xl:text-3xl 2xl:text-4xl"
          >
            Transform any space into a party paradise with Party in a Box,
            Simply open the box and watch as it sets up an instant celebration
            in seconds!
          </motion.div>
          <motion.div
            variants={slideInAnimation("up", "spring", isLg ? 0.4 : 0.6)}
            className="flex justify-center lg:justify-start"
          >
            <Link
              to="/shop"
              className="glass mt-4 px-10 py-5 text-center text-xl uppercase duration-200 ease-in-out hover:scale-110 lg:mt-8 xl:text-4xl"
            >
              Shop our products
            </Link>
          </motion.div>
        </div>
        {/* Right column */}
        <motion.div
          variants={slideInAnimation("up", "spring", isLg ? 0.2 : 0)}
          className="z-10 mx-auto w-48 sm:w-52 lg:w-fit lg:max-w-md"
        >
          <img src={gift3d} alt="Gift" />
        </motion.div>
      </motion.div>

      {/* Left blur circle */}
      <div className="absolute top-0 left-0 z-0 h-[50vh] w-1/2 rounded-full bg-[#D3ACF1] opacity-[0.84] blur-[130px]" />
      {/* Right blur circle */}
      <div className="absolute top-0 right-0 z-0 h-[50vh] w-1/2 rounded-full bg-[#F97FC8] opacity-[0.94] blur-[130px]" />
    </section>
  )
}

export default Hero
