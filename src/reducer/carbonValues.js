const initialState = { emission: 10, offset: 2 };

export const carbonValues = (state = initialState, action) => {
  let newOffset = parseInt(state.offset) + parseInt(action.payload);

  switch (action.type) {
    case "ADD_OFFSET":
      return { ...state, offset: newOffset };
    default:
      return state;
  }
};


export default carbonValues;
