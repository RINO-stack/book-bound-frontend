import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import serverURL from "../serverURL";
React;

const AdminLogin = () => {

    const [formData, setFormData] = useState({ username: "", password: "" });

    const navigate = useNavigate()

  // Handling input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handling form submission
  const handleAdminLogin = async (e) => {
    e.preventDefault();
    try {
        const response = await axios.post(`${serverURL}/admin`,formData,{
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const auth = response.data
        console.log(auth);
        if (auth.token) {
           localStorage.setItem('token',auth.token)
           setTimeout(()=>{
             localStorage.removeItem('token')
             alert('token has been expired, Please login again')
             navigate('/')
           },3600 * 1000)
        }else if(!auth.token){
           navigate('/')
        }

        alert('Admin Login Successful')
        navigate('/admin/dashboard')
        
      } catch (error) {
        alert('Invalid Credentials')
        console.log(error);
      }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="mx-auto max-w-screen-xl w-100 px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-lg">
            <h1 className="text-center text-2xl font-bold text-indigo-600 sm:text-3xl">
              <i className="fa-solid fa-book-open"></i> Book Bound
            </h1>

            <form
              onSubmit={handleAdminLogin}
              action="#"
              className="mt-6 mb-0 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8"
            >
              <p className="text-center text-lg font-bold text-blue-700">
                Admin Dashboard LogIn
              </p>

              <div className="mt-4">
                <label htmlFor="username" className="sr-only">
                  username
                </label>

                <div className="relative">
                  <input
                    type="text"
                    value={formData.username}
                    onChange={handleChange}
                    className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-xs"
                    placeholder="Enter Username"
                    name="username"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>

                <div className="relative">
                  <input
                    type="password"
                    value={formData.password}
                    onChange={handleChange}
                    className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-xs"
                    placeholder="Enter password"
                    name="password"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="mt-8 block w-full rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white"
              >
                Log In
              </button>

              <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
            <Link to="/">
              or
              <button
                type="button"
                className="font-medium text-indigo-600 hover:text-indigo-500 ml-1"
              >
                Back Home
                <span aria-hidden="true"> &rarr;</span>
              </button>
            </Link>
          </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
