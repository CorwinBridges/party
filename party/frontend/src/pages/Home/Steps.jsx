import { FaGift, FaPowerOff, FaRecycle } from "react-icons/fa"
import { IoBalloonSharp } from "react-icons/io5"
import { MdQuiz } from "react-icons/md"

import { motion } from "framer-motion"

import { swirl } from "../../assets"
import { slideInAnimation, fadeInAnimation, heightAnimation } from "../../data"
import { useMediaQuery } from "../../utils"

const timelineData = [
  {
    title: "1. Take the Quiz",
    description:
      "Take a quick quiz on our website to create a customized party box that perfectly fits your needs. You can select the party's size, theme, music, and accessories like balloons and utensils.",
    icon: <MdQuiz />,
  },
  {
    title: "2. Choose Your Box",
    description:
      "Select the party box that suits your needs based on the quiz results. We offer different party boxes of various sizes, themes, and accessories.",
    icon: <FaGift />,
  },
  {
    title: "3. Unbox and Set Up",
    description:
      "After receiving your party box, unbox it and set up your party in seconds. All the decorations and accessories are included in the box, so you don't need to buy anything else.",
    icon: <FaPowerOff />,
  },
  {
    title: "4. Party Time!",
    description:
      "Enjoy your party with your guests, knowing that you didn't have to spend a lot of time and money preparing for it. Our party boxes make party planning easy and affordable.",
    icon: <IoBalloonSharp />,
  },
  {
    title: "5. Clean Up in Seconds",
    description:
      "Once the party is over, cleaning up is a breeze. Simply throw away any disposable items and place the reusable items back in the box. The box can be easily stored until your next party.",
    icon: <FaRecycle />,
  },
]

const Steps = () => {
  const isLg = useMediaQuery("(min-width: 1024px)")
  return (
    <section className="py-16 text-white ">
      {/* Right-side background circle with gradient */}
      <div className="absolute -right-[6%]">
        <div className="relative bottom-[600px] z-0 aspect-square h-[300px] rounded-[50%] bg-gradient-to-b from-[#C194EA] to-[#EE77C7]/[0.94] opacity-[0.60] blur-[3px] lg:h-[500px]" />
      </div>

      <motion.div
        initial="initial"
        whileInView="animate"
        viewport={{ once: false, amount: 0.1 }}
      >
        <motion.h1
          variants={slideInAnimation("up", "spring", 0)}
          className="z-10 mb-5 text-center text-4xl font-bold lg:mb-16 lg:text-7xl"
        >
          Getting Started
        </motion.h1>
        <div className="z-10 mx-auto flex grid-cols-9 flex-col lg:grid">
          {timelineData.map((timeline, index) => {
            let firstAndLast = ""
            if (index === 0) {
              firstAndLast = "gradient-top"
            } else if (index === timelineData.length - 1) {
              firstAndLast = "gradient-bottom"
            }
            return index % 2 === 0 ? (
              // left row
              <div className="flex flex-row-reverse lg:contents" key={index}>
                <motion.div
                  variants={slideInAnimation(
                    "left",
                    "spring",
                    0.4 + index * 0.4
                  )}
                  className="glass z-10 col-start-1 col-end-5 my-4 rounded-[69px] p-8"
                >
                  <h3 className="mb-4 text-4xl font-medium lg:text-right lg:text-5xl">
                    <div className="bg-gradient-to-r from-red-400 via-pink-500 to-violet-500 bg-clip-text text-transparent">
                      {timeline.title}
                    </div>
                  </h3>
                  <p className="text-md lg:text-right lg:text-lg">
                    {timeline.description}
                  </p>
                </motion.div>
                <motion.div
                  variants={heightAnimation(0.4 + index * 0.4)}
                  className="relative z-10 col-start-5 col-end-6 mr-10 lg:mx-auto"
                >
                  {/* Line */}
                  <motion.div
                    variants={fadeInAnimation(0.4 + index * 0.4)}
                    className="z-10 flex h-full w-6 items-center justify-center"
                  >
                    <div
                      className={`glass pointer-events-none z-10 h-full w-1 rounded-none ${firstAndLast}`}
                    />
                  </motion.div>
                  {/* Dot */}
                  <motion.div
                    variants={fadeInAnimation(0.4 + index * 0.4)}
                    className="glass absolute top-1/2 z-10 -mt-3 h-6 w-6"
                  />
                </motion.div>
                <motion.div
                  variants={slideInAnimation(
                    "right",
                    "spring",
                    isLg ? 0.4 + index * 0.4 : null
                  )}
                  className="col-span-1 col-start-6 hidden items-center justify-center text-7xl lg:flex"
                >
                  {timeline.icon}
                </motion.div>
              </div>
            ) : (
              // right row
              <div className="flex lg:contents" key={index}>
                <motion.div
                  variants={slideInAnimation(
                    "left",
                    "spring",
                    isLg ? 0.4 + index * 0.4 : null
                  )}
                  className="z-10 col-span-1 col-start-4 hidden items-center justify-center text-7xl lg:flex"
                >
                  {timeline.icon}
                </motion.div>
                <motion.div
                  variants={heightAnimation(0.4 + index * 0.4)}
                  className="relative z-10 col-start-5 col-end-6 mr-10 lg:mx-auto"
                >
                  {/* Line */}
                  <motion.div
                    variants={fadeInAnimation(0.4 + index * 0.4)}
                    className="z-10 flex h-full w-6 items-center justify-center"
                  >
                    <div
                      className={`glass pointer-events-none z-10 h-full w-1 rounded-none ${firstAndLast}`}
                    />
                  </motion.div>
                  {/* Dot */}
                  <motion.div
                    variants={fadeInAnimation(0.4 + index * 0.4)}
                    className="glass absolute top-1/2 z-10 -mt-3 h-6 w-6"
                  />
                </motion.div>
                <motion.div
                  variants={slideInAnimation(
                    isLg ? "right" : "left",
                    "spring",
                    0.4 + index * 0.4
                  )}
                  className="glass z-10 col-start-6 col-end-10 my-4 rounded-[69px] p-8"
                >
                  <h3 className="mb-4 text-4xl font-medium lg:text-left lg:text-5xl">
                    <div className="z-10 bg-gradient-to-r from-red-400 via-pink-500 to-violet-500 bg-clip-text text-transparent">
                      {timeline.title}
                    </div>
                  </h3>
                  <p className="text-md z-10 lg:text-left lg:text-lg">
                    {timeline.description}
                  </p>
                </motion.div>
              </div>
            )
          })}
        </div>
      </motion.div>
      {/* right-side swirl image */}
      <div className="absolute -left-[10%] z-0 h-[400px] w-[400px] rotate-180 lg:h-[700px] lg:w-[700px]">
        <img
          src={swirl}
          alt="swirl"
          className="relative -bottom-[1000px] blur"
        />
      </div>
    </section>
  )
}

export default Steps
