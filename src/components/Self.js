import React from 'react'
import Book from './Book';

export const Self = ({ stateSec, books, state, changeShelf }) => {
  return (
    <div className="bookshelf">

      <h2 className="bookshelf-title">{stateSec}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {
            books.filter((book) => book.shelf === state).map((book) => <Book key={book.id} book={book} changeShelf={changeShelf} />)
          }

        </ol>
      </div>
    </div>
  )
}
