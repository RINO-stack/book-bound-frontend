import React from 'react'
import { useLoaderData } from 'react-router-dom'
React

const SingleBook = () => {

  const { title , imgURL , price , description , authName , category} = useLoaderData()
  
  return (
    <div className="mt-20 flex items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="bg-white shadow-lg rounded-2xl p-6 flex max-w-4xl w-full">
        {/* Left Side - Image, Price, and Button */}
        <div className="w-1/3 flex flex-col items-center">
          <img
            src={imgURL}
            alt="Book Cover"
            className="w-full h-auto rounded-lg shadow-md"
          />
          <h1 style={{fontSize:'25px'}} className=" mt-5 font-bold tracking-tight text-black"><span className='line-through me-1'>$20</span> ${price}</h1>
        </div>

        {/* Right Side - Book Details */}
        <div className="w-2/3 pl-6">
          <h2 className="text-5xl mt-3 font-bold text-gray-900">{title}</h2>
          <p className="text-3xl mt-3 font-bold text-black"><span className='text-blue-600'>Author :</span> {authName}</p>
          <p className="text-3xl mt-3 font-bold text-black"><span className='text-blue-600'>Category :</span> {category}</p>
          <p className="text-3xl mt-3 font-bold text-black"><span className='text-blue-600'>Rating :</span> 
          <i className="fa-solid fa-star ms-2 text-yellow-400"></i>
          <i className="fa-solid fa-star text-yellow-400"></i>
          <i className="fa-solid fa-star text-yellow-400"></i>
          <i className="fa-solid fa-star text-yellow-400"></i>
          </p>
          <h2 className="text-3xl mt-5 font-bold text-blue-600">Description :</h2>
          <p className="text-black text-2xl leading-snug mt-5">
            {description}
          </p>
          <button className="mt-6 bg-blue-600 w-full text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition font-bold">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  )
}

export default SingleBook
