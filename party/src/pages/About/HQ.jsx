import { partyhq, blob } from "../../assets"

const HQ = () => {
  return (
    <section className="py-16">
      <div className="relative top-10 z-20 mx-auto w-full xl:w-max">
        <img src={partyhq} alt="Party HQ" className="relative rounded-[50px]" />
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
      <img
        src={blob}
        alt="blob"
        className="absolute right-20 z-0 h-[300px] opacity-[0.60] blur-[3px]  lg:top-[2800px] lg:h-[450px] lg:opacity-[0.75] "
      />
    </section>
  )
}

export default HQ
