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

    case ADD_CATEGORY:
      return {
        ...state
        // history: [
        //   ...state.history,
        //   {
        //     category: {
        //       description: action.payload.category,
        //       checkinStatus: action.payload.status,
        //       checkinDate: action.payload.date
        //     },
        //     gym: action.payload.
        //   }
        // ]
      };

    default:
      return state;
  }
}
console.tron.log(category);
