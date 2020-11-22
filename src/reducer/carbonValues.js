const initialState = { emission: 10, offset: 2 };

export const carbonValues = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_OFFSET":
      return { ...state, offset: state.offset + action.payload };
    default:
      return state;
  }
};

export default carbonValues;
