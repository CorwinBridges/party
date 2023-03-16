import { partyhq } from "../../assets"

const HQ = () => {
  return (
    <section className="py-40 ">
      <div className="relative top-10 z-20 mx-auto w-full xl:w-max">
        <img src={partyhq} alt="" className="relative rounded-[50px]" />
      </div>
      <div className="glass relative rounded-[50px] p-10 pb-10 text-white md:px-40 lg:px-20 lg:pb-20 ">
        <div className="  text-center">
          <span className="bg-gradient-to-tr from-red-400 via-pink-500 to-violet-500 bg-clip-text text-3xl font-bold text-transparent md:text-4xl lg:text-5xl">
            Our HQ
          </span>
        </div>

        <div className="text-md pt-7 text-center md:text-xl lg:px-10 lg:text-2xl">
          At Party in a Box HQ, our team works tirelessly to ensure that every
          box is packed with the latest and greatest party essentials, from
          decorations to snacks and everything in between, to make sure every
          customer's celebration is a success.
        </div>
      </div>
    </section>
  )
}

export default HQ
