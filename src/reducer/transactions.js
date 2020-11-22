const clone = require('rfdc')()
const initialState = [
  {
    date: "2020/11/21",
    item: "I-Pad",
    carbonValue: "0.37",
    dollarValue: "14",
  },
  {
    date: "2020/11/21",
    item: "Asus Laptop",
    carbonValue: "0.50",
    dollarValue: "9.50",
  },
  {
    date: "2020/11/21",
    item: "Monitor",
    carbonValue: "0.80",
    dollarValue: "8.71",
  },
];

export const transactions = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TRANSACTION":
      console.log(action);
      let temp = action.payload.concat(clone(state));
      return temp;
    default:
      return state;
  }
};

export default transactions;
