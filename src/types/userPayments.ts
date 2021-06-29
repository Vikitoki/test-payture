import {
  ADD_NEW_USER_PAYMENT,
  FETCH_USER_PAYMENT_LIST_FAILURE,
  FETCH_USER_PAYMENT_LIST_REQUEST,
  FETCH_USER_PAYMENT_LIST_SUCCESS,
  REMOVE_SUCCESS_STATUS_PAYMENT,
} from "../store/usersPaymenst/action-variables";
import { FormHomePageContainerState } from "./forms";

export interface IUsersList extends FormHomePageContainerState {
  date: string;
  id: string;
}

export interface UserPaymentsState {
  usersPaymentList: IUsersList[];
  loading: boolean;
  error: string;
  successPayment: boolean;
}

interface FetchUserPaymentRequestAction {
  type: typeof FETCH_USER_PAYMENT_LIST_REQUEST;
}

interface FetchUserPaymentSuccessAction {
  type: typeof FETCH_USER_PAYMENT_LIST_SUCCESS;
  payload: IUsersList[];
}

interface FetchUserPaymentFailureAction {
  type: typeof FETCH_USER_PAYMENT_LIST_FAILURE;
  payload: string;
}

interface AddNewUserPaymentAction {
  type: typeof ADD_NEW_USER_PAYMENT;
  payload: IUsersList;
}

interface RemoveSuccessStatusPaymentAction {
  type: typeof REMOVE_SUCCESS_STATUS_PAYMENT;
}

export type UserPaymentsActions =
  | FetchUserPaymentRequestAction
  | FetchUserPaymentSuccessAction
  | FetchUserPaymentFailureAction
  | AddNewUserPaymentAction
  | RemoveSuccessStatusPaymentAction;
