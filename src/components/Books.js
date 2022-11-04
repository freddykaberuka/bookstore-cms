import React from 'react';
import Book from './Book';
import BookForm from './BookForm';

function Books() {
  return (
    <div>
      <Book title="Book Title" author="Book Author" />
      <BookForm />
    </div>
  );
}

export default Books;
