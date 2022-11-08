import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CheckStatusFunc } from '../redux/categories/categories';

const Category = () => {
  const dispatch = useDispatch();
  const UpdateCategoryStatus = () => dispatch(CheckStatusFunc());
  const CategoriesStatus = useSelector((state) => state.CategoriesReducer);
  return (
    <div>
      {CategoriesStatus.map((status) => <h1 key={status}>{status}</h1>)}
      <button type="button" onClick={UpdateCategoryStatus}>Check Status</button>
    </div>
  );
};

export default Category;
