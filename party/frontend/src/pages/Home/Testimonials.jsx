import { useState, useEffect } from "react"
import CountUp from "react-countup"
import { InView } from "react-intersection-observer"
import useMeasure from "react-use-measure"

import { AnimatePresence, motion } from "framer-motion"

import { quotes, slideInAnimation } from "../../data"
import { useMediaQuery } from "../../utils"

const Testimonials = () => {
  // Check if the viewport width is equal to or greater than 1536px
  const is2xl = useMediaQuery("(min-width: 1536px)")

  // Initialize a state to store the quotes to show
  const [quotesToShow, setQuotesToShow] = useState([])

  // Initialize a state to store the previously shown quote indexes
  const [previousQuoteIndexes, setPreviousQuoteIndexes] = useState([])

  // Initialize refs and heights using the useMeasure hook for the two quotes
  const [ref1, height1] = useMeasure()
  const [ref2, height2] = useMeasure()

  // Function to generate two random unique quotes that haven't been shown before
  const generateRandomQuotes = () => {
    let randomIndexes = []
    while (randomIndexes.length < 2) {
      const index = Math.floor(Math.random() * quotes.length)
      // Ensure the random index is unique and hasn't been shown before
      if (
        !previousQuoteIndexes.includes(index) &&
        !randomIndexes.includes(index)
      ) {
        randomIndexes.push(index)
      }
    }
    // Map the random indexes to the actual quotes
    const randomQuotes = randomIndexes.map((index) => quotes[index])

    // Update state with the new random quote indexes and the quotes to show
    setPreviousQuoteIndexes(randomIndexes)
    setQuotesToShow(randomQuotes)
  }

  // Run the generateRandomQuotes function when the component mounts
  useEffect(() => {
    generateRandomQuotes()
  }, [])

  // Function to handle the "View more stories" button click
  const handleViewMoreStories = () => {
    generateRandomQuotes()
  }

  return (
    <section className="py-16 ">
      {/* Right-side background circle with gradient */}
      <div className="absolute -right-[6%]">
        <div className="relative bottom-[10px] z-0 aspect-square h-[300px] animate-[bounce_10s_linear_infinite] rounded-[50%] bg-gradient-to-b from-[#C194EA] to-[#EE77C7]/[0.94] opacity-[0.60] blur-[3px] lg:h-[400px]" />
      </div>

      <motion.div
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.1 }}
        className="grid grid-cols-1 gap-x-4 gap-y-8 text-white sm:grid-cols-2 lg:grid-cols-4 lg:gap-8 2xl:grid-cols-3"
      >
        {/* Map through quotesToShow and display each quote */}
        {quotesToShow.map((quote, index) => {
          const localRef = index === 0 ? ref1 : ref2
          return (
            <motion.div
              variants={slideInAnimation(
                "up",
                "spring",
                is2xl ? 0 + index * 0.2 : 0.6 + index * 0.2
              )}
              key={index}
              animate={{ height: Math.max(height1.height, height2.height) }}
              className="glass relative z-10 overflow-hidden rounded-[69px] lg:col-span-2 2xl:col-span-1"
            >
              {/* Animate appearance and disappearance of quote */}
              <AnimatePresence initial={false}>
                <motion.div
                  key={quote.role}
                  initial={{ opacity: 0, x: "100%" }}
                  animate={{
                    opacity: 1,
                    x: 0,
                    transition: { duration: 0.25, delay: 0.25 },
                  }}
                  exit={{
                    opacity: 0,
                    x: "-100%",
                    transition: { duration: 0.25 },
                  }}
                >
                  {/* Quote content */}
                  <div ref={localRef} className="absolute p-8">
                    <div className="aspect-square w-20 overflow-hidden rounded-full">
                      <img
                        src={`/src/assets/testimonials/${quote.profilepic}`}
                        alt={quote.reviewer}
                        className="h-full w-full object-cover object-center"
                      />
                    </div>
                    <div className="mt-4 text-2xl font-bold">
                      {quote.reviewer}
                    </div>
                    <div className="mt-1 text-xl font-medium">{quote.role}</div>
                    <div className="text-md mt-4 font-normal 2xl:text-lg">
                      “{quote.quote}”
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </motion.div>
          )
        })}
        {/* "Join" text content */}
        <div className="relative z-10 order-first sm:col-span-2 lg:col-span-4 2xl:order-last 2xl:col-span-1">
          <motion.div
            variants={slideInAnimation("up", "spring", is2xl ? 0.4 : 0)}
            className="mt-8 text-center text-4xl font-bold sm:text-5xl md:text-6xl lg:text-7xl xl:text-6xl 2xl:text-start"
          >
            <div>Join</div>
            {/* Counter */}
            <InView triggerOnce>
              {({ inView, ref }) => (
                <div
                  className="mt-2 bg-gradient-to-tr from-red-400 to-pink-500 bg-clip-text text-transparent"
                  ref={ref}
                >
                  {inView ? (
                    <CountUp
                      end={10000000}
                      separator=","
                      suffix="+"
                      duration={1}
                      delay={0.1}
                      start={69}
                    />
                  ) : (
                    <div className="mt-2 bg-gradient-to-tr from-red-400 to-pink-500 bg-clip-text text-transparent">
                      69
                    </div>
                  )}
                </div>
              )}
            </InView>
            <div className="mt-2">Partiers</div>
          </motion.div>
          <motion.div
            variants={slideInAnimation("up", "spring", is2xl ? 0.6 : 0.2)}
            className="mx-auto mt-4 w-full text-center text-lg font-normal sm:w-[90%] sm:text-xl md:w-[80%] md:text-2xl lg:w-[60%] 2xl:mx-0 2xl:w-full 2xl:text-start"
          >
            You'll never have to worry about party planning again. Let us take
            care of the details while you sit back and enjoy the celebration!
          </motion.div>

          {/* View more stories button */}
          <motion.div
            variants={slideInAnimation("up", "spring", is2xl ? 0.8 : 0.4)}
            className="flex justify-center 2xl:block"
          >
            <button
              onClick={handleViewMoreStories}
              type="button"
              className="glass mt-8 px-8 py-4 text-center text-2xl font-medium shadow-pink-500/30 duration-200 ease-in-out hover:scale-110"
            >
              View more stories
            </button>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

export default Testimonials
