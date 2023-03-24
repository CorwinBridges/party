import { worldcup, smitty } from "../../assets"

const awards = [
  {
    name: "Nobel Peace Prize",
    award:
      "https://upload.wikimedia.org/wikipedia/en/thumb/e/ed/Nobel_Prize.png/220px-Nobel_Prize.png",
  },
  {
    name: "Medal of Honor",
    award:
      "https://www.mohconvention.com/media/images/medals/tab-navy-medal.png",
  },
  {
    name: "Smitty Werbenjagermanjensen",
    award: smitty,
  },
]

const Awards = () => {
  return (
    <section className="py-16">
      <div className="relative z-10">
        <div className="mb-8 text-center">
          <span className="bg-gradient-to-tr from-red-400 via-pink-500 to-violet-500 bg-clip-text text-3xl font-bold text-transparent md:text-4xl lg:text-5xl">
            AWARD WINNING TEAM
          </span>
        </div>
        <div className="glass flex justify-center rounded-[30px]">
          <div className="grid grid-cols-3 gap-8 p-8">
            {awards.map((award, index) => {
              return (
                <div className="m-auto" key={index}>
                  <img src={award.award} alt={award.name} />
                </div>
              )
            })}
          </div>
        </div>
      </div>
      {/* blur */}
      <div className="absolute -right-40 z-0 h-[50vh] w-1/2 rounded-full bg-[#FEE17A] opacity-[0.94] blur-[130px]" />
    </section>
  )
}

export default Awards
