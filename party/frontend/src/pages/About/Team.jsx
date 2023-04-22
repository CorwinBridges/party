import { useRef } from "react"

import { motion, useScroll, useTransform } from "framer-motion"

import { madison2, anna2, corwin2, blob } from "../../assets"

const timelineData = [
  {
    title: "MADISON GRIFFIN",
    description:
      "Madison is a highly motivated and organized individual who is the backbone of our team. She is able to efficiently coordinate tasks and delegate responsibilities among team members, ensuring that all projects are completed on time and to the highest standard.",
    picture: madison2,
  },
  {
    title: "CORWIN BRIDGES",
    description:
      "Corwin is the brains behind the operation. He has an incredible intellect and a deep understanding of the inner workings of the company. Corwin is a genius when it comes to problem-solving and strategy development, he always comes up with new and innovative solutions to any challenge that arises.",
    picture: corwin2,
  },
  {
    title: "ANNA WEISSENFLUH",
    description:
      "Anna is the designer of the team. She is incredibly creative and has a great sense of style. Not only is she a talented designer, but she's also a goofball who always lightens the mood with her jokes, even if they're not always funny. She's a great listener and always open to feedback, which makes her a valuable asset to the team. ",
    picture: anna2,
  },
]
const Team = () => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.75", "start 0.25"],
  })

  const scrollValue = useTransform(scrollYProgress, [0, 1], ["100%", "0%"])
  const fadeValue = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])
  return (
    <section className="py-6 text-white lg:py-16">
      <motion.div
        className="relative z-10"
        ref={ref}
        style={{ translateY: scrollValue, opacity: fadeValue }}
      >
        <h1 className="mb-16 text-left text-3xl font-bold md:text-4xl lg:text-5xl">
          <span className="bg-gradient-to-tr from-red-400 via-pink-500 to-violet-500 bg-clip-text text-3xl font-bold text-transparent md:text-4xl lg:text-5xl">
            MEET THE TEAM
          </span>
        </h1>
        <div className="mx-auto flex grid-cols-9 flex-col lg:grid">
          {timelineData.map((timeline, index) => {
            let firstAndLast = ""
            if (index === 0) {
              firstAndLast = "gradient-top"
            } else if (index === timelineData.length - 1) {
              firstAndLast = "gradient-bottom"
            }
            return index % 2 === 0 ? (
              // right
              <div className="flex lg:contents" key={index}>
                <div className="col-start-1 col-end-5 m-8 hidden items-center justify-center rounded-[69px] bg-purple-500 p-8 lg:flex">
                  <img src={timeline.picture} alt={timeline.title} />
                </div>
                <div className="relative col-start-5 col-end-6 mr-10 lg:mx-auto">
                  {/* Line */}
                  <div className="flex h-full w-6 items-center justify-center">
                    <div
                      className={`glass pointer-events-none h-full w-1 rounded-none ${firstAndLast}`}
                    />
                  </div>
                  {/* Dot */}
                  <div className="glass absolute top-1/2 -mt-3 h-6 w-6" />
                </div>
                <div className="glass col-start-6 col-end-10 m-4 rounded-[69px] p-8 shadow-xl">
                  <h3 className="mb-4 text-left text-2xl font-medium md:text-3xl lg:text-left lg:text-3xl 2xl:text-4xl">
                    <div className="bg-gradient-to-r from-violet-500 via-red-400 to-pink-500 bg-clip-text text-transparent">
                      {timeline.title}
                    </div>
                  </h3>
                  <p className="text-lg lg:text-left 2xl:text-2xl">
                    {timeline.description}
                  </p>
                </div>
              </div>
            ) : (
              // left
              <div className="flex flex-row-reverse lg:contents" key={index}>
                <div className="glass col-start-1 col-end-5 my-4 rounded-[69px] p-8 shadow-xl">
                  <h3 className="mb-4 text-left text-2xl font-medium md:text-3xl lg:text-right lg:text-3xl 2xl:text-4xl">
                    <div className="bg-gradient-to-r from-violet-500 via-red-400 to-pink-500  bg-clip-text text-transparent">
                      {timeline.title}
                    </div>
                  </h3>
                  <p className="text-lg lg:text-right 2xl:text-2xl">
                    {timeline.description}
                  </p>
                </div>
                <div className="relative col-start-5 col-end-6 mr-10 lg:mx-auto ">
                  {/* Line */}
                  <div className="flex h-full w-6 items-center justify-center">
                    <div
                      className={`glass pointer-events-none h-full w-1 rounded-none ${firstAndLast}`}
                    />
                  </div>
                  {/* Dot */}
                  <div className="glass absolute top-1/2 -mt-3 h-6 w-6" />
                </div>
                <div className="col-start-6 col-end-10 m-8 hidden items-center justify-center rounded-[69px] bg-purple-500 p-8 lg:flex">
                  <img src={timeline.picture} alt={timeline.title} />
                </div>
              </div>
            )
          })}
        </div>
      </motion.div>
      {/* Left-side blob image */}
      <div className="absolute -left-[10%] z-0 h-[300px] w-[300px] lg:h-[300px] lg:w-[300px]">
        <img src={blob} alt="blob" className="relative bottom-80 blur" />
      </div>
    </section>
  )
}

export default Team
