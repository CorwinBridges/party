import { useRef } from "react"

import { motion, useScroll, useTransform } from "framer-motion"

const Start = () => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.75", "start 0.25"],
  })

  const scrollValue = useTransform(scrollYProgress, [0, 1], ["100%", "0%"])
  const fadeValue = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])

  return (
    <section className="py-6 lg:py-16">
      {/* title and description */}
      <motion.div
        ref={ref}
        style={{ translateY: scrollValue, opacity: fadeValue }}
        className="glass relative z-10 rounded-[50px] p-8 text-white"
      >
        <div className="mb-4 text-left">
          <span className="bg-gradient-to-tr from-red-400 via-pink-500 to-violet-500 bg-clip-text text-3xl font-bold text-transparent md:text-4xl lg:text-5xl">
            HOW WE STARTED
          </span>
        </div>
        <div className="text-md mb-8 md:text-xl lg:px-10 lg:text-2xl">
          Party in a Box was started by a group of wild and crazy party
          enthusiasts who were tired of the hassle of planning and setting up
          parties. One day, while they were throwing a rager in a forest, they
          stumbled upon a magical box that, when opened, instantly set up a
          party complete with decorations, music and snacks. They knew they had
          to share this magic with the world and thus, Party in a Box was born.
          They spent months trying to track down the exact location of the box
          and finally succeeded, they then spent the next few years perfecting
          the box and making it the best it could be, adding the best features
          and accessories, testing and adjusting, until they created the
          greatest party box ever.
        </div>
      </motion.div>
      {/* circle */}
      <div className="absolute -right-20">
        <div className="relative -top-80 z-0 h-[400px] w-[400px] animate-[bounce_15s_linear_infinite] rounded-[50%] bg-gradient-to-b from-[#E8C483]/[0.54] to-[#E25D67]/[0.68] opacity-[0.75] blur-[3px]" />
      </div>
      <div className="absolute right-40">
        <div className="relative -top-20 z-0 h-[250px] w-[250px] animate-[bounce_15s_linear_infinite] rounded-[50%] bg-gradient-to-b from-[#E8C483]/[0.54] to-[#E25D67]/[0.68] opacity-[0.75] blur-[3px]" />
      </div>
    </section>
  )
}

export default Start
