import {
  FaMoneyBill,
  FaClock,
  FaRegSmileBeam,
  FaCheckCircle,
  FaUserFriends,
  FaEdit,
} from "react-icons/fa"

import { motion } from "framer-motion"

import { swirl } from "../../assets"
import { slideInAnimation } from "../../data"

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
      <div className="absolute -right-[10%] z-0 h-[400px] w-[400px] lg:h-[700px] lg:w-[700px] rotate-180">
        <img src={swirl} alt="swirl" className="relative top-80 blur" />
      </div>
      <motion.div
        initial="initial"
        whileInView="animate"
        viewport={{ once: false, amount: 0.1 }}
      >
        <motion.h1
          variants={slideInAnimation("up", "spring", 0)}
          className="glass relative z-10 rounded-[69px] py-32 px-8 text-center text-4xl font-bold lg:py-40 lg:text-7xl"
        >
          Achieve Party Planning{" "}
          <span className="bg-gradient-to-tr from-red-400 via-pink-500 to-violet-500 bg-clip-text text-transparent">
            Perfection
          </span>
        </motion.h1>
        <div className="relative bottom-24 z-10 mx-auto -mb-24 grid w-[90%] grid-rows-2 gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {benefits.map((benefit, index) => (
            <motion.div
              variants={slideInAnimation("up", "spring", 0.2 + index * 0.2)}
              key={index}
              className="glass rounded-[69px] p-8 text-center"
            >
              <div className="mb-4 flex justify-center text-7xl">
                {benefit.icon}
              </div>
              <div className="mb-4 text-2xl font-semibold">{benefit.title}</div>
              <div className="text-md lg:text-lg">{benefit.description}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Benefits

//TODO: styling and responsivenss
//TODO: good icons
//? tweak design?
