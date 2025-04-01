import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';
React

const Review = () => {
  return (
    <div className='my-10 px-4 lg:px-24'>
       <h2 className='text-5xl font-bold text-center mb-10 leading-snug'>Customer Reviews</h2>
       <div>
       <Swiper
        slidesPerView={1}
        spaceBetween={20}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide  className='shadow-2xl bg-gray-50 border-black py-4 px-3 md:m-5 rounded-lg'>
            <div className='space-y-1'>
            <img className="w-12 h-12 rounded-full" src="https://www.shutterstock.com/image-photo/head-shot-portrait-close-smiling-600nw-1714666150.jpg" alt="Rounded avatar"></img>
            <h5 className='text-lg font-medium'>Brennan Johnson</h5>
                <div className='text-amber-500'>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                </div>
                {/* review */}
                <div className='mt-4'>
                    <p className='mb-5 text-justify'>I just spent the most delightful afternoon browsing at Book Bound! The website is incredibly helpful and knowledgeable, recommending some fantastic books I would not have otherwise discovered. </p>
                </div>
            </div>
        </SwiperSlide>

        <SwiperSlide className='shadow-2xl bg-gray-50 py-4 px-3 md:m-5 rounded-lg'>
            <div className='space-y-1'>
            <img className="w-12 h-12 rounded-full" src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"></img>
            <h5 className='text-lg font-medium'>Joyce Lopez</h5>
                <div className='text-amber-500'>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                </div>
                {/* review */}
                <div className='mt-4'>
                    <p className='mb-5 text-justify'>I absolutely love this bookstore! The selection is amazing, the prices are competitive, and the customer service is top-notch. I have ordered multiple times and always received my books quickly and in perfect condition.</p>
                </div>
            </div>
        </SwiperSlide>

        <SwiperSlide className='shadow-2xl bg-gray-50 py-4 px-3 md:m-5 rounded-lg'>
            <div className='space-y-1'>
            <img className="w-12 h-12 rounded-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBlYJfFRvdZG0LNuiRs6l1PNx1bIfZkqZIsQ&s"></img>
            <h5 className='text-lg font-medium'>Jamie Vardy</h5>
                <div className='text-amber-500'>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                </div>
                {/* review */}
                <div className='mt-4'>
                    <p className='mb-5 text-justify'>Book Bound has a great selection of books, and I appreciate the wide range of genres. However, the shipping costs are quite high, and the packaging could be better. Overall, I am satisfied with my purchase.</p>
                </div>
            </div>
        </SwiperSlide>

        <SwiperSlide className='shadow-2xl bg-gray-50 py-4 px-3 md:m-5 rounded-lg'>
            <div className='space-y-1'>
            <img className="w-12 h-12 rounded-full" src="https://media.istockphoto.com/id/1320811419/photo/head-shot-portrait-of-confident-successful-smiling-indian-businesswoman.jpg?s=612x612&w=0&k=20&c=bCUTB8vd8MnzZFIq-x645-SmLNk2sQzOvOvWCPGDfZ4="></img>
            <h5 className='text-lg font-medium'>Michelle Morgan</h5>
                <div className='text-amber-500'>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                </div>
                {/* review */}
                <div className='mt-4'>
                    <p className='mb-5 text-justify'>Book Bound is a great resource for finding rare and out-of-print books. They have a good selection of first editions and signed copies.I would recommend this bookstore to anyone interested in rare books.</p>
                </div>
            </div>
        </SwiperSlide>
      </Swiper>
       </div>
    </div>
  )
}

export default Review
