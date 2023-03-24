const Mission = () => {
  return (
    <section className="py-16">
      <div className="glass relative z-10 rounded-[50px] p-8 text-white">
        <div className="mb-4 text-center">
          <span className="bg-gradient-to-tr from-red-400 via-pink-500 to-violet-500 bg-clip-text text-3xl font-bold text-transparent md:text-4xl lg:text-5xl">
            MISSION STATEMENT
          </span>
        </div>
        <div className="mb-8 text-center text-xl md:text-2xl lg:px-10 lg:text-3xl">
          To deliver high-quality party essentials in a seamless and hassle-free
          manner, allowing our customers to focus on enjoying their special
          occasion.
        </div>
      </div>
      {/* blur */}
      <div className="absolute -left-40 z-0 h-[50vh] w-1/2 rounded-full bg-[#FF6B6B] opacity-[0.94] blur-[130px]" />
    </section>
  )
}

export default Mission
