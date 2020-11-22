const initialState = { emission: 0, offset: 1 };

export const carbonValues = (state = initialState, action) => {
  console.log("top of reducer");
  switch (action.type) {
    case "ADD_OFFSET":
      return { ...state, offset: state.offset + action.payload };
    case "ADD_EMMISIONS":
      return {...state, emission: state.emission + action.payload};
    default:
      return state;
  }
};

export default carbonValues;
