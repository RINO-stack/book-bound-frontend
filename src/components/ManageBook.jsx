import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import serverURL from '../serverURL';
React

function ManageBook() {

   const [allBooks , setAllBooks] = useState([])

   useEffect(()=>{
      fetch(`${serverURL}/all-books`).then(res => res.json()).then(data => setAllBooks(data));
   },[])
   
//    delete book
const handleDelete = async (id) => {
    try {
        await axios.delete(`${serverURL}/book/${id}`);
        setAllBooks(prevItems => prevItems.filter(item => item._id !== id));
    } catch (error) {
        console.log("Error deleting item:", error);
    }
};
  return (
    <div className='px-2 my-4'>
      <h2 className='mb-4 text-3xl font-bold'>Manage your Books</h2>

    

<div className="relative overflow-x-auto shadow-2xl sm:rounded-lg">
    <table className="w-full text-sm text-left rtl:text-right text-gray-900 lg:w-[1000px]">
        <thead className="text-xs text-gray-700 uppercase bg-gray-200">
            <tr>
            <th scope="col" className="px-6 py-3">
                    No.
                </th>
                <th scope="col" className="px-6 py-3">
                    Book Name
                </th>
                <th scope="col" className="px-6 py-3">
                    Author Name
                </th>
                <th scope="col" className="px-6 py-3">
                    Category
                </th>
                <th scope="col" className="px-6 py-3">
                    Price
                </th>
                <th scope="col" className="px-6 py-3">
                    Edit or Manage
                </th>
            </tr>
        </thead>
        {
            allBooks.map((book, index) => <tbody key={book._id}>
              <tr>
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                    {index + 1}
                </th>
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                    {book.title}
                </th>
                <td className="px-6 py-4">
                    {book.authName}
                </td>
                <td className="px-6 py-4">
                   {book.category}
                </td>
                <td className="px-6 py-4">
                $ {book.price} 
                </td>
                <td className="px-6 py-4">
                    <Link to={`/admin/dashboard/edit-books/${book._id}`} className="font-medium text-blue-600 dark:text-blue-500 hover:underline mr-5">Edit</Link>
                    <button onClick={()=>handleDelete(book._id)} className='bg-red-600 px-4 py-1 font-semibold text-white rounded-sm hover:bg-sky-600'>Delete</button>
                </td>
            </tr>
            </tbody>)
        }
    </table>
</div>


    </div>
  )
}

export default ManageBook
