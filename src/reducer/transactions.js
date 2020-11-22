const initialState = [
  {
    date: "2020/11/21",
    item: "i-pad",
    carbonValue: "0.37",
    dollarValue: "599",
  },
  {
    date: "2020/11/21",
    item: "laptop",
    carbonValue: "0.50",
    dollarValue: "879",
  },
  {
    date: "2020/11/21",
    item: "long list item name",
    carbonValue: "0.80",
    dollarValue: "871",
  },
];

export const transactions = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TRANSACTION":
      let temp = deepCopy(state.transactions).push(action.payload);
      return {...state, transactions: temp};
    default:
      return state;
  }
};

export default transactions;
