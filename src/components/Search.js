import React from 'react';
import { Link } from "react-router-dom";
import Book from './Book';


export const Search = ({ inputUpdating, searchBooks, changeShelf, existBooks }) => {


  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link to="/" className="close-search">Close</Link>
        <div className="search-books-input-wrapper">
          <input
            type="text"
            placeholder="Search by title, author, or ISBN"
            onChange={(event) => inputUpdating(event.target.value)}

          />
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
          {
            existBooks ?
              searchBooks.map((book) => <Book key={book.id} book={book} changeShelf={changeShelf} />)
              :
              <div>
                No Books
              </div>
          }

        </ol>
      </div>
    </div>
  )
}
