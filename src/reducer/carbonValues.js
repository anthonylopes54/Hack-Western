const initialState = { emission: 10, offset: 2 };

export const carbonValues = (state = initialState, action) => {
  let newOffset = parseInt(state.offset) + parseInt(action.payload);
  let newEmission = parseInt(state.emission) + parseInt(action.payload);

  switch (action.type) {
    case "ADD_OFFSET":
      return { ...state, offset: newOffset };
    case "ADD_EMISSIONS":
      return { ...state, offset: newEmission };
    default:
      return state;
  }
};


export default carbonValues;
