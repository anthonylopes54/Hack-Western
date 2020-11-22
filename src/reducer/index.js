import { combineReducers } from "redux";
import transactions from "./transactions";
import carbonValues from "./carbonValues";

const allReducers = combineReducers({
  transactions: transactions,
  carbonValues: carbonValues,
});

export default allReducers;
