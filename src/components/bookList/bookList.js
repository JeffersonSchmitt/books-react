import BookShow from './../bookShow/bookShow';
import useBooksContext from '../hooks/useBooksContext';

function BookList() {
  const { books } = useBooksContext();

  const renderBooks = books.map((item) => {
    return <BookShow key={item.id} book={item} />
  })


  return (
    <div className='book-list'>
      {renderBooks}
    </div>
  );
}

export default BookList;