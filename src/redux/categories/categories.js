const CHECK_STATUS = 'bookstore-cms/categories/CHECK_STATUS';

const categories = [];

export const CheckStatusFunc = () => ({
  type: CHECK_STATUS,
});

const CategoriesReducer = (state = categories, action) => {
  switch (action.type) {
    case CHECK_STATUS:
      return 'Under construction';
    default: return state;
  }
};
export default CategoriesReducer;
