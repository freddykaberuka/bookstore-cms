import React from 'react';
import PropTypes from 'prop-types';

function Book({
  title, author, RemoveExistingBook, id, category,
}) {
  return (
    <>
      <h4>{category}</h4>
      <h2>{title}</h2>
      <h4>{author}</h4>
      <button type="button">Comment</button>
      <button type="button" onClick={() => RemoveExistingBook(id)}>Remove</button>
      <button type="button">Edit</button>
      <hr />
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
