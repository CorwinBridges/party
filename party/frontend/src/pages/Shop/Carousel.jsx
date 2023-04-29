import { HiChevronLeft, HiChevronRight } from "react-icons/hi"

import { Navigation, Pagination, Autoplay, Keyboard } from "swiper"
import "swiper/css"
import "swiper/css/autoplay"
import "swiper/css/keyboard"
import "swiper/css/pagination"
import { Swiper, SwiperSlide } from "swiper/react"

import { x_shape } from "../../assets"
import { slide_images } from "../../data"

const Carousel = () => {
  return (
    <section className="py-16">
      {/* Left-side x image */}
      <div className="absolute -left-10 -top-[400px] z-0 w-1/2 lg:-left-20 lg:w-1/4  ">
        <img src={x_shape} alt="x" className="relative top-80 blur" />
      </div>
      {/* {blur} */}
      <div className="absolute -right-10 top-0 z-0 h-[50vh] w-1/2 rounded-full bg-[#7CFE7A] opacity-[0.94] blur-[110px]" />
      <div className="relative z-10">
        <Swiper
          modules={[Navigation, Pagination, Autoplay, Keyboard]}
          autoplay={{
            delay: 10000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          keyboard={{
            enabled: true,
          }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          pagination={{ clickable: true }}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          breakpoints={{
            100: {
              spaceBetween: 200,
              slidesPerView: 1,
            },
            // lg
            1024: {
              slidesPerView: 2,
              spaceBetween: 150,
            },
            // xl
            1280: {
              slidesPerView: 2,
              spaceBetween: 200,
            },
            // 2xl
            1536: {
              slidesPerView: 2,
              spaceBetween: 275,
            },
          }}
        >
          <button>
            <HiChevronLeft className="swiper-button-prev glass absolute left-[10%] top-1/2 z-10 -translate-y-1/2 text-5xl text-white shadow-transparent hover:bg-pink-500 lg:left-[18%] lg:text-7xl" />
          </button>
          <button>
            <HiChevronRight className="swiper-button-next glass absolute right-[10%] top-1/2 z-10 -translate-y-1/2 text-5xl text-white shadow-transparent hover:bg-pink-500 lg:right-[18%] lg:text-7xl" />
          </button>

          {slide_images.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className=" w-full px-4 lg:px-0">
                <div className="glass mb-12 h-[50vh] max-h-[50rem] rounded-[50px] bg-purple-600/50 p-6 shadow-none lg:-mb-24 lg:h-[60vh]">
                  <img
                    src={`/assets/carousel/${slide.image}`}
                    alt={slide.title}
                    className="h-full w-full rounded-[50px] object-cover"
                  />
                </div>
                <div className="glass xl:1/4 relative -left-20 bottom-12 z-10 hidden aspect-square w-2/5 max-w-[250px] items-center  justify-center rounded-[50px] p-4 text-center text-white lg:flex">
                  <h1 className="mx-auto text-xl font-bold text-purple-300 xl:text-3xl 2xl:text-4xl">
                    <span className="bg-gradient-to-r from-red-400 to-pink-500 bg-clip-text text-transparent">
                      {slide.title}
                    </span>
                  </h1>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}

export default Carousel
