import React from 'react'
import { Link } from 'react-router-dom'
React


const PromoBanner = () => {
  return (
    <div className='mt-16 py-12 bg-black px-4 lg:px-24'>
      <div className='flex flex-col md:flex-row justify-between items-center gap-12'>
        <div className='md:w-1/2'>
            <h2 className='text-4xl text-white font-bold mb-6 leading-snug'>2023 National Book Awards for Fiction Shortlist</h2>
            <Link className='mt-12 block' to={'/shop'}><button className='bg-blue-700 text-white font-semibold px-5 py-2 rounded hover:bg-black transition-all duration-300'>Get Promo Code</button></Link>
        </div>

        <div>
            <img className='h-42 rounded w-65' src="https://static.vecteezy.com/system/resources/thumbnails/044/280/984/small_2x/stack-of-books-on-a-brown-background-concept-for-world-book-day-photo.jpg" alt="" />
        </div>
      </div>
    </div>
  )
}

export default PromoBanner
