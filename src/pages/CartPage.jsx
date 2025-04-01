import React from "react";
import { useDispatch, useSelector } from "react-redux";
React;
import { Link } from "react-router-dom";
import { clearCart, removeFromCart } from "../redux/features/cart/cartSlice";
import Swal from "sweetalert2";

const CartPage = () => {

   const cartItems = useSelector((state) => state.cart.cartItems);
   const dispatch = useDispatch()

  //  const totalPrice = cartItems.reduce((acc , item) => acc + parseFloat(item.price) , 0)

  const totalPrice = cartItems.reduce((acc, item) => acc + (parseFloat(item?.price) || 0), 0);


   const handleRemoveFromCart = (product) =>{
    dispatch(removeFromCart(product))
   }

   const handleClearCart = () => {
    dispatch(clearCart())
   }

   const checkOut = () =>{
    Swal.fire({
      title: `Are you sure you want to place this order for $ ${totalPrice}?`,
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Place order!"
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Order placed",
          text: "Your order is placed successfully and the product will reach to you soon.",
          icon: "success"
        });
        handleClearCart()
      }
    });
    // handleClearCart()
   }
   
  return (
    <>
      <div className="flex mt-19 h-full flex-col p-10 bg-white shadow-2xl">
        <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
          <div className="flex items-start justify-between">
            <h1 className="text-lg font-bold text-gray-900">
              Shopping cart
            </h1>
            <div className="ml-3 flex h-7 items-center ">
              <button
                type="button"
                onClick={handleClearCart}
                className="relative -m-2 py-1 px-2 bg-red-600 text-white font-bold rounded-md hover:bg-secondary transition-all duration-200"
              >
                <span className="">Clear Cart</span>
              </button>
            </div>
          </div>

          <div className="mt-8">
            <div className="flow-root">
               
               {
                cartItems.length > 0 ? (<ul role="list" className="-my-6 divide-y divide-gray-200">

                  {
                    cartItems.map((product) => (
                      <li key={product?._id} className="flex py-6">
                      <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                        <img
                          alt=""
                          src={product?.imgURL}
                          className="h-full w-full "
                        />
                      </div>
    
                      <div className="ml-4 flex flex-1 flex-col">
                        <div>
                          <div className="flex flex-wrap justify-between text-base font-medium text-gray-900">
                            <h3>
                              <Link to={`/book/${product?._id}`}>{product?.title}</Link>
                            </h3>
                            <p className="sm:ml-4 font-bold">${product?.price}</p>
                          </div>
                          <p className="mt-1 text-sm text-gray-500 capitalize">
                            <strong>Category: </strong>{product?.category}
                          </p>
                        </div>
                        <div className="flex flex-1 flex-wrap items-end justify-between space-y-2 text-sm">
                          <p className="text-gray-500">
                            <strong>Qty:</strong> 1
                          </p>
    
                          <div className="flex">
                            <button
                              onClick={()=>handleRemoveFromCart(product)}
                              type="button"
                              className="font-medium text-indigo-600 hover:text-indigo-500"
                            >
                              Remove
                            </button>
                          </div>
                        </div>
                      </div>
                    </li>
                    ))
                  }

                 
  
                </ul>) : (<p className="font-bold text-red-600">No items available in the Cart</p>)
               }

              
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
          <div className="flex justify-between text-base font-bold text-gray-900">
            <p>Subtotal</p>
            <p>${totalPrice ? totalPrice : 0}</p>
          </div>
          <p className="mt-0.5 text-sm text-gray-500">
            Shipping and taxes calculated at checkout.
          </p>
          <div className="mt-6">
            <Link
              onClick={checkOut}
              className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
            >
              Checkout
            </Link>
          </div>
          <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
            <Link to="/shop">
              or
              <button
                type="button"
                className="font-medium text-indigo-600 hover:text-indigo-500 ml-1"
              >
                Continue Shopping
                <span aria-hidden="true"> &rarr;</span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartPage;
