import {gift, gift3d, gifthand, partyboy, gift3d2} from '../../assets'
import {useNavigate} from 'react-router-dom'
import {HiChevronRight} from "react-icons/hi2";

const Hero = () => {
  const navigate = useNavigate();

  const shopPage = () => {
    navigate('/Shop')
  }

  return (
    <div className=' text-white mb-40 mt-16'>
      <div className='flex'>
        <div className='w-1/2 relative z-10'>
          <div className='text-8xl font-black'>THE PERFECT PARTY ALL IN ONE BOX</div>
          <div className='text-4xl font-normal mt-3 w-4/5'>Transform any space into a
            party paradise with Party in a Box, Simply open the box and watch as it sets up
            an instant celebration in seconds!</div>
          <button
            type="button"
            className="group mt-10 font-medium rounded-full border-4 hover:bg-white border-white focus:ring-8 focus:outline-none focus:ring-gray-500 text-5xl px-10 py-5 text-center mr-2 mb-2 hover:border-gray-900"
            onClick={shopPage}> {/* figure out this button style */}
            <span
              className='bg-gradient-to-b from-white to-white bg-white group-hover:from-[#5400BF] group-hover:to-[#1D0043] bg-clip-text text-transparent'>
              <span className=''>
                SHOP OUR PRODUCTS
              </span>
              {/* <HiChevronRight className='ml-3'/> arrow or no??? */}
            </span>
          </button>
        </div>
        <div className="w-1/2 relative z-10">
          <div className='mx-20'>
            <img src={gift3d} alt="Gift"/>
          </div>
        </div>

        <div
          className="absolute z-0 top-0 left-0 w-1/2 h-1/2 rounded-full bg-[#D3ACF1] opacity-[0.87] blur-[269px]"/>
        <div
          className="absolute z-0 top-0 right-0 w-1/2 h-1/2 rounded-full bg-[#F97FC8] opacity-[0.94] blur-[269px]"/>
      </div>
    </div>
  )
}

export default Hero

// best icons, search bar, navbar