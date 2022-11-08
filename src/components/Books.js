import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AddBook, RemoveBook } from '../redux/books/books';
import Book from './Book';
import BookForm from './BookForm';

const Books = () => {
  const dispatch = useDispatch();
  const StoredBook = useSelector((state) => state.BooksReducer);

  const AddNewBook = (e, NewBook) => {
    e.preventDefault();
    dispatch(AddBook(NewBook));
  };

  const RemoveExistingBook = (id) => {
    dispatch(RemoveBook(id));
  };
  return (
    <div>
      <>
        {StoredBook.map((item) => (
          <Book
            title={item.title}
            author={item.author}
            key={item.id}
            id={item.id}
            RemoveExistingBook={RemoveExistingBook}
          />
        ))}
        <BookForm AddNewBook={AddNewBook} />
      </>
    </div>
  );
};

export default Books;
