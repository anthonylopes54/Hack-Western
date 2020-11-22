const initialState = { emission: 2, offset: 1 };

export const carbonValues = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_OFFSET":
      return { ...state, offset: state.offset + action.payload };
    default:
      return state;
  }
};

export default carbonValues;
