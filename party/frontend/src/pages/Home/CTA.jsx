import { Link } from "react-router-dom"

import { motion } from "framer-motion"

import { slideInAnimation } from "../../data"

const CTA = () => {
  return (
    <section className="relative z-10 py-16 text-center text-white lg:py-40">
      <motion.div
        initial="initial"
        whileInView="animate"
        viewport={{ once: false, amount: 0.1 }}
      >
        <motion.h1
          variants={slideInAnimation("up", "spring", 0)}
          className=" text-4xl font-bold uppercase lg:text-5xl"
        >
          Let's get this party{" "}
          <span className="bg-gradient-to-tr from-red-400 via-pink-500 to-violet-500 bg-clip-text text-transparent">
            startied
          </span>
          !
        </motion.h1>
        <motion.p
          variants={slideInAnimation("up", "spring", 0.2)}
          className="mx-auto mt-8 max-w-5xl text-xl font-light lg:text-2xl"
        >
          Make your next party unforgettable with Party in a Box. Everything you
          need for a successful celebration, all in one convenient package!
        </motion.p>
        <motion.div
          variants={slideInAnimation("up", "spring", 0.4)}
          className="flex justify-center"
        >
          <Link
            to="/shop"
            className="glass mt-8 px-10 py-5 text-center text-xl font-medium duration-200 ease-in-out hover:scale-110 lg:text-3xl xl:text-4xl"
          >
            SHOP NOW
          </Link>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default CTA

