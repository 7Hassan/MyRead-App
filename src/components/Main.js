import React from 'react'
import { Link } from "react-router-dom";
import { Self } from './Self';
export const Main = ({ books, changeShelf }) => {
  return (
    <div className="list-books">

      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          <Self stateSec="Currently Reading" books={books} state="currentlyReading" changeShelf={changeShelf}  />
          <Self stateSec="Want To Read" books={books} state="wantToRead" changeShelf={changeShelf} />
          <Self stateSec="Read" books={books} state="read" changeShelf={changeShelf} />
        </div>
      </div>
      <div className="open-search">
        <Link to="/search" >Add a book</Link>
      </div>
    </div>
  )
}
