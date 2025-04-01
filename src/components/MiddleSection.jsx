import React from 'react'
import { Link } from 'react-router-dom'
React

const MiddleSection = () => {
  return (
    <div className='px-4 lg:px-24 my-20 flex flex-col md:flex-row justify-between items-center gap-10'>
      <div className='md:w-1/2'>
         <img className='rounded md:w-10/12 h-85' src="https://www.nypl.org/scout/_next/image?url=https%3A%2F%2Fdrupal.nypl.org%2Fsites-drupal%2Fdefault%2Ffiles%2Fstyles%2F2_1_960%2Fpublic%2F2023-06%2Fnew%2520arrivals%2520-%2520books%2520music%2520movies.jpeg%3Fh%3D16a6ccf5%26itok%3DDDe_PMR7&w=1920&q=90" alt="" />
      </div>
      <div className='md:w-1/2 space-y-6'>
         <h2 className='text-5xl font-bold my-5 md:w-3/4 leading-snug'>Find your favourite <span className='text-blue-700'>Books!</span></h2>
         <p className='mb-8 text-large md:w-5/6'><span className='text-blue-600 font-bold'>Book Bound</span>  more than just a bookstore; we are a community hub where participate in author events, book lovers can gather, share their passion for reading, and participate in author events and workshops.</p>
         <div className='flex flex-col sm:flex-row justify-between gap-6 md:w-3/4 my-8'>
            <div>
                <h3 className='text-3xl text-blue-700 font-bold'>800+</h3>
                <p className='text-base'>Book Listing</p>
            </div>
            <div>
                <h3 className='text-3xl text-blue-700 font-bold'>555+</h3>
                <p className='text-base'>Registered Users</p>
            </div>
            <div>
                <h3 className='text-3xl text-blue-700 font-bold'>1200+</h3>
                <p className='text-base'>Downloads</p>
            </div>
         </div>

         <Link className='mt-4 block' to={'/shop'}><button className='bg-blue-700 text-white font-semibold px-5 py-2 rounded hover:bg-black transition-all duration-300'>Explore more</button></Link>
      </div>
    </div>
  )
}

export default MiddleSection
