const initialState = [];

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
      case 'ADD_DISH':
          return [...state, payload];
      case 'DELETE_DISH':
          return [...state.filter((dish) => dish.id !== payload)];
      default:
          return state;
  }
};

export default reducer;