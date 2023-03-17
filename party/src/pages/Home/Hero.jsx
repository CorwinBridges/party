import { HiChevronRight } from "react-icons/hi2"
import { Link } from "react-router-dom"

import { gift, gift3d, gifthand, partyboy, gift3d2 } from "../../assets"

const Hero = () => {
  return (
    <section className="py-14 lg:py-16">
      <div className="grid lg:grid-cols-2">
        {/* Left gradient circle */}
        <div className="absolute top-0 left-0 z-0 h-[50vh] w-1/2 rounded-full bg-[#D3ACF1] opacity-[0.84] blur-[130px]" />
        {/* Right gradient circle */}
        <div className="absolute top-0 right-0 z-0 h-[50vh] w-1/2 rounded-full bg-[#F97FC8] opacity-[0.94] blur-[130px]" />
        {/* Left column */}
        <div className="relative z-10 order-1 text-white lg:order-none">
          <div className="mt-8 text-center text-6xl font-black uppercase lg:mt-0 lg:text-start lg:text-6xl xl:text-7xl 2xl:text-8xl">
            The{" "}
            <span className="bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent">
              perfect party
            </span>{" "}
            all in one box
          </div>
          <div className="mt-4 text-center text-3xl font-normal lg:text-start lg:text-2xl xl:text-3xl 2xl:text-4xl">
            Transform any space into a party paradise with Party in a Box,
            Simply open the box and watch as it sets up an instant celebration
            in seconds!
          </div>
          <div className="flex justify-center lg:justify-start">
            <Link
              to="/shop"
              className="glass mt-4 px-10 py-5 text-center text-2xl uppercase duration-200 ease-in-out hover:scale-110 lg:mt-8 xl:text-4xl"
            >
              Shop our products
            </Link>
          </div>
        </div>
        {/* Right column */}
        <div className="z-10 mx-auto w-80 lg:mx-6 lg:mt-10 lg:w-fit xl:mx-16 2xl:mx-20">
          <img src={gift3d} alt="Gift" />
        </div>
      </div>
    </section>
  )
}

export default Hero

//TODO: edit styling and responsiveness
