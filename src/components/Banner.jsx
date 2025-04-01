import React, { useContext } from 'react'
import BannerCard from './BannerCard'
import { Link } from 'react-router-dom'
import { AuthContext } from '../contexts/AuthProvider'
React

const Banner = () => {

  const {user} = useContext(AuthContext)

  return (
    <div className='px-4 lg:px-26 bg-white flex items-center'>
      <div className="flex w-full flex-col md:flex-row justify-between items-center py-40">
        <div className='space-y-8 md:w-1/2 h-full'>
            <h2 className="text-5xl font-bold  text-black">Buy <span className='text-blue-700' style={{fontSize:'9rem'}}>Books</span> <span className='text-black'>for the Best Prices</span></h2>
            <p className='md:w-4/5 text-justify font-medium'>Whether you are seeking the latest thriller, a captivating novel, a thought-provoking biography, or a charming children book, <span className='text-blue-600 font-bold'>Book Bound</span> shelves hold a treasure trove of stories waiting to be discovered. </p>
            <div>
                {
                  user ? <Link to={'/shop'} className='bg-blue-700 rounded-2xl px-6 py-3 text-white font-medium hover:bg-black transition-all ease-in duration-200'>Explore Books</Link> : <Link to={'/sign-up'} className='bg-blue-700 rounded-2xl px-6 py-3 text-white font-medium hover:bg-black transition-all ease-in duration-200'>Explore More</Link>
                }
            </div>
        </div>
        <div style={{marginRight:'90px'}}>
          <BannerCard/>
        </div>
      </div>
    </div>
  )
}

export default Banner
