import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import ReduxThunk from "redux-thunk";
import { rootReducer } from "./rootReducer";

const initialState = {
  userPayments: {
    usersPaymentList: localStorage.getItem("usersPaymentList")
      ? JSON.parse(localStorage.getItem("usersPaymentList")!)
      : [],
  },
};

const midlware = [ReduxThunk];

export const store = createStore(
  rootReducer,
  initialState as any,
  composeWithDevTools(applyMiddleware(...midlware))
);
