import React from 'react';

const Book = ({ book, changeShelf }) => {

  return (

    < li >
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 188,
              backgroundImage: (book.imageLinks) ? `url(${book.imageLinks.smallThumbnail})` : "none",
            }}
          ></div>
          <div className="book-shelf-changer">
            <select onChange={(event) => { changeShelf(book, event.target.value) }} value={book.shelf ? book.shelf : "none"}>
              <option disabled>
                Move to...
              </option>
              <option value="currentlyReading">
                Currently Reading
              </option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">{book.authors ? book.authors.map((auther) => auther) : ""}</div>
      </div>
    </li >
  )
}
export default Book;