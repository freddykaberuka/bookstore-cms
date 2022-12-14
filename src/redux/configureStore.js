import { configureStore, combineReducers } from '@reduxjs/toolkit';
import BooksReducer from './books/books';
import CategoriesReducer from './categories/categories';

const rootReducer = combineReducers({
  BooksReducer, CategoriesReducer,
});

const store = configureStore({
  reducer: rootReducer,
});
export default store;
