import { useRef } from "react"

import { motion, useScroll, useTransform } from "framer-motion"

import { smitty, nobelpeace, medalofhonor } from "../../assets"

const awards = [
  {
    name: "Nobel Peace Prize",
    award:
      nobelpeace,
  },
  {
    name: "Medal of Honor",
    award:
      medalofhonor,
  },
  {
    name: "Smitty Werbenjagermanjensen",
    award: smitty,
  },
]

const Awards = () => {
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
        className="relative z-10"
        ref={ref}
        style={{ translateY: scrollValue, opacity: fadeValue }}
      >
        {/* title and awards */}
        <div className="mb-8 text-center">
          <span className="bg-gradient-to-tr from-red-400 via-pink-500 to-violet-500 bg-clip-text text-3xl font-bold text-transparent md:text-4xl lg:text-5xl">
            AWARD WINNING TEAM
          </span>
        </div>
        <div className="glass flex justify-center rounded-[30px]">
          {/* award images */}
          <div className="grid grid-cols-3 gap-8 p-8">
            {awards.map((award, index) => {
              return (
                <div className="m-auto" key={index}>
                  <img src={award.award} alt={award.name} />
                </div>
              )
            })}
          </div>
        </div>
      </motion.div>
      {/* blur */}
      <div className="absolute -right-40 z-0 h-[50vh] w-1/2 rounded-full bg-[#FEE17A] opacity-[0.94] blur-[130px]" />
    </section>
  )
}

export default Awards
