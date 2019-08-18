import { TOGGLE_CATEGORY, ADD_CATEGORY } from '~/store/actions/category';

const INITIAL_STATE = {
  selectedCategory: {}
};

export default function category(state = INITIAL_STATE, action) {
  switch (action.type) {
    case TOGGLE_CATEGORY:
      return {
        ...state,
        selectedCategory: action.payload.selectedCategory
      };

    // case LOAD_MORE_PRODUCTS:
    //   return {
    //     ...state,
    //     currentList: { action.payload.offset }
    //   };

    default:
      return state;
  }
}
console.tron.log(category);
