import { combineReducers } from "redux";
import { userPaymentsReducer } from "./usersPaymenst/reducer";

export const rootReducer = combineReducers({
  userPayments: userPaymentsReducer,
});
