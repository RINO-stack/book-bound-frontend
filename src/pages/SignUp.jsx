import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../contexts/AuthProvider'
import Swal from 'sweetalert2'
React

const SignUp = () => {

    const {createUser , loginWithGoogle} = useContext(AuthContext);
    const [error , setError] = useState('error');

    const navigate = useNavigate()

    const handleSignUp = (event) =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email , password).then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            const Toast = Swal.mixin({
                          toast: true,
                          position: "top-end",
                          showConfirmButton: false,
                          timer: 3000,
                          timerProgressBar: true,
                          didOpen: (toast) => {
                            toast.onmouseenter = Swal.stopTimer;
                            toast.onmouseleave = Swal.resumeTimer;
                          }
                        });
                        Toast.fire({
                          icon: "success",
                          title: "Signed Up successfully.Please login"
                        });
            navigate('/login')
            // ...
          })
          .catch((error) => {
            const Toast = Swal.mixin({
                          toast: true,
                          position: "top-end",
                          showConfirmButton: false,
                          timer: 2000,
                          timerProgressBar: true,
                          didOpen: (toast) => {
                            toast.onmouseenter = Swal.stopTimer;
                            toast.onmouseleave = Swal.resumeTimer;
                          }
                        });
                        Toast.fire({
                          icon: "error",
                          title: "Already a User.Please login !"
                        });
            const errorCode = error.code;
            const errorMessage = error.message;
            setError(errorMessage , errorCode )
          });
        
    }

     
    // signup using google
    const handleRegister = () =>{
       loginWithGoogle().then((result) => {
        const user = result.user;
        alert('Signed Up Successfully')
        navigate('/')
      }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setError(errorMessage , errorCode)
      });
    }


  return (
    <div className='min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12'>
      <div className='relative py-3 sm:max-w-xl sm:mx-auto'>

<div className="mx-auto max-w-screen-xl w-100 px-4 py-16 sm:px-6 lg:px-8">
  <div className="mx-auto max-w-lg">
    <h1 className="text-center text-2xl font-bold text-indigo-600 sm:text-3xl"><i className="fa-solid fa-book-open"></i> Book Bound</h1>

    <form onSubmit={handleSignUp} action="#" className="mt-6 mb-0 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8">
      <p className="text-center text-lg font-bold text-blue-700">Sign Up</p>

      <div>
        <label htmlFor="email" className="sr-only">Email</label>

        <div className="relative">
          <input
            type="email"
            className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-xs"
            placeholder="Enter email"
            name="email"
          />

        </div>
      </div>

      <div>
        <label htmlFor="password" className="sr-only">Password</label>

        <div className="relative">
          <input
            type="password"
            className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-xs"
            placeholder="Enter password"
            name="password"
          />

        </div>
      </div>

      <button
        type="submit"
        className="block w-full rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white"
      >
        Sign Up
      </button>

      <p className="text-center text-sm text-gray-500">
        Already a User ? <Link className='text-blue-800 font-bold' to={'/login'}>Sign In</Link>
      </p>

      <hr className='text-gray-300' />

      <div className='flex w-full items-center flex-col mt-5 gap-3'>
        <button onClick={handleRegister} className='block border border-blue-500 px-5 py-2 rounded-2xl hover:border-blue-800'><img src="https://cdn4.iconfinder.com/data/icons/logos-brands-7/512/google_logo-google_icongoogle-512.png" alt="" className='w-6 h-6 inline-block' /> Sign Up with Google</button>
      </div>

    </form>
  </div>
</div>
      </div>
    </div>
  )
}

export default SignUp
