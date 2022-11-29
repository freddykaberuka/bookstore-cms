import axios from 'axios';

const ADD_BOOK = 'bookstore-cms/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore-cms/books/REMOVE_BOOK';
const GET_BOOKS = 'bookstore-cms/books/GET_BOOKS';
const books = [];
const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/mofDNtzL5RmmBcfzPKFM/books';

// action
export const AddBook = (NewBook) => async (dispatch) => {
  try {
    await axios.post(url, NewBook);
    return dispatch({ type: ADD_BOOK, payload: NewBook });
  } catch (err) {
    return err;
  }
};

export const RemoveBook = (id) => async (dispatch) => {
  try {
    await axios.delete(`${url}/${id}`);
    return dispatch({ type: REMOVE_BOOK, id });
  } catch (err) {
    return err;
  }
};

export const GetBooks = () => async (dispatch) => {
  try {
    const res = await axios.get(url);
    return dispatch({ type: GET_BOOKS, payload: res.data });
  } catch (err) {
    return err;
  }
};

// reducer

const BooksReducer = (state = books, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [
        ...state,
        {
          id: action.payload.item_id,
          title: action.payload.title,
          author: action.payload.author,
          category: action.payload.category,
        },
      ];
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.id);

    case GET_BOOKS:
      return Object.keys(action.payload).map((el) => ({ ...action.payload[el][0], id: el }));
    default:
      return state;
  }
};
export default BooksReducer;
