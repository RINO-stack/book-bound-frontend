import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/features/cart/cartSlice";
import { Link } from "react-router-dom";
import ReactPaginate from "react-paginate";
import serverURL from "../serverURL";
React

const Shop = () => {
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  const [books, setBooks] = useState([]);
  const [page, setPage] = useState(0);
  const [searchTerm, setSearchTerm] = useState(""); // Search state
  const booksPerPage = 8;

  useEffect(() => {
    fetch(`${serverURL}/all-books`)
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);

  
  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const pageCount = Math.ceil(filteredBooks.length / booksPerPage);
  const displayedBooks = filteredBooks.slice(page * booksPerPage, (page + 1) * booksPerPage);

  const handlePageClick = ({ selected }) => {
    setPage(selected);
  };

  return (
    <div className="mt-28 px-4 lg:px-10">
      <h2 className="text-5xl font-bold text-center">All Books</h2>

      {/* Search Bar */}
      <div className="flex justify-center my-6">
        <input
          type="text"
          placeholder="Search Books Here"
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setPage(0); 
          }}
          className="px-4 py-2 w-full max-w-lg border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Grid Container */}
      <div className="my-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 min-h-[600px]">
        {displayedBooks.length > 0 ? (
          displayedBooks.map((book) => (
            <div
              key={book.id}
              className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:border-gray-700"
            >
              <Link to={`/book/${book._id}`}>
                <img src={book.imgURL} alt="" className="h-85 w-full" />
              </Link>
              <div className="p-6">
                <h1 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">{book.title}</h1>
                <h1 className="mb-2 text-xl font-bold tracking-tight text-blue-700">
                  <span className="line-through me-1">$20</span> ${book.price}
                </h1>
                <button
                  onClick={() => handleAddToCart(book)}
                  className="bg-blue-600 font-semibold text-white py-2 w-full rounded hover:bg-black"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="col-span-4 text-center text-red-600 text-xl">No books found.</p>
        )}
      </div>

      {/* Pagination */}
      {filteredBooks.length > 0 && (
        <div className="mt-6 flex justify-center">
          <ReactPaginate
            previousLabel={"Previous"}
            nextLabel={"Next"}
            breakLabel={"..."}
            pageCount={pageCount}
            marginPagesDisplayed={2}
            pageRangeDisplayed={3}
            onPageChange={handlePageClick}
            containerClassName="flex space-x-2 bg-gray-100 p-2 rounded-md"
            pageClassName="px-4 py-2 border rounded-md cursor-pointer hover:bg-blue-500 hover:text-white transition"
            activeClassName="bg-blue-500 text-white"
            previousClassName="px-4 py-2 bg-gray-300 rounded-md cursor-pointer hover:bg-blue-500 hover:text-white transition"
            nextClassName="px-4 py-2 bg-gray-300 rounded-md cursor-pointer hover:bg-blue-500 hover:text-white transition"
            disabledClassName="opacity-50 cursor-not-allowed"
          />
        </div>
      )}
    </div>
  );
};

export default Shop;
