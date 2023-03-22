import { group } from "../../assets"

const Story = () => {
  return (
    <section className="mx-auto max-w-xl py-16">
      <div className="glass relative z-10 rounded-[69px] p-8">
        {/* us */}
        <div className="mb-4 flex justify-center">
          <img src={group} />
        </div>
        <div className="text-center">
          <span className="bg-gradient-to-tr from-red-400 via-pink-500 to-violet-500 bg-clip-text text-3xl font-bold text-transparent md:text-4xl lg:text-5xl">
            OUR STORY
          </span>
        </div>
      </div>
      {/* gradient circle */}
      <div className="absolute -left-20 -top-20">
        <div className="z-1 relative bottom-0 h-[400px] w-[400px] rounded-[50%] bg-gradient-to-b from-[#E8C483]/[0.54] to-[#E25D67]/[0.68] opacity-[0.75] blur-[3px]" />
      </div>
      {/* blur */}
      <div className="absolute top-0 right-0 z-0 h-[50vh] w-1/2 rounded-full bg-[#FEE17A] opacity-[0.94] blur-[130px]" />
    </section>
  )
}

export default Story
