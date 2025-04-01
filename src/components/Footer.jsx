import React from 'react'
import { Link } from 'react-router-dom'
Link
React

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-8 py-4">
        

        {/* Footer Links Section */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-16 mt-10 text-center md:text-left">

        <div className="flex flex-col items-center text-center scroll-px-0.5">
          {/* Logo */}
          <Link to={'/'} className='text-3xl font-bold text-blue-700 flex items-center gap-2'><i className="fa-solid fa-book-open"></i> Book Bound</Link>
          
          {/* Description */}
          <p className="mt-2 text-blue-500 text-sm max-w-md">
          Your gateway to a world of books, knowledge, and imagination.
          </p>

          {/* Social Media Icons */}
          <div className="mt-6 flex space-x-5">
            <a href="#" className="text-blue-500 hover:text-gray-700">
              <i className="fab fa-facebook text-lg"></i>
            </a>
            <a href="#" className="text-blue-500 hover:text-gray-700">
              <i className="fab fa-instagram text-lg"></i>
            </a>
            <a href="#" className="text-blue-500 hover:text-gray-700">
              <i className="fab fa-x-twitter text-lg"></i>
            </a>
            <a href="#" className="text-blue-500 hover:text-gray-700">
              <i className="fab fa-github text-lg"></i>
            </a>
            <a href="#" className="text-blue-500 hover:text-gray-700">
              <i className="fab fa-youtube text-lg"></i>
            </a>
          </div>
        </div>

          {/* Solutions */}
          <div className='mt-6 my-4'>
            <h3 className="text-gray-900 font-semibold">Solutions</h3>
            <ul className="mt-4 space-y-2 text-gray-500 text-sm">
              <li className=' hover:text-blue-500'><a href="#">Marketing</a></li>
              <li className=' hover:text-blue-500'><a href="#">Analytics</a></li>
              <li className=' hover:text-blue-500'><a href="#">Automation</a></li>
              <li className=' hover:text-blue-500'><a href="#">Commerce</a></li>
            </ul>
          </div>

          {/* Support */}
          <div className='mt-6'>
            <h3 className="text-gray-900 font-semibold">Support</h3>
            <ul className="mt-4 space-y-2 text-gray-500 text-sm">
              <li className=' hover:text-blue-500'><a href="#">Submit ticket</a></li>
              <li className=' hover:text-blue-500'><a href="#">Documentation</a></li>
              <li className=' hover:text-blue-500'><a href="#">Guides</a></li>
              <li className=' hover:text-blue-500'><a href="#">Insights</a></li>
            </ul>
          </div>

          {/* Company */}
          <div className='mt-6'>
            <h3 className="text-gray-900 font-semibold">Company</h3>
            <ul className="mt-4 space-y-2 text-gray-500 text-sm">
              <li className=' hover:text-blue-500'><a href="/">Home</a></li>
              <li className=' hover:text-blue-500'><a href="/about">About</a></li>
              <li className=' hover:text-blue-500'><a href="/shop">Shop</a></li>
              <li className=' hover:text-blue-500'><a href="/admin">Admin</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div className='mt-6'>
            <h3 className="text-gray-900 font-semibold">Legal</h3>
            <ul className="mt-4 space-y-2 text-gray-500 text-sm">
              <li className=' hover:text-blue-500'><a href="#">Terms of service</a></li>
              <li className=' hover:text-blue-500'><a href="#">Privacy policy</a></li>
              <li className=' hover:text-blue-500'><a href="#">License</a></li>
              <li className=' hover:text-blue-500'><a href="#">Security</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="border-t border-gray-200 py-6 text-center text-black-500 text-sm">
        © 2024 Your Company, Inc. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
