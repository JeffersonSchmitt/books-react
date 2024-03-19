import { useEffect, useContext } from "react";
import BookCreate from "./components/bookCreate/bookCreate";
import BookList from './components/bookList/bookList';
import BooksContext from "./context/books";

function App() {
  const { fetchBook } = useContext(BooksContext);

  useEffect(() => {
    fetchBook();
  }, []);

  return (
    <div className="app">
      <BookList />
      <BookCreate />
    </div>
  );
}

export default App;
