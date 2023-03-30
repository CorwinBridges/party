import { useState, useEffect } from "react"
import CountUp from "react-countup"
import { InView } from "react-intersection-observer"
import useMeasure from "react-use-measure"

import { AnimatePresence, motion } from "framer-motion"

import { fadeInAnimation, slideInAnimation } from "../../data"
import { useMediaQuery } from "../../utils"

const quotes = [
  {
    reviewer: "Dancey Dave",
    role: "President of Alpha Sigma Pi",
    quote:
      "Party in a Box is the ultimate frat house essential! It made throwing our rager a breeze and had everything we needed for a legendary night.",
    profilepic:
      "https://totalfratmove.com/wp-content/uploads/2021/01/Frar-Boy.jpg",
  },
  {
    reviewer: "Party Patricia",
    role: "Master Knitter",
    quote:
      "Party in a Box? More like Yarn in a Box! As a knitter, I was pleasantly surprised to find out it had everything we needed for a night of crafting and laughter.",
    profilepic:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzCiXWB9DQRT7__bG1iRRu3qFW-pTJF8zktA&usqp=CAU",
  },
  {
    reviewer: "Rotten Robby",
    role: "Professional Brat",
    quote:
      "I've been to every theme park, water park, and arcade in the world, but nothing compares to the excitement of opening a Party in a Box. It's like Christmas, but without the disappointment of not getting what I want.",
    profilepic:
      "https://i.pinimg.com/736x/bf/ef/1a/bfef1a1c8f8beb2d8b8c66851adbf5cb.jpg",
  },
  {
    reviewer: "Romantic Rachel",
    role: "Dysfunctional Newlywed",
    quote:
      "Party in a Box changed the game for my wedding. It was like having a wedding planner, caterer, and DJ all in one. No bridezilla moments for me because it was easy and stress-free. Now if only Party in a Box could help with the marriage too!",
    profilepic:
      "https://media.istockphoto.com/id/157293077/photo/unhappy-bride.jpg?s=612x612&w=0&k=20&c=Z2LxuHxaaxa-TVnny3LaRHNVtlO-m19R_BEYH38hO5c=",
  },
  {
    reviewer: "Splashy Samuel",
    role: "Incompetent Swimmer",
    quote:
      "Thanks to Party in a Box, I felt like a swimming superstar, even though I'm no Michael Phelps. The pool accessories had me looking like a pro, even while doggy-paddling. And the fast cleanup meant I could quickly get back to my true calling: lounging poolside with a cold drink!",
    profilepic:
      "http://3.bp.blogspot.com/-Olz3UC0WMxE/VbB5HXMudvI/AAAAAAAAazM/PxS1HZPzE-o/s1600/Edit_Champs_Swim_Meet_2015_0503.JPG",
  },
  {
    reviewer: "Grill Master Gary",
    role: "BBQ Dad",
    quote:
      "Let me tell you something, I've been grilling for 20 years, but Party in a Box made me look like a pro. I didn't have to worry about a thing - the food was hot, the drinks were cold, and the clean-up was a breeze. I even had time to take a nap in my hammock, which is something I haven't done since 1998.",
    profilepic:
      "https://cdn.shopify.com/s/files/1/0033/6576/5238/products/grillindad_1200x1200.jpg?v=1631207258",
  },
  {
    reviewer: "Birthday Brittany",
    role: "Egotistical 5-Year-Old",
    quote:
      "I don't always party, but when I do, it's with Party in a Box. Because let's face it, I'm the star of the show, the life of the party, the queen of the castle. With Party in a Box, I get to be all that and more, without breaking a sweat. Just another thing that adds to my awesomeness!",
    profilepic:
      "https://d.newsweek.com/en/full/2067542/file-photo-screaming-girl.jpg",
  },
  {
    reviewer: "Quarterback Quentin",
    role: "Local Football Hero",
    quote:
      "With Party in a Box, I don't need to be a party planner or a quarterback to throw a winning Super Bowl watch party. It's like having a personal assistant that sets up a themed party in seconds, and cleans up just as fast. Plus, it's made with vibranium, so you know it's tough enough to handle my rowdy friends. Party in a Box: the MVP of party supplies!",
    profilepic:
      "https://media.npr.org/assets/img/2016/02/26/johncastello1_wide-98b9425f315a0a266d391480d4921584b88c936e-s1400-c100.jpg",
  },
  {
    reviewer: "Pepperoni Pete",
    role: "Italian Cuisine Connoisseur",
    quote:
      "Party in a Box nailed it for my pizza party! Their decorations transformed my living room into a pizzeria, minus the weird smell and creepy guy behind the counter. And with easy setup, I had more time for what mattered - eating all the pizza I could handle! Thanks Party in a Box, you're the MVP of pizza parties!",
    profilepic:
      "https://cdn.dailyvoice.com/image/upload/c_fill,dpr_2,f_auto,q_auto:eco,w_640/Screenshot_966_n77eqe",
  },
]

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
                        src={quote.profilepic}
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
              className="glass mt-8 px-8 py-4 text-center text-2xl font-medium duration-200 ease-in-out hover:scale-110"
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
