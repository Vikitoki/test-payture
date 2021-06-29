import {
  UserPaymentsActions,
  UserPaymentsState,
} from "../../types/userPayments";
import {
  FETCH_USER_PAYMENT_LIST_FAILURE,
  FETCH_USER_PAYMENT_LIST_REQUEST,
  FETCH_USER_PAYMENT_LIST_SUCCESS,
  ADD_NEW_USER_PAYMENT,
  REMOVE_SUCCESS_STATUS_PAYMENT,
} from "./action-variables";

const initialState: UserPaymentsState = {
  usersPaymentList: [],
  loading: false,
  error: "",
  successPayment: false,
};

export const userPaymentsReducer = (
  state = initialState,
  action: UserPaymentsActions
): UserPaymentsState => {
  switch (action.type) {
    case FETCH_USER_PAYMENT_LIST_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_USER_PAYMENT_LIST_SUCCESS:
      return {
        ...state,
        usersPaymentList: action.payload,
        loading: false,
        error: "",
      };
    case FETCH_USER_PAYMENT_LIST_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case ADD_NEW_USER_PAYMENT:
      return {
        ...state,
        loading: false,
        error: "",
        usersPaymentList: [...state.usersPaymentList, action.payload],
        successPayment: true,
      };
    case REMOVE_SUCCESS_STATUS_PAYMENT:
      return { ...state, successPayment: false };
    default:
      return state;
  }
};
