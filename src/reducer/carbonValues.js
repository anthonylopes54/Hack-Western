const initialState = { emission: 50, offset: 30 };

export const carbonValues = (state = initialState, action) => {
  switch (action.type) {
    case "ADD TO EMISSIONS":
      return state;
    default:
      return state;
  }
};

export default carbonValues;
