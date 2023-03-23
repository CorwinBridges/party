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
      <div className="absolute z-0 -top-[400px] lg:w-1/4 w-1/2 lg:-left-20 -left-10  ">
        <img src={x_shape} alt="x" className="relative top-80 blur" />
      </div>
      {/* {blur} */}
      <div className="absolute top-0 -right-10 z-0 h-[50vh] w-1/2 rounded-full bg-[#7CFE7A] opacity-[0.94] blur-[110px]" />
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
        slidesPerView={2}
        pagination={{ clickable: true }}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        breakpoints={{
          100: {
            spaceBetween: 275,
            slidesPerView: 1,
          },
          // xs
          480: {
            spaceBetween: 275,
          },
          // sm
          640: {
            spaceBetween: 275,
            slidesPerView: 1,
          },
          // md
          768: {
            spaceBetween: 275,
          },
          // lg
          1024: {
            spaceBetween: 275,
            slidesPerView: 2,
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
        <HiChevronLeft className="swiper-button-prev glass absolute top-1/2 left-[16%] z-10 -translate-y-1/2 text-5xl text-white shadow-transparent hover:bg-pink-500 lg:text-7xl" />
        <HiChevronRight className="swiper-button-next glass absolute top-1/2 right-[16%] z-10 -translate-y-1/2 text-5xl text-white shadow-transparent hover:bg-pink-500 lg:right-[23%] lg:text-7xl" />

        {slide_images.map((slide, index) => (
          <SwiperSlide key={index} className="lg:top-20">
            <div className=" w-full px-4 lg:px-0">
              <div className="mb-10 h-[50vh] rounded-[50px] bg-purple-600 p-6 lg:h-[60vh]">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="h-full w-full  rounded-[50px] object-cover"
                />
              </div>
              <div className="glass relative -left-28 bottom-40  z-10 hidden aspect-square w-1/3 items-center justify-center rounded-[50px]  text-center text-white lg:flex">
                <h1 className=" mx-auto text-3xl font-bold">{slide.title}</h1>
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
