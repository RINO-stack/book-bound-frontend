import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider";
import { useSelector } from "react-redux";
import Swal from "sweetalert2";
React;

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [sticky, setSticky] = useState(false);

  const cartItems = useSelector((state) => state.cart.cartItems);

  const { user } = useContext(AuthContext);
  console.log(user);

  const toggle = () => {
    setMenuOpen(!menuOpen);
  };

    const {logOut} = useContext(AuthContext)
    const navigate = useNavigate()

    const handleLogOut = () => {
      logOut().then(() => {
      navigate('/login' , { replace: true })
      }).catch((error) => {
        console.log(error);
        
      });
    }

     const confirmLogout = () => {
          Swal.fire({
            title: `Are you sure you want to log out?`,
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Log out!"
          }).then((result) => {
            if (result.isConfirmed) {
              handleLogOut(); 
              Swal.fire({
                title: "Log Out Successful",
                icon: "success",
                timer: 1500, 
                showConfirmButton: false
              });
            }
          });
        };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.addEventListener("scroll", handleScroll);
    };
  }, []);

  const navItems = [
    { link: "Home", path: "/" },
    { link: "About", path: "/about" },
    { link: "Shop", path: "/shop" },
    { link: "Admin", path: "/admin/dashboard" },
  ];

  return (
    <header className="w-full bg-transparent fixed top-0 right-0 transition-all ease-in duration-300">
      <nav
        className={`py-4 lg:px-24 px-4 ${
          sticky ? "sticky top-0 left-0 right-0 bg-black text-white" : ""
        } `}
      >
        <div className="flex justify-between items-center text-base gap-8">
          {/* logo */}
          <Link
            to={"/"}
            className="text-3xl font-bold text-blue-700 flex items-center gap-2"
          >
            <i className="fa-solid fa-book-open"></i> Book Bound
          </Link>
          {/* nav items */}
          <ul className="md:flex space-x-12 hidden">
            {navItems.map(({ link, path }) => (
              <Link
                key={path}
                to={path}
                className="block text-base uppercase cursor-pointer hover:text-blue-700"
              >
                {link}
              </Link>
            ))}
          </ul>
          {/* large device */}
          <div className="space-x-12 hidden lg:flex items-center">
            <Link
              to={"/cart"}
              className="w-5 hover:text-blue-700 flex items-center"
            >
              Cart <i className="fa-solid fa-cart-shopping"></i>
              {cartItems.length > 0 ? (
                <span className="bg-blue-500 text-white rounded-full px-2 font-bold ms-2">
                  {cartItems.length}
                </span>
              ) : (
                <span className="ms-2">0</span>
              )}
            </Link>
            {user ? (
              <div className="relative ms-3">
              <button
                className="bg-transparent text-black focus:outline-none hover:border-2 rounded-3xl px-1"
                onClick={() => setIsOpen(!isOpen)}
              >
                <i className="fa-solid fa-user text-black hover:text-blue-600"></i>
              </button>
              {isOpen && (
                <ul className="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-lg py-2">
                  <li>
                    <button
                      onClick={confirmLogout}
                      className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 flex items-center justify-between"
                    >
                      LogOut <i className="fa-solid fa-right-from-bracket"></i>
                    </button>
                  </li>
                </ul>
              )}
            </div>
            ) : (
              ""
            )}
          </div>
          {/* small device */}
          <div className="md:hidden">
            <button onClick={toggle} className="text-black focus:outline-none">
              {menuOpen ? (
                <i className="text-2xl text-black fa-solid fa-xmark"></i>
              ) : (
                <i className="text-2xl text-black fa-solid fa-bars"></i>
              )}
            </button>
          </div>
        </div>
        {/* nav items for small devices */}
        <div
          className={`space-y-4 px-4 mt-16 py-7 bg-blue-700 ${
            menuOpen ? "block fixed top-0 right-0 left-0" : "hidden"
          }`}
        >
          {navItems.map(({ link, path }) => (
            <Link
              key={path}
              to={path}
              className="block text-base text-white uppercase cursor-pointer"
            >
              {link}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
