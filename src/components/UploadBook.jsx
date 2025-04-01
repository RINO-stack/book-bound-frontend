import React from "react";
import serverURL from "../serverURL";
React;

const UploadBook = () => {

  const handleBookSubmit = (event) =>{
    event.preventDefault();
    const form = event.target;
    const title = form.title.value;
    const authName = form.authName.value;
    const imgURL = form.imgURL.value;
    const category = form.category.value;
    const description = form.description.value;
    const price = form.price.value;
    
    const bookObject = {
      title,authName,imgURL,category,description,price
    }

    console.log(bookObject);
    
    // send to database
    fetch(`${serverURL}/upload-book`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(bookObject)
    }).then(res => res.json()).then(data => {
      console.log(data);
      alert('book uploaded successfully')
      form.reset()
    })
    
  }
  return (
    <div className="px-2 my-4">
      <h2 className="mb-8 text-3xl font-bold">Upload a Book</h2>

      <form onSubmit={handleBookSubmit} className="form lg:w-[1010px] flex-col flex-wrap gap-4">
        {/* row 1 */}

        <div className="flex gap-8">
        <div className="mb-5 lg:w-1/2">
          <label
            htmlFor="title"
            value="title"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Book Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
            placeholder="Enter Book Name"
            required
          />
        </div>

        <div className="mb-5 lg:w-1/2">
          <label
            htmlFor="authName"
            value="authName"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Auther Name 
          </label>
          <input
            type="text"
            id="authName"
            name="authName"
            className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
            placeholder="Enter Author Name"
            required
          />
        </div>
        </div>

        {/* row 2 */}

        <div className="flex gap-8">
        <div className="mb-5 lg:w-1/2">
          <label
            htmlFor="imgURL"
            value="imgURL"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Image URL
          </label>
          <input
            type="text"
            id="imgURL"
            name="imgURL"
            className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
            placeholder="Enter Book Image URL"
            required
          />
        </div>

        <div className="mb-5 lg:w-1/2">
          <label
            htmlFor="category"
            value="category"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Category/Genre
          </label>
          <input
            type="text"
            id="category"
            name="category"
            className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
            placeholder="Enter Book Category"
            required
          />
        </div>
        </div>

        {/* row 3 */}

        <div>
        <label
            htmlFor="description"
            value="description"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Book Description
          </label>
          <textarea type="text" id="description" name="description" rows="5" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-100 rounded-lg border border-gray-300" placeholder="Enter Book Description"></textarea>
        
        </div>

        {/* row-4 */}

        <div className="mb-5 mt-3">
          <label
            htmlFor="price"
            value="price"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Price (in dollars $)
          </label>
          <input
            type="text"
            id="price"
            name="price"
            className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
            placeholder="Enter Book Price"
            required
          />
        </div>
        <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none font-medium rounded-lg text-md w-full px-5 py-2.5 text-center mt-3 ">Upload Book</button>
      </form>
    </div>
  );
};

export default UploadBook;
