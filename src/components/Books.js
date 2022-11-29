import { React, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AddBook, RemoveBook, GetBooks } from '../redux/books/books';
import Book from './Book';
import BookForm from './BookForm';

const Books = () => {
  const dispatch = useDispatch();
  const StoredBook = useSelector((state) => state.BooksReducer);

  useEffect(() => {
    dispatch(GetBooks());
  }, []);

  const AddNewBook = (e, NewBook) => {
    e.preventDefault();
    dispatch(AddBook(NewBook));
  };

  const RemoveExistingBook = (id) => {
    dispatch(RemoveBook(id));
  };
  return (
    <>
      <div className="books-container">
        {StoredBook.map((item) => (
          <Book
            title={item.title}
            author={item.author}
            category={item.category}
            key={item.id}
            id={item.id}
            RemoveExistingBook={RemoveExistingBook}
          />
        ))}
        <hr />
        <BookForm AddNewBook={AddNewBook} />
      </div>
    </>
  );
};

export default Books;
