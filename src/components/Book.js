import React from 'react';
import PropTypes from 'prop-types';
import Progress from './Progress';

function Book({
  title, author, RemoveExistingBook, id, category,
}) {
  return (
    <>
      <div className="book-container">
        <div className="book-wrap">
          <p>{category}</p>
          <h1>{title}</h1>
          <p id="author">{author}</p>
          <button type="button" id="comment">Comment</button>
          {' '}
          |
          <button type="button" onClick={() => RemoveExistingBook(id)} id="remove">Remove</button>
          {' '}
          |
          <button type="button" id="edit">Edit</button>
        </div>
        <Progress />
      </div>
    </>
  );
}
Book.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
  id: PropTypes.number,
  category: PropTypes.string,
  RemoveExistingBook: PropTypes.func,
};
Book.defaultProps = {
  title: '',
  author: '',
  id: '',
  category: '',
  RemoveExistingBook: null,
};

export default Book;
