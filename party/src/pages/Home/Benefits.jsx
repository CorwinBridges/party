import {
  FaMoneyBill,
  FaClock,
  FaRegSmileBeam,
  FaCheckCircle,
  FaUserFriends,
  FaEdit,
} from "react-icons/fa"

import { swirl } from "../../assets"
import { money, clock, clean, family, balloons } from "../../assets"

const benefits = [
  {
    icon: <FaMoneyBill />,
    title: "High-Quality, Low Cost",
    description:
      "Our party boxes are designed with affordable yet high-quality materials, ensuring that you can throw an unforgettable party without breaking the bank.",
  },
  {
    icon: <FaUserFriends />,
    title: "Suitable for All Ages",
    description:
      "Our party boxes are designed to be enjoyed by everyone, young and old alike.",
  },
  {
    icon: <FaClock />,
    title: "Quick and Easy Setup",
    description:
      "Our party boxes are designed for easy and stress-free setup, so you can spend more time enjoying your party and less time preparing for it.",
  },
  {
    icon: <FaRegSmileBeam />,
    title: "Unforgettable Memories",
    description:
      "Our party boxes are designed to help you create memories that will last a lifetime, with fun and exciting themes that your guests will love.",
  },
  {
    icon: <FaCheckCircle />,
    title: "Easy Cleanup",
    description:
      "Our party boxes come with all the supplies you need for easy and stress-free cleanup, so you can relax and enjoy the after-party.",
  },
  {
    icon: <FaEdit />,
    title: "Customizable",
    description:
      "Our party boxes are customizable, allowing you to choose the perfect theme and accessories to suit your party and your guests.",
  },
]

const Benefits = () => {
  return (
    <section className="py-16 text-white">
      {/* right-side swirl image */}
      <div className=" z-0 absolute -right-[7%] h-[400px] w-[400px] lg:h-[700px] lg:w-[700px]">
        <img src={swirl} alt="swirl" className="relative top-80 blur" />
      </div>
      <h1 className="glass relative rounded-[69px] py-32 text-center text-4xl font-bold lg:py-40 lg:text-7xl">
        Achieve Party Planning{" "}
        <span className="bg-gradient-to-tr from-red-400 via-pink-500 to-violet-500 bg-clip-text text-transparent">
          Perfection
        </span>
      </h1>
      <div className="relative bottom-24 z-10 mx-28 -mb-24 grid grid-rows-2 gap-8 md:grid-cols-2 xl:grid-cols-3">
        {benefits.map((benefit, index) => (
          <div key={index} className="glass rounded-[69px] p-8 text-center">
            <div className="mb-4 flex justify-center text-7xl">
              {benefit.icon}
            </div>
            <div className="mb-4 text-2xl font-semibold">{benefit.title}</div>
            <div className="text-sm lg:text-lg">{benefit.description}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Benefits

//TODO: styling and responsivenss
//TODO: good icons
//? tweak design?
