const timelineData = [
  {
    title: "MADISON GRIFFIN",
    description:
      "Madison is a highly motivated and organized individual who is the backbone of our team. She is able to efficiently coordinate tasks and delegate responsibilities among team members, ensuring that all projects are completed on time and to the highest standard. Her leadership skills and positive attitude make her a valuable asset to the team and she always goes the extra mile to make sure that everyone is working together efficiently and effectively. She is a great communicator, always listening and taking feedback, which makes her a great leader.",
    picture: "madison",
  },
  {
    title: "CORWIN BRIDGES",
    description:
      "Corwin is the brains behind the operation. He has an incredible intellect and a deep understanding of the inner workings of the company. Corwin is a genius when it comes to problem-solving and strategy development, he always comes up with new and innovative solutions to any challenge that arises. He is well-versed in the ins and outs of the business, and his expertise is invaluable to the team. His analytical thinking, attention to detail and ability to think outside the box makes him the go-to person when it comes to making important decisions.",
    picture: "corwin",
  },
  {
    title: "ANNA WEISSENFLUH",
    description:
      "Anna is the designer of the team. She is incredibly creative and has a great sense of style. Not only is she a talented designer, but she's also a goofball who always lightens the mood with her jokes, even if they're not always funny. Her fun-loving personality and positive energy makes her a joy to work with, she has a unique ability to bring out the best in her colleagues. She's a great listener and always open to feedback, which makes her a valuable asset to the team. She's not only a great designer but also a great team player, always willing to help and support her colleagues.",
    picture: "anna",
  },
]

const Process = () => {
  return (
    <section className="py-5 text-white lg:py-16">
      <h1 className="mb-16 text-center text-3xl font-bold md:text-4xl lg:text-5xl">
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
              <div className="col-start-2 col-end-5 my-20 hidden items-center justify-center rounded-[69px] bg-purple-500 p-8 px-10 lg:flex">
                <h3 className="mb-4 text-2xl font-medium">
                  <div className="text-center text-white">{timeline.title}</div>
                </h3>
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
                <h3 className="mb-4 text-right text-2xl font-medium md:text-3xl lg:text-left lg:text-4xl">
                  <div className="bg-gradient-to-r from-violet-500 via-red-400 to-pink-500 bg-clip-text text-transparent">
                    {timeline.title}
                  </div>
                </h3>
                <p className="text-lg lg:text-left">{timeline.description}</p>
              </div>
            </div>
          ) : (
            // left
            <div className="flex flex-row-reverse lg:contents" key={index}>
              <div className="glass col-start-1 col-end-5 my-4 rounded-[69px] p-8">
                <h3 className="mb-4 text-left text-2xl font-medium md:text-3xl lg:text-right lg:text-4xl">
                  <div className="bg-gradient-to-r from-violet-500 via-red-400 to-pink-500  bg-clip-text text-transparent">
                    {timeline.title}
                  </div>
                </h3>
                <p className="text-lg lg:text-right">{timeline.description}</p>
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
              <div className="col-start-6 col-end-9 my-20 hidden items-center justify-center rounded-[69px] bg-purple-500 p-8 text-5xl lg:flex">
                <h3 className="mb-4 text-right text-2xl font-medium md:text-3xl lg:text-left lg:text-4xl">
                  <div className="text-white">{timeline.picture}</div>
                </h3>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Process
