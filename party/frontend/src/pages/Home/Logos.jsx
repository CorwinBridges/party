import Marquee from "react-fast-marquee"

import { motion } from "framer-motion"

import { logos, slideInAnimation } from "../../data"

const Logos = () => {
  return (
    <section className="py-16">
      <motion.div
        variants={slideInAnimation("up", "spring")}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.1 }}
        className="relative z-10"
      >
        <Marquee gradient={false} speed={30}>
          <div className="flex h-20 text-white brightness-0 invert">
            {logos.map((logo) => (
              <img
                key={logo.alt}
                src={`/src/assets/logos/${logo.src}`}
                alt={logo.alt}
                className="mx-10"
              />
            ))}
          </div>
        </Marquee>
      </motion.div>
    </section>
  )
}

export default Logos
