import { HiChevronRight } from "react-icons/hi2"
import { Link } from "react-router-dom"

import { gift, gift3d, gifthand, partyboy, gift3d2 } from "../../assets"

const Hero = () => {
  return (
    <section className="py-6 lg:py-16">
      <div className="grid gap-8 lg:grid-cols-2">
        {/* Left column */}
        <div className="relative z-10 order-1 text-white lg:order-none">
          <div className="mx-auto max-w-xl text-center text-4xl font-black uppercase sm:text-5xl lg:max-w-none lg:text-start lg:text-6xl xl:text-7xl 2xl:text-8xl">
            The{" "}
            <span className="bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent">
              perfect party
            </span>{" "}
            all in one box
          </div>
          <div className="mx-auto mt-4 max-w-xl text-center text-lg font-normal sm:text-2xl lg:max-w-none lg:text-start lg:text-2xl xl:text-3xl 2xl:text-4xl">
            Transform any space into a party paradise with Party in a Box,
            Simply open the box and watch as it sets up an instant celebration
            in seconds!
          </div>
          <div className="flex justify-center lg:justify-start">
            <Link
              to="/shop"
              className="glass mt-4 px-10 py-5 text-center text-xl uppercase duration-200 ease-in-out hover:scale-110 lg:mt-8 xl:text-4xl"
            >
              Shop our products
            </Link>
          </div>
        </div>
        {/* Right column */}
        <div className="z-10 mx-auto w-48 sm:w-52 lg:w-fit">
          <img src={gift3d} alt="Gift" />
        </div>
      </div>
      {/* Left blur circle */}
      <div className="absolute top-0 left-0 z-0 h-[50vh] w-1/2 rounded-full bg-[#D3ACF1] opacity-[0.84] blur-[130px]" />
      {/* Right blur circle */}
      <div className="absolute top-0 right-0 z-0 h-[50vh] w-1/2 rounded-full bg-[#F97FC8] opacity-[0.94] blur-[130px]" />
    </section>
  )
}

export default Hero

//TODO: edit styling and responsiveness
