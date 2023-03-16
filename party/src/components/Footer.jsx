import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa"
import { Link } from "react-router-dom"

import { partylogo, partylogonowords } from "../assets"

const Footer = () => {
  return (
    <footer className="relative z-10 bg-[#190039]/[.70] text-white">
      <div className="section-container py-16">
        <div className="text-center lg:text-left">
          <Link to="/">
            <img
              className="mx-auto mb-8 h-40 cursor-pointer"
              src={partylogonowords}
              alt="Logo"
            />
          </Link>
          <div className="grid gap-8 lg:grid-cols-3 lg:gap-12">
            <div className="items-center justify-center sm:items-start">
              <h3 className="mb-4 bg-gradient-to-tr from-red-400 via-pink-500 to-violet-500 bg-clip-text text-2xl font-bold uppercase text-transparent">
                About
              </h3>
              <p className="mb-4 text-lg">
                Our founders started Party in a Box because we believe that
                celebrating life's milestones should be easy and fun. That's why
                we've created a product that makes party planning a breeze, so
                you can focus on enjoying the moment with your loved ones.
              </p>
              <div className="flex items-center justify-center space-x-4 text-3xl lg:justify-start">
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <FaFacebook className="text-white" />
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <FaTwitter className="text-white" />
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <FaInstagram className="text-white" />
                </a>
              </div>
            </div>
            <div className="text-lg">
              <h3 className="mb-4 bg-gradient-to-tr from-red-400 via-pink-500 to-violet-500 bg-clip-text text-2xl font-bold uppercase text-transparent">
                Contact
              </h3>
              <p className="mb-2">
                <span className="font-bold">Address:</span> 575 Lambuth Blvd.,
                Jackson, TN, USA
              </p>
              <p className="mb-2">
                <span className="font-bold">Phone:</span> (731) 420-6969
              </p>
              <p className="mb-2">
                <span className="font-bold">Email:</span> support@partyinabox.com
              </p>
              <p className="mb-2">
                <span className="font-bold">Hours:</span> Mon-Fri 6am-9pm
              </p>
            </div>
            <div className="text-lg">
              <h3 className="mb-4 bg-gradient-to-tr from-red-400 via-pink-500 to-violet-500 bg-clip-text text-2xl font-bold uppercase text-transparent">
                Other Info
              </h3>
              <p className="mb-2">
                <Link className="hover:decoration-pink-500 decoration-2 underline" to="/Terms">
                  Terms and Conditions
                </Link>
              </p>
              <p className="mb-2">
                <Link className="hover:decoration-pink-500 decoration-2 underline" to="/Privacy">
                  Privacy Policy
                </Link>
              </p>
              <p className="mb-2">
                <Link className="hover:decoration-pink-500 decoration-2 underline" to="/Shipping">
                  Shipping Policy
                </Link>
              </p>
              <p className="mb-2">
                <Link className="hover:decoration-pink-500 decoration-2 underline" to="/Returns">
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
