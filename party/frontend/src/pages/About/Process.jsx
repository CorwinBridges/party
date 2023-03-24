import { blob } from "../../assets"

const timelineData = [
  {
    title: "1. Research and Development",
    description:
      "Our team conducts extensive research on the latest trends and innovations in party planning and decorations, to ensure that our boxes are always up-to-date and on-trend.",
  },
  {
    title: "2. Conceptualization and Design",
    description:
      "Using the information gathered from our research, our team conceptualizes and designs the perfect party box, taking into account factors such as aesthetics, functionality, and customer needs.",
  },
  {
    title: "3. Testing and Iteration",
    description:
      "Once a prototype of the party box has been created, it is rigorously tested and evaluated by both our team and a panel of party experts. Based on their feedback, we make any necessary adjustments and improvements to create the final product, the greatest party box ever.",
  },
]

const Process = () => {
  return (
    <section className="z-10 text-white py-16">
      <div className="relative z-10">
        <h1 className="mb-16 text-left text-3xl font-bold md:text-4xl lg:text-5xl ">
          <span className="z-10 bg-gradient-to-tr from-red-400 via-pink-500 to-violet-500 bg-clip-text text-3xl font-bold text-transparent md:text-4xl lg:text-5xl">
            OUR PROCESS
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
              // left
              <div className="flex flex-row-reverse lg:contents" key={index}>
                <div className="glass col-start-1 col-end-5 my-4 rounded-[69px] p-8">
                  <h3 className="mb-4 text-left  text-2xl font-medium md:text-3xl lg:text-right  lg:text-4xl">
                    <div className="bg-gradient-to-r from-violet-500 via-red-400 to-pink-500  bg-clip-text text-transparent">
                      {timeline.title}
                    </div>
                  </h3>
                  <p className="text-lg lg:text-right">
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
              </div>
            ) : (
              // right
              <div className="flex lg:contents" key={index}>
                <div className="col-span-1 col-start-4 hidden items-center justify-center text-8xl lg:flex">
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
                  <h3 className="mb-4 text-left text-2xl font-medium md:text-3xl lg:text-left lg:text-4xl">
                    <div className="bg-gradient-to-r from-violet-500 via-red-400 to-pink-500 bg-clip-text text-transparent">
                      {timeline.title}
                    </div>
                  </h3>
                  <p className="text-lg lg:text-left">{timeline.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      <img
        src={blob}
        alt="blob"
        className="z-0 absolute bottom-[1200px] -left-20 h-[300px] opacity-[0.60] blur-[3px] lg:h-[450px] lg:opacity-[0.75] "
      />
    </section>
  )
}

export default Process
