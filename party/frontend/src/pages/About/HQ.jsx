import { useRef } from "react"

import { motion, useScroll, useTransform } from "framer-motion"

import { partyhq, blob } from "../../assets"

const HQ = () => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.75", "start 0.25"],
  })

  const scrollValue = useTransform(scrollYProgress, [0, 1], ["100%", "0%"])
  const fadeValue = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])
  return (
    <section className="py-6 lg:py-16">
      <motion.div
        ref={ref}
        style={{ translateY: scrollValue, opacity: fadeValue }}
        className="relative z-10"
      >
        {/* head quarters image */}
        <div className="relative top-10 z-20 mx-auto w-[90%] sm:w-[80%] xl:w-full xl:max-w-3xl">
          <img
            src={partyhq}
            alt="Party HQ"
            className="relative rounded-[50px]"
          />
        </div>
        {/* head quarters description */}
        <div className="glass relative rounded-[50px] p-8 text-white md:px-40 lg:px-20">
          <div className="my-4 text-center">
            <span className="bg-gradient-to-tr from-red-400 via-pink-500 to-violet-500 bg-clip-text text-3xl font-bold text-transparent md:text-4xl lg:text-5xl">
              OUR HQ
            </span>
          </div>

          <div className="text-md mb-8 text-center md:text-xl lg:px-10 lg:text-2xl">
            At Party in a Box HQ, our team works tirelessly to ensure that every
            box is packed with the latest and greatest party essentials, from
            decorations to snacks and everything in between, to make sure every
            customer's celebration is a success.
          </div>
        </div>
      </motion.div>
      {/* Left-side blob image */}
      <div className="absolute -right-[2%] z-0 h-[300px] w-[300px] lg:h-[300px] lg:w-[300px]">
        <img src={blob} alt="swirl" className="relative top-40 blur" />
      </div>
    </section>
  )
}

export default HQ
