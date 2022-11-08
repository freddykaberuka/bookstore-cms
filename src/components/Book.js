import React from 'react';
import PropTypes from 'prop-types';

function Book({ title, author }) {
  return (
    <>
      <div>
        <h2>{title}</h2>
        <h4>{author}</h4>
      </div>
    </>
  );
}
Book.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
};
Book.defaultProps = {
  title: '',
  author: '',
};

export default Book;
