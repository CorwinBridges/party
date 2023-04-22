import { useCallback, useRef } from "react"
import ReactCanvasConfetti from "react-canvas-confetti"
import { FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa"
import { Link } from "react-router-dom"

import { partylogonowords } from "../assets"
import { useStateContext } from "../context/StateContext"

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

const Footer = () => {
  // Canvas confetti
  const refAnimationInstance = useRef(null)

  // Get canvas instance
  const getInstance = useCallback((instance) => {
    refAnimationInstance.current = instance
  }, [])

  // Make confetti shot
  const makeShot = useCallback((particleRatio, opts, mouseX, mouseY) => {
    // Make sure the confetti has been initialized
    refAnimationInstance.current &&
      refAnimationInstance.current({
        ...opts,
        // Get mouse position
        origin: {
          x: mouseX / window.innerWidth,
          y: mouseY / window.innerHeight,
        },
        // Get particle count
        particleCount: Math.floor(200 * particleRatio),
      })
  }, [])

  // Fire confetti
  const fireConfetti = useCallback(
    (event) => {
      const mouseX = event.clientX
      const mouseY = event.clientY

      makeShot(
        0.25,
        {
          spread: 26,
          startVelocity: 55,
        },
        mouseX,
        mouseY
      )

      makeShot(
        0.2,
        {
          spread: 60,
        },
        mouseX,
        mouseY
      )

      makeShot(
        0.35,
        {
          spread: 100,
          decay: 0.91,
          scalar: 0.8,
        },
        mouseX,
        mouseY
      )

      makeShot(
        0.1,
        {
          spread: 120,
          startVelocity: 25,
          decay: 0.92,
          scalar: 1.2,
        },
        mouseX,
        mouseY
      )

      makeShot(
        0.1,
        {
          spread: 120,
          startVelocity: 45,
        },
        mouseX,
        mouseY
      )
    },
    [makeShot]
  )

  const { open, setOpen } = useStateContext()

  return (
    <footer className="relative z-10 bg-[#190039]/[.70] text-white">
      <ReactCanvasConfetti refConfetti={getInstance} style={canvasStyles} />
      <div className="section-container py-16">
        <div className="text-center lg:text-left">
          <div className="mb-8 flex justify-center">
            <Link
              to="/"
              onClick={(event) => {
                setOpen(false)
                fireConfetti(event)
              }}
            >
              <img className="h-40" src={partylogonowords} alt="Logo" />
            </Link>
          </div>
          <div className="grid gap-8 lg:grid-cols-3 lg:gap-12">
            <div className="items-center justify-center sm:items-start">
              <h3 className="mb-4 bg-gradient-to-tr from-red-400 via-pink-500 to-violet-500 bg-clip-text text-2xl font-bold uppercase text-transparent">
                About
              </h3>
              <p className="mx-auto mb-4 max-w-lg text-lg">
                Our founders started Party in a Box because we believe that
                celebrating life's milestones should be easy and fun. That's why
                we've created a product that makes party planning a breeze, so
                you can focus on enjoying the moment with your loved ones.
              </p>
              <div className="flex items-center justify-center space-x-4 text-3xl lg:justify-start">
                <a
                  href="https://twitter.com/suptking"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTwitter className="text-white hover:text-pink-500" />
                </a>
                <a
                  href="https://www.linkedin.com/company/dev-catalyst/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin className="text-white hover:text-pink-500" />
                </a>
                <a
                  href="https://www.instagram.com/madisonacademic/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram className="text-white hover:text-pink-500" />
                </a>
              </div>
            </div>
            <div className="text-lg">
              <h3 className="mb-4 bg-gradient-to-tr from-red-400 via-pink-500 to-violet-500 bg-clip-text text-2xl font-bold uppercase text-transparent">
                Contact
              </h3>
              <p className="mb-2">
                <span className="font-bold">Address:</span>{" "}
                <a
                  href="https://www.google.com/maps/search/?api=1&query=575+Lambuth+Blvd.,+Jackson,+TN,+USA"
                  className="underline hover:decoration-pink-500"
                  target="_blank"
                >
                  575 Lambuth Blvd., Jackson, TN, USA
                </a>
              </p>
              <p className="mb-2">
                <span className="font-bold">Phone:</span>{" "}
                <a
                  href="tel:7314206969"
                  className="underline hover:decoration-pink-500"
                >
                  (731) 420-6969
                </a>
              </p>
              <p className="mb-2">
                <span className="font-bold">Email:</span>{" "}
                <a
                  href="mailto:support@partyinabox.com"
                  className="underline hover:decoration-pink-500"
                >
                  support@partyinabox.com
                </a>{" "}
              </p>
              <p className="mb-2">
                <span className="font-bold">Hours:</span> Mon-Fri 6am-9pm
              </p>
            </div>
            <div className="text-lg">
              <h3 className="mb-4 bg-gradient-to-tr from-red-400 via-pink-500 to-violet-500 bg-clip-text text-2xl font-bold uppercase text-transparent">
                Policies
              </h3>
              <p className="mb-2">
                <Link
                  className="underline decoration-2 hover:decoration-pink-500"
                  to="/terms"
                  onClick={() => setOpen(false)}
                >
                  Terms and Conditions
                </Link>
              </p>
              <p className="mb-2">
                <Link
                  className="underline decoration-2 hover:decoration-pink-500"
                  to="/privacy"
                  onClick={() => setOpen(false)}
                >
                  Privacy Policy
                </Link>
              </p>
              <p className="mb-2">
                <Link
                  className="underline decoration-2 hover:decoration-pink-500"
                  to="/shipping"
                  onClick={() => setOpen(false)}
                >
                  Shipping Policy
                </Link>
              </p>
              <p className="mb-2">
                <Link
                  className="underline decoration-2 hover:decoration-pink-500"
                  to="/returns"
                  onClick={() => setOpen(false)}
                >
                  Return Policy
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#2A0A60] py-9 text-center text-xl">
        © BIG MACS 2023
      </div>
    </footer>
  )
}

export default Footer

//TODO: styling and responsivenss
//TODO: edit content and add social media links
