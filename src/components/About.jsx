import React from 'react'
import { Link } from 'react-router-dom'
React

const About = () => {
  return (
    <div className='mt-10 px-4 lg:px-10'>
        <div className="bg-white min-h-screen p-8 flex justify-center items-center">
      <div className="bg-white p-10 w-full">
        <h1 className="text-4xl font-extrabold text-center text-gray-900 mb-6">
          About Us
        </h1>
        <h1 className="text-4xl font-extrabold text-center text-blue-700 mb-6">
        <i className="fa-solid fa-book-open"></i> Book Bound
        </h1>
        <p className="text-lg text-gray-700 text-center mb-8 italic">
          Your gateway to a world of books, knowledge, and imagination.
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-3 border-b-2 border-blue-500 pb-2">Who We Are</h2>
          <p className="text-gray-700 leading-relaxed">
            Book Bound was founded with a simple mission: to make books easily accessible to everyone. 
            Whether you are a casual reader, an avid collector, or a student searching for academic resources, 
            our carefully curated inventory features a vast selection of genres, from timeless classics 
            to the latest bestsellers, rare finds, and educational materials.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-3 border-b-2 border-blue-500 pb-2">What We Offer</h2>
          <ul className="list-none space-y-4">
            <li className="flex items-center gap-3">
              <span className="text-blue-600 text-xl">📚</span>
              <p className="text-gray-700 font-medium"> <strong>Vast Collection:</strong> Fiction, non-fiction, self-help, sci-fi, academic books & rare editions.</p>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-blue-600 text-xl">📦</span>
              <p className="text-gray-700 font-medium"> <strong>Easy Ordering & Fast Delivery:</strong> Get your books delivered hassle-free.</p>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-blue-600 text-xl">💡</span>
              <p className="text-gray-700 font-medium"> <strong>Personalized Recommendations:</strong> Discover books tailored to your reading preferences.</p>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-blue-600 text-xl">🌍</span>
              <p className="text-gray-700 font-medium"> <strong>Sustainable & Affordable:</strong> Choose from eco-friendly options like second-hand & digital books.</p>
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-3 border-b-2 border-blue-500 pb-2">Our Mission</h2>
          <p className="text-gray-700 leading-relaxed">
            We strive to build a global community of readers by providing a user-friendly platform where 
            book lovers can discover, explore, and share their passion for reading.
          </p>
        </section>

        <section className="text-center">
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">Join Our Community</h2>
          <p className="text-gray-700 mb-6">
            Sign up for exclusive book recommendations, special discounts, and literary discussions.
          </p>
          <Link to={'/shop'} className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-transform duration-300">
            Explore Books
          </Link>
        </section>
      </div>
    </div>
    </div>
  )
}

export default About
