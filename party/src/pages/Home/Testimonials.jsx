import { useState, useEffect } from "react"
import CountUp from "react-countup"
import { InView } from "react-intersection-observer"

import axios from "axios"

import { swirl } from "../../assets"

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
  const [quotesToShow, setQuotesToShow] = useState([])
  const [previousQuoteIndexes, setPreviousQuoteIndexes] = useState([])

  const generateRandomQuotes = () => {
    let randomIndexes = []
    while (randomIndexes.length < 2) {
      const index = Math.floor(Math.random() * quotes.length)
      if (
        !previousQuoteIndexes.includes(index) &&
        !randomIndexes.includes(index)
      ) {
        randomIndexes.push(index)
      }
    }
    const randomQuotes = randomIndexes.map((index) => quotes[index])
    setPreviousQuoteIndexes(randomIndexes)
    setQuotesToShow(randomQuotes)
  }

  useEffect(() => {
    generateRandomQuotes()
  }, [])

  const handleViewMoreStories = () => {
    generateRandomQuotes()
  }

  return (
    <section className="py-14 lg:py-16">
      {/* Right-side background circle with gradient */}
      <div className="absolute -right-[6%]">
        <div className="relative bottom-72 z-0 aspect-square h-[400px] rounded-[50%] bg-gradient-to-b from-[#C194EA] to-[#EE77C7]/[0.94] opacity-[0.75] blur-[3px] lg:h-[600px]" />
      </div>
      {/* right-side foreground circle with gradient */}
      <div className="absolute right-[20%]">
        <div className="relative bottom-[20px] z-0 aspect-square h-[300px] rounded-[50%] bg-gradient-to-b from-[#9940EB]/[0.54] to-[#F05EC0]/[0.68] opacity-[0.75] blur-[3px] lg:h-[475px]" />
      </div>

      {quotesToShow.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-white lg:grid-cols-4 2xl:grid-cols-3">
          {quotesToShow.map((quote, index) => (
            <div
              key={index}
              className="glass relative z-10 rounded-[69px] p-8 lg:col-span-2 2xl:col-span-1"
            >
              <div className="aspect-square w-20 overflow-hidden rounded-full">
                <img
                  src={quote.profilepic}
                  alt={quote.reviewer}
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <div className="mt-4 text-2xl font-bold">{quote.reviewer}</div>
              <div className="mt-1 text-xl font-medium">{quote.role}</div>
              <div className="text-md mt-4 font-normal 2xl:text-lg">
                “{quote.quote}”
              </div>
            </div>
          ))}
          {/* Counter */}
          <div className="relative z-10 order-first sm:col-span-2 lg:col-span-4 2xl:order-last 2xl:col-span-1">
            <div className="mt-8 text-center text-5xl font-bold md:text-6xl lg:text-7xl xl:text-7xl 2xl:text-start">
              <div>Join</div>
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
            </div>
            <div className="mx-auto mt-4 w-full text-center text-2xl font-normal sm:w-[90%] md:w-[80%] lg:w-[60%] 2xl:mx-0 2xl:w-full 2xl:text-start">
              You'll never have to worry about party planning again. Let us take
              care of the details while you sit back and enjoy the celebration!
            </div>
            <div className="flex justify-center 2xl:block">
              <button
                onClick={handleViewMoreStories}
                type="button"
                className="glass mt-8 px-8 py-4 text-center text-2xl font-medium duration-200 ease-in-out hover:scale-110"
              >
                View more stories
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default Testimonials

//TODO: styling and responsivenss
