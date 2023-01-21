import {gift, gift3d, gifthand, partyboy} from '../../assets'
import {Link} from 'react-router-dom'

const Hero = () => {
  return (
    <div className=' text-white mb-40'>
      <div className='flex'>
        <div className='w-1/2'>
          <div className='text-8xl font-black'>THE PERFECT PARTY ALL IN ONE BOX</div>
          <div className='text-4xl font-normal mt-3 w-4/5'>Transform any space into a
            party paradise with Party in a Box, simply open the box and watch as it sets up
            an instant celebration in seconds!</div>
        </div>
        <div className="w-1/2 flex justify-center">
          <img src={gift3d} alt="Gift" className='max-w-full max-h-[35rem]'/>
        </div>
      </div>
      <button
        type="button"
        className="group font-medium rounded-full border-4 hover:bg-white border-white focus:ring-8 focus:outline-none focus:ring-gray-500 text-5xl px-10 py-5 text-center mr-2 mb-2">
        <span
          className='bg-gradient-to-b from-white to-white bg-white group-hover:from-[#5400BF] group-hover:to-[#1D0043] bg-clip-text text-transparent'>
          <Link to="/Shop">SHOP OUR PRODUCTS</Link>
        </span>
      </button>
    </div>
  )
}

export default Hero