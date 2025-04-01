import React, { useContext } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/features/cart/cartSlice';
import { AuthContext } from '../contexts/AuthProvider';
React

const BookCard = ({headline , books}) => {

  const dispatch = useDispatch();

   const {user} = useContext(AuthContext)

  const handleAddToCart = (product) =>{
    dispatch(addToCart(product))
  }

  return (
    <div className="my-12 px-4 lg:px-24">
      <h2 className='text-5xl font-bold text-center text-black my-7'>{headline}</h2>
      {/* cards */}
       <div className='mt-12'>
       <Swiper
        slidesPerView={4}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
       {
        books.map(book=>  <SwiperSlide key={book._id} className='border border-black rounded px-4 py-2'>
    
             <div className='relative'>
             <Link to = {`/book/${book._id}`}>
                <img className='h-75 w-59' src={book.imgURL} alt="" />
               </Link>

               {
                user ? <div className='absolute top-3 right-3 bg-blue-700 hover:bg-black p-2 rounded'>
                <i onClick={()=>handleAddToCart(book)} className="w-4 h-4 text-white fa-solid fa-cart-shopping"></i>
                </div>: ''
               }
                
              </div>  
              <div>
                <div>
                <h3 className='font-bold'>{book.title}</h3>  
                <p>{book.authName}</p>
                </div>
                <div>
                  <p>$ {book.price}</p>
                </div>
              </div>       
        </SwiperSlide>)
       }
      
      </Swiper>
       </div>
    </div>
  )
}

export default BookCard
