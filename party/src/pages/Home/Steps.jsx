import {
  FaQuestion,
  FaBoxOpen,
  FaPlayCircle,
  FaRegSmileBeam,
  FaTrashAlt,
} from "react-icons/fa"

const timelineData = [
  {
    title: "1. Take the Quiz",
    description:
      "Take a quick quiz on our website to create a customized party box that perfectly fits your needs. You can select the party's size, theme, music, and accessories like balloons and utensils.",
    icon: <FaQuestion />,
  },
  {
    title: "2. Choose Your Box",
    description:
      "Select the party box that suits your needs based on the quiz results. We offer different party boxes of various sizes, themes, and accessories.",
    icon: <FaBoxOpen />,
  },
  {
    title: "3. Unbox and Set Up",
    description:
      "After receiving your party box, unbox it and set up your party in seconds. All the decorations and accessories are included in the box, so you don't need to buy anything else.",
    icon: <FaPlayCircle />,
  },
  {
    title: "4. Party Time!",
    description:
      "Enjoy your party with your guests, knowing that you didn't have to spend a lot of time and money preparing for it. Our party boxes make party planning easy and affordable.",
    icon: <FaRegSmileBeam />,
  },
  {
    title: "5. Clean Up in Seconds",
    description:
      "Once the party is over, cleaning up is a breeze. Simply throw away any disposable items and place the reusable items back in the box. The box can be easily stored until your next party.",
    icon: <FaTrashAlt />,
  },
]

const Steps = () => {
  return (
    <section className="py-5 text-white lg:py-16">
      <h1 className="mb-16 text-center text-7xl font-bold">Getting Started</h1>
      <div className="mx-auto flex grid-cols-9 flex-col lg:grid">
        {timelineData.map((timeline, index) => {
          let lineClass = ""
          if (index === 0) {
            lineClass = "gradient-top"
          } else if (index === timelineData.length - 1) {
            lineClass = "gradient-bottom"
          }
          return index % 2 === 0 ? (
            // left
            <div className="flex flex-row-reverse lg:contents" key={index}>
              <div className="glass col-start-1 col-end-5 my-4 rounded-[69px] p-8">
                <h3 className="mb-3 text-5xl font-semibold lg:text-right">
                  {timeline.title}
                </h3>
                <p className="text-lg lg:text-right">{timeline.description}</p>
              </div>
              <div className="relative col-start-5 col-end-6 mr-10 lg:mx-auto ">
                {/* Line */}
                <div className="flex h-full w-6 items-center justify-center">
                  <div
                    className={`glass pointer-events-none h-full w-1 rounded-none ${lineClass}`}
                  />
                </div>
                {/* Dot */}
                <div className="glass absolute top-1/2 -mt-3 h-6 w-6" />
              </div>
              <div className="col-span-2 col-start-6 hidden items-center justify-center text-9xl lg:flex">
                {timeline.icon}
              </div>
            </div>
          ) : (
            // right
            <div className="flex lg:contents" key={index}>
              <div className="col-span-2 col-start-3 hidden items-center justify-center text-9xl lg:flex">
                {timeline.icon}
              </div>
              <div className="relative col-start-5 col-end-6 mr-10 lg:mx-auto">
                {/* Line */}
                <div className="flex h-full w-6 items-center justify-center">
                  <div
                    className={`glass pointer-events-none h-full w-1 rounded-none ${lineClass}`}
                  />
                </div>
                {/* Dot */}
                <div className="glass absolute top-1/2 -mt-3 h-6 w-6" />
              </div>
              <div className="glass col-start-6 col-end-10 my-4 rounded-[69px] p-8">
                <h3 className="mb-3 text-5xl font-semibold lg:text-left">
                  {timeline.title}
                </h3>
                <p className="text-lg lg:text-left">{timeline.description}</p>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Steps
