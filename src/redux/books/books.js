const ADD_BOOK = 'bookstore-cms/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore-cms/books/REMOVE_BOOK';
const books = [
  {
    id: 1,
    title: 'hacking',
    author: 'Freddy',
  },
  {
    id: 2,
    title: 'Foundamental Mathematics',
    author: 'Danny',
  },
  {
    id: 3,
    title: 'Physics',
    author: 'Kaberuka',
  },
];

// action
export const AddBook = (NewBook) => ({
  type: ADD_BOOK,
  payload: NewBook,
});

export const RemoveBook = (id) => ({
  type: REMOVE_BOOK,
  id,
});

// reducer

const BooksReducer = (state = books, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [
        ...state,
        {
          id: Date.now(),
          title: action.payload.title,
          author: action.payload.author,
        },
      ];
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.id);
    default:
      return state;
  }
};
export default BooksReducer;
