export const TOGGLE_CATEGORY = 'TOGGLE_CATEGORY';
export const ADD_CATEGORY = 'ADD_CATEGORY';

// Ação REQUEST lançada pelo component => ação ouvida pela Saga => chamada à API => Ação SUCCESS => Será ouvido pelo Reducer

// Action creators

export const toggleCategory = selectedCategory => ({
  type: 'TOGGLE_CATEGORY',
  payload: { selectedCategory }
});

export const addActivity = (category, gym, status, date) => ({
  type: 'ADD_CATEGORY',
  payload: { category, gym, status, date }
});
