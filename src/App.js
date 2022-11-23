import "./App.css";
import { useState, useEffect } from "react";
import * as AppAPI from "./BooksAPI";
import {
  BrowserRouter as Router,
  Routes, Route
} from "react-router-dom";
import { Search } from "./components/Search";
import { Main } from "./components/Main";



function App() {
  // get books for main page
  const [books, setBooks] = useState([]);
  useEffect(() => {
    const getBooks = async () => {
      const res = await AppAPI.getAll();
      setBooks(res);
    }
    getBooks();
  }, []);

  // Updating shelf in main page
  const changeShelf = async (book, shelf) => {
    await AppAPI.update(book, shelf);
    const res = await AppAPI.getAll();
    setBooks(res);
    setSearchBooks(searchBooks.map((bookSearch) => {
      res.forEach((book) => {
        if (bookSearch.id === book.id) bookSearch.shelf = book.shelf;
      });
      return bookSearch;
    }));

  }

  // Search Page
  // on change value in input
  const [query, updateQuery] = useState("");
  const inputUpdating = (query) => {
    updateQuery(query.trim());
  }

  const [searchBooks, setSearchBooks] = useState([]);
  const [existBook, setExistBook] = useState(false);

  useEffect(() => {
    const getBooks = async () => {
      const res = await AppAPI.search(query);

      if (res.error !== "empty query") {
        setExistBook(true);
        setSearchBooks(res.map((bookSearch) => {
          books.forEach((book) => {
            if (bookSearch.id === book.id) bookSearch.shelf = book.shelf;
          });
          return bookSearch;
        }));
      } else {
        setExistBook(false)
      }
    }
    if (query !== "") {
      getBooks();
    } else {
      setExistBook(false);

    }

  }, [query]);




  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<Main books={books} changeShelf={changeShelf} />}></Route>
          <Route path="/search" element={<Search inputUpdating={inputUpdating} searchBooks={searchBooks} changeShelf={changeShelf} existBooks={existBook} />}></Route>
        </Routes>
      </div >
    </Router >

  );
}

export default App;
