import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import BookCard from './BookCard'
import serverURL from '../serverURL'
React

const FavouriteBooks = () => {
    const [books , setBooks] = useState([])
    
    
    

    useEffect(()=>{
        fetch(`${serverURL}/all-books`).then(res =>res.json()).then(data => setBooks(data.slice(0,8)));
    },[])

  return (
    <div>
      <BookCard books={books} headline="Best Seller Books"/>
    </div>
  )
}

export default FavouriteBooks
