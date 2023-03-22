import { HiChevronLeft, HiChevronRight } from "react-icons/hi"

import {
  Navigation,
  Pagination,
  EffectCoverflow,
  Autoplay,
  Keyboard,
} from "swiper"
import "swiper/css"
import "swiper/css/autoplay"
import "swiper/css/effect-coverflow"
import "swiper/css/keyboard"
import "swiper/css/pagination"
import { Swiper, SwiperSlide } from "swiper/react"

import { slide_images } from "../../data"

const Carousel = () => {
  return (
    <section className="py-16">
      <Swiper
        modules={[Navigation, Pagination, EffectCoverflow, Autoplay, Keyboard]}
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
        slidesPerView={2}
        pagination={{ clickable: true }}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        breakpoints={{
          // xs
          480: {
            spaceBetween: 50,
          },
          // sm
          640: {
            spaceBetween: 275,
          },
          // md
          768: {
            spaceBetween: 275,
          },
          // lg
          1024: {
            spaceBetween: 275,
          },
          // xl
          1280: {
            spaceBetween: 275,
          },
          // 2xl
          1536: {
            spaceBetween: 275,
          },
        }}
      >
        <HiChevronLeft className="swiper-button-prev glass absolute top-1/2 left-[16%] z-10 -translate-y-1/2 text-5xl text-white hover:bg-pink-500 lg:text-7xl" />
        <HiChevronRight className="swiper-button-next glass absolute top-1/2 right-[16%] z-10 -translate-y-1/2 text-5xl text-white hover:bg-pink-500 lg:right-[23%] lg:text-7xl" />

        {slide_images.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="mb-12 h-[60vh] rounded-[50px] bg-purple-600 p-6">
              <img
                src={slide.image}
                alt={slide.title}
                className="h-full w-full rounded-[50px] object-cover"
              />
              <div className="glass absolute -left-32 bottom-6 z-10 aspect-square max-w-xs rounded-[50px] p-8 text-white">
                <h1 className="text-center text-4xl font-bold">
                  {slide.title}
                </h1>
                <p className="mt-2 text-xl font-normal">
                  {slide.description} Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Eius, alias.
                </p>
                <div className="flex justify-center">
                  <button
                    type="button"
                    className="glass mt-4 px-4 py-2 text-4xl font-medium"
                  >
                    See More
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

export default Carousel

//   return (
//     <section className="relative py-12 lg:py-14 ">
//       <button type="button">
//         <HiChevronLeft
//           onClick={prevSlide}
//           className="glass bg-gradient-to-135 absolute top-40 left-5 -translate-y-1/2 text-5xl text-white hover:bg-pink-500 lg:top-1/2 lg:-left-5 lg:text-7xl"
//         />
//       </button>
//       <button type="button">
//         <HiChevronRight
//           onClick={nextSlide}
//           className="glass bg-gradient-to-135 absolute top-40 right-5 -translate-y-1/2 text-5xl text-white hover:bg-pink-500 lg:top-1/2 lg:-right-5 lg:text-7xl"
//         />
//       </button>
//       {slide_images.map((slider, index) => (
//         <div className="flex justify-center" key={index}>
//           {index === currentSlide && (
//             <>
//               <div className="h-60 w-80 rounded-[50px] bg-purple-600 p-5 lg:h-[60vh] lg:w-3/4">
//                 <div
//                   style={{ backgroundImage: `url(${slider.image})` }}
//                   className="h-full w-full rounded-[50px] bg-cover bg-center"
//                   title={`${slider.title} Slide`}
//                 ></div>
//               </div>
//             </>
//           )}
//         </div>
//       ))}
//       <div className="top-4 flex justify-center py-2">
//         {slide_images.map((slider, slideIndex) => (
//           <div
//             className="cursor-pointer text-3xl"
//             key={slideIndex}
//             onClick={() => goToSlide(slideIndex)}
//           >
//             <RxDotFilled />
//           </div>
//         ))}
//       </div>
//     </section>
//   )
// }

// export default Carousel
