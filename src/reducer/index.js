import { combineReducers } from "redux";
import transactions from "./transactions";

const allReducers = combineReducers({
  transactions: transactions,
});

export default allReducers;
