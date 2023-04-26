import { useRef, useState, useEffect } from "react"
import ReactCanvasConfetti from "react-canvas-confetti"
import { HiOutlineArrowRight } from "react-icons/hi"
import { Link } from "react-router-dom"

// Canvas styling
const canvasStyles = {
  position: "fixed",
  pointerEvents: "none",
  width: "100%",
  height: "100%",
  top: 0,
  left: 0,
  zIndex: 100,
}

function randomInRange(min, max) {
  return Math.random() * (max - min) + min
}
const Thanks = () => {
  const [isAnimationEnabled, setIsAnimationEnabled] = useState(false)
  const animationInstanceRef = useRef(null)
  const intervalIdRef = useRef(null)
  const timerIdRef = useRef(null)

  const getAnimationSettings = (originXA, originXB) => {
    return {
      startVelocity: 30,
      spread: 360,
      ticks: 60,
      zIndex: 0,
      particleCount: 150,
      origin: {
        x: randomInRange(originXA, originXB),
        y: Math.random() - 0.2,
      },
    }
  }

  const nextTickAnimation = () => {
    animationInstanceRef.current &&
      animationInstanceRef.current(getAnimationSettings(0.1, 0.3))
    animationInstanceRef.current &&
      animationInstanceRef.current(getAnimationSettings(0.7, 0.9))
  }

  const startAnimation = () => {
    if (!isAnimationEnabled) {
      setIsAnimationEnabled(true)
      intervalIdRef.current = setInterval(nextTickAnimation, 400)
      timerIdRef.current = setTimeout(() => {
        pauseAnimation()
      }, 3000)
    }
  }

  const pauseAnimation = () => {
    setIsAnimationEnabled(false)
    clearInterval(intervalIdRef.current)
    clearTimeout(timerIdRef.current)
  }

  const getInstance = (instance) => {
    animationInstanceRef.current = instance
  }

  useEffect(() => {
    startAnimation()

    return () => {
      pauseAnimation()
    }
  }, [])

  return (
    <section className="section-container my-16 text-white">
      {/* Right-side background circle with gradient */}
      <div className="absolute -right-[6%]">
        <div className="relative -bottom-[500px] z-0 aspect-square h-[300px] animate-[bounce_.8s_linear_infinite] rounded-[50%] bg-gradient-to-b from-[#C194EA] to-[#EE77C7]/[0.94] opacity-[0.60] blur-[3px] md:-bottom-[150px] lg:h-[400px]" />
      </div>

      <div className="absolute -left-[6%]">
        <div className="relative -top-[250px] z-0 aspect-square h-[300px] animate-[bounce_.8s_linear_infinite] rounded-[50%] bg-gradient-to-b from-[#C194EA] to-[#EE77C7]/[0.94] opacity-[0.60] blur-[3px] lg:h-[400px]" />
      </div>
      {/* Right blur circle */}
      <div className="absolute -right-8 top-0 z-0 h-[50vh] w-1/2 animate-reverse-spin rounded-full bg-[#527CF4] opacity-[0.54] blur-[130px]" />

      {/* Right blur circle */}
      <div className="absolute -left-8 top-0 z-0 h-[50vh] w-1/2 animate-[spin_1.05s_linear_infinite] rounded-full bg-[#F97FC8] opacity-[0.54] blur-[130px]" />
      <ReactCanvasConfetti refConfetti={getInstance} style={canvasStyles} />
      <div className="relative z-10">
        <h1 className="mb-8 text-center text-7xl font-bold">
          Thanks for ordering!
        </h1>
        <p className="z-10 mx-auto max-w-3xl text-center text-xl">
          Your order has been processed and is on its way to you. We hope you
          enjoy your purchase and we look forward to your next visit. Thank you
          for choosing Party in a Box, and we hope to see you again soon. Your
          party will be startying very soon!
        </p>
        <div className="flex justify-center">
          <button
            className="glass mt-8 px-10 py-5 text-center text-xl font-medium shadow-pink-500/30 duration-200 ease-in-out hover:scale-110 lg:text-3xl xl:text-4xl"
            onClick={startAnimation}
          >
            Celebrate!
          </button>
        </div>
        <Link to="/shop">
          <div className="mt-16 flex items-center justify-end text-pink-500">
            <span className="mr-1">Continue Shopping</span>{" "}
            <HiOutlineArrowRight className="-mb-0.5" />
          </div>
        </Link>
      </div>
    </section>
  )
}

export default Thanks
