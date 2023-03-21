import {
  FaQuestion,
  FaBoxOpen,
  FaPlayCircle,
  FaRegSmileBeam,
  FaTrashAlt,
  FaGift,
  FaPowerOff,
  FaRecycle,
} from "react-icons/fa"
import { IoBalloonSharp } from "react-icons/io5"
import { MdQuiz } from "react-icons/md"

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
  return (
    <section className="py-5 text-white lg:py-16">
      <h1 className="mb-16 text-center lg:text-7xl text-4xl font-bold">Getting Started</h1>
      <div className="mx-auto flex grid-cols-9 flex-col lg:grid">
        {timelineData.map((timeline, index) => {
          let firstAndLast = ""
          if (index === 0) {
            firstAndLast = "gradient-top"
          } else if (index === timelineData.length - 1) {
            firstAndLast = "gradient-bottom"
          }
          return index % 2 === 0 ? (
            // left
            <div className="flex flex-row-reverse lg:contents" key={index}>
              <div className="glass col-start-1 col-end-5 my-4 rounded-[69px] p-8">
                <h3 className="mb-4 lg:text-5xl text-4xl font-medium lg:text-right">
                  <div className="bg-gradient-to-r from-red-400 via-pink-500 to-violet-500 bg-clip-text text-transparent">
                    {timeline.title}
                  </div>
                </h3>
                <p className="lg:text-lg text-md lg:text-right">{timeline.description}</p>
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
              <div className="col-span-1 col-start-6 hidden items-center justify-center text-7xl lg:flex">
                {timeline.icon}
              </div>
            </div>
          ) : (
            // right
            <div className="flex lg:contents" key={index}>
              <div className="col-span-1 col-start-4 hidden items-center justify-center text-7xl lg:flex">
                {timeline.icon}
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
              <div className="glass col-start-6 col-end-10 my-4 rounded-[69px] p-8">
                <h3 className="mb-4 lg:text-5xl text-4xl font-medium lg:text-left">
                  <div className="bg-gradient-to-r from-red-400 via-pink-500 to-violet-500 bg-clip-text text-transparent">
                    {timeline.title}
                  </div>
                </h3>
                <p className="lg:text-lg text-md lg:text-left">{timeline.description}</p>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Steps
