import { HiChevronUp } from "react-icons/hi"

import { Disclosure } from "@headlessui/react"
import { motion, AnimatePresence } from "framer-motion"

import { swirl } from "../../assets"
import { slideInAnimation } from "../../data"

// drop down details
const faqData = [
  {
    id: 1,
    question: "What is the meaning of life?",
    answer:
      "To find out why your parents kept insisting that you finish the food on your plate.",
  },
  {
    id: 2,
    question: "Will I ever find love?",
    answer:
      "Probably, but only if you stop looking for it in your refrigerator.",
  },
  {
    id: 3,
    question: "What happens after we die?",
    answer:
      "We realize that life was just a simulation, and we were all just NPCs.",
  },
  {
    id: 4,
    question: "Why do bad things happen to good people?",
    answer:
      "Because good people are just naive enough to believe that life is fair.",
  },
  {
    id: 5,
    question: "Is there life after death?",
    answer:
      "Yes, but it's just a never-ending Zoom meeting with people you don't really like.",
  },
]

const FAQ = () => {
  return (
    <section className="relative py-16 text-white">
      {/* Left-side swirl image */}
      <div className="absolute -left-[27%] z-0 h-[400px] w-[400px] lg:h-[700px] lg:w-[700px]">
        <img src={swirl} alt="swirl" className="relative top-80 blur" />
      </div>
      <motion.div
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.1 }}
      >
        {/* title */}
        <motion.h1
          variants={slideInAnimation("up", "spring", 0)}
          className="z-10 text-center text-4xl font-bold lg:text-7xl"
        >
          FAQ
        </motion.h1>
        {faqData.map((faq, index) => (
          <motion.div
            variants={slideInAnimation("up", "spring", 0.2 + index * 0.2)}
            key={faq.id}
            className="relative z-10"
          >
            <hr className="my-8 border-b-2" />
            <Disclosure>
              {({ open }) => (
                <>
                {/* button open and closed descriptions */}
                  <Disclosure.Button className="glass flex w-full justify-between px-8 py-4 text-2xl font-medium lg:text-3xl">
                    <span className="my-auto">{faq.question}</span>
                    <motion.div
                      animate={{ rotate: open ? -180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <HiChevronUp className="text-5xl" />
                    </motion.div>
                  </Disclosure.Button>
                  <AnimatePresence>
                    {open && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8, height: 0 }}
                        animate={{ opacity: 1, scale: 1, height: "auto" }}
                        exit={{ opacity: 0, scale: 0.8, height: 0 }}
                        transition={{ duration: 0.3 }}
                        style={{ originX: 0 }}
                      >
                        <div className="px-8 pt-8 text-2xl">{faq.answer}</div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </>
              )}
            </Disclosure>
          </motion.div>
        ))}
        <motion.div variants={slideInAnimation("up", "spring", 1.2)}>
          <hr className="mt-8 border-b-2" />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default FAQ
