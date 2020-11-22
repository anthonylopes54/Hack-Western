const initialState = [];

export const transactions = (state = initialState, action) => {
  switch (action.type) {
    case "AB":
      return [];
    default:
      return state;
  }
};

export default transactions;
