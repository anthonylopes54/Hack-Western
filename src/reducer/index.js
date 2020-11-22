import { combineReducers } from "redux";
import transactions from "./transactions";
import carbonValues from "./carbonValues";
import isSubscribed from "./isSubscribed";

const allReducers = combineReducers({
  transactions: transactions,
  carbonValues: carbonValues,
  isSubscribed: isSubscribed,
});

export default allReducers;
