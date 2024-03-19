import { createContext, useCallback, useState } from "react";
import axios from "axios";

const BooksContext = createContext();

// eslint-disable-next-line no-unused-vars
function Provider({ children }) {

  const [books, setBooks] = useState([]);

  const fetchBook = useCallback(async () => {
    const response = await axios.get(' http://localhost:3001/books');
    setBooks(response.data);
  }, []);

  const createBook = async (title) => {

    const response = await axios.post('http://localhost:3001/books', {
      title
    });

    const updatedBooks = [
      ...books,
      response.data
    ];

    setBooks(updatedBooks);
  }

  const deleteBookById = async (id) => {
    await axios.delete(`http://localhost:3001/books/${id}`
    );

    const updatedBooks = books.filter((book) => {
      return book.id !== id;
    });

    setBooks(updatedBooks);
  };

  const editBook = async (id, title) => {
    const response = await axios.put(`http://localhost:3001/books/${id}`, {
      title
    });

    const updatedBooks = books.map((item) => {
      if (item.id === id) {
        return { ...item, ...response.data };
      }
      return item;
    });

    setBooks(updatedBooks);
  };
  return (
    <BooksContext.Provider value={{ books, createBook, editBook, deleteBookById, fetchBook }}>
      {children}
    </BooksContext.Provider>
  );
}

export { Provider };
export default BooksContext;