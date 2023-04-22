export const slide_images = [
  {
    title: "New Year's Eve",
    description: "Celebrate the new year with us!",
    image: "newyearsslide.jpg",
  },
  {
    title: "Christmas",
    description: "Celebrate the holidays with us!",
    image: "christmasslide.jpeg",
  },
  {
    title: "Pi Day",
    description: "Celebrate Pi Day with us!",
    image: "pidayslide.jpg",
  },
  {
    title: "4th of July",
    description: "Celebrate the 4th of July with us!",
    image: "4thofjulyslide.jpeg",
  },
  {
    title: "Valentine's Day",
    description: "Celebrate Valentine's Day with us!",
    image: "valentinesslide.webp",
  },
  {
    title: "Halloween",
    description: "Celebrate Halloween with us!",
    image: "halloweenslide.jpeg",
  },
  {
    title: "Mother's Day",
    description: "Celebrate Mother's Day with us!",
    image: "mothersdayslide.jpeg",
  },
  {
    title: "Father's Day",
    description: "Celebrate Father's Day with us!",
    image: "fathersdayslide.webp",
  },
  {
    title: "Thanksgiving",
    description: "Celebrate Thanksgiving with us!",
    image: "thanksgivingslide.jpeg",
  },
  {
    title: "St. Patrick's Day",
    description: "Celebrate St. Patrick's Day with us!",
    image: "stpatricksslide.jpg",
  },
  {
    title: "Easter",
    description: "Celebrate Easter with us!",
    image: "easterslide.webp",
  },
  {
    title: "Cinco de Mayo",
    description: "Celebrate Cinco de Mayo with us!",
    image: "cincodemayoslide.webp",
  },
]

export const quotes = [
  {
    reviewer: "Dancey Dave",
    role: "President of Alpha Sigma Pi",
    quote:
      "Party in a Box is the ultimate frat house essential! It made throwing our rager a breeze and had everything we needed for a legendary night.",
    profilepic: "danceydave.jpg",
  },
  {
    reviewer: "Party Patricia",
    role: "Master Knitter",
    quote:
      "Party in a Box? More like Yarn in a Box! As a knitter, I was pleasantly surprised to find out it had everything we needed for a night of crafting and laughter.",
    profilepic: "partypatricia.jpg",
  },
  {
    reviewer: "Rotten Robby",
    role: "Professional Brat",
    quote:
      "I've been to every theme park, water park, and arcade in the world, but nothing compares to the excitement of opening a Party in a Box. It's like Christmas, but without the disappointment of not getting what I want.",
    profilepic: "rottenrobby.jpg",
  },
  {
    reviewer: "Romantic Rachel",
    role: "Dysfunctional Newlywed",
    quote:
      "Party in a Box changed the game for my wedding. It was like having a wedding planner, caterer, and DJ all in one. No bridezilla moments for me because it was easy and stress-free. Now if only Party in a Box could help with the marriage too!",
    profilepic: "romanticrachel.jpg",
  },
  {
    reviewer: "Splashy Samuel",
    role: "Incompetent Swimmer",
    quote:
      "Thanks to Party in a Box, I felt like a swimming superstar, even though I'm no Michael Phelps. The pool accessories had me looking like a pro, even while doggy-paddling. And the fast cleanup meant I could quickly get back to my true calling: lounging poolside with a cold drink!",
    profilepic: "splashysamuel.JPG",
  },
  {
    reviewer: "Grill Master Gary",
    role: "BBQ Dad",
    quote:
      "Let me tell you something, I've been grilling for 20 years, but Party in a Box made me look like a pro. I didn't have to worry about a thing - the food was hot, the drinks were cold, and the clean-up was a breeze. I even had time to take a nap in my hammock, which is something I haven't done since 1998.",
    profilepic: "grillmastergary.webp",
  },
  {
    reviewer: "Birthday Brittany",
    role: "Egotistical 5-Year-Old",
    quote:
      "I don't always party, but when I do, it's with Party in a Box. Because let's face it, I'm the star of the show, the life of the party, the queen of the castle. With Party in a Box, I get to be all that and more, without breaking a sweat. Just another thing that adds to my awesomeness!",
    profilepic: "birthdaybrittany.jpg",
  },
  {
    reviewer: "Quarterback Quentin",
    role: "Local Football Hero",
    quote:
      "With Party in a Box, I don't need to be a party planner or a quarterback to throw a winning Super Bowl watch party. It's like having a personal assistant that sets up a themed party in seconds, and cleans up just as fast. Plus, it's made with vibranium, so you know it's to handle my rowdy friends. Party in a Box: the MVP of party supplies!",
    profilepic: "quarterbackquentin.jpg",
  },
  {
    reviewer: "Hazy Harsh",
    role: "Madison Academic Student",
    quote:
      "Thanks, Party in a Box! We'd finally be dank at prom without any trouble, but not if Mr. Gurthrie had anything to say about it, Mike would be pissed! But at least it gives me time to complete my English paper.",
    profilepic: "harsh.jpg",
  },
]

export const slideInAnimation = (direction, type, delay) => ({
  initial: {
    opacity: 0,
    x: direction === "left" ? "-25%" : direction === "right" ? "25%" : 0,
    y: direction === "up" ? "25%" : direction === "down" ? "25%" : 0,
  },
  animate: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: { duration: 0.8, type: type, delay: delay },
  },
})

export const heightAnimation = (delay) => ({
  initial: { height: 0 },
  animate: {
    height: "auto",
    transition: { duration: 0.4, type: "tween", ease: "linear", delay: delay },
  },
})

export const fadeInAnimation = (delay) => ({
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: { duration: 0.3, type: "tween", ease: "easeOut", delay: delay },
  },
})
