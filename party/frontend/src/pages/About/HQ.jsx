import { useRef } from "react"

import { Canvas } from "@react-three/fiber"
import { motion, useScroll, useTransform } from "framer-motion"

import { partyhq } from "../../assets"
import Blob from "../../components/Blob"

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
        <div className="relative top-10 z-20 mx-auto xl:max-w-3xl xl:w-full w-[90%] sm:w-[80%]">
          <img
            src={partyhq}
            alt="Party HQ"
            className="relative rounded-[50px]"
          />
        </div>
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
      <div className="absolute right-10 z-0 h-[500px] w-[500px] opacity-[0.50]">
        <Canvas camera={{ position: [0.0, 0.0, 8.0] }}>
          <Blob />
        </Canvas>
      </div>
    </section>
  )
}

export default HQ
