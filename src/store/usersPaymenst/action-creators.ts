import { IUsersList, UserPaymentsActions } from "../../types/userPayments";
import {
  ADD_NEW_USER_PAYMENT,
  FETCH_USER_PAYMENT_LIST_FAILURE,
  FETCH_USER_PAYMENT_LIST_REQUEST,
  FETCH_USER_PAYMENT_LIST_SUCCESS,
  REMOVE_SUCCESS_STATUS_PAYMENT,
} from "./action-variables";

export const fetchUserPaymentRequest = (): UserPaymentsActions => ({
  type: FETCH_USER_PAYMENT_LIST_REQUEST,
});

export const fetchUserPaymentSuccess = (
  payload: IUsersList[]
): UserPaymentsActions => ({
  type: FETCH_USER_PAYMENT_LIST_SUCCESS,
  payload,
});

export const fetchUserPaymentFailure = (
  payload: string
): UserPaymentsActions => ({
  type: FETCH_USER_PAYMENT_LIST_FAILURE,
  payload,
});

export const addNewUserPayment = (
  payload: IUsersList
): UserPaymentsActions => ({
  type: ADD_NEW_USER_PAYMENT,
  payload,
});

export const removeSuccessStatusPayment = (): UserPaymentsActions => ({
  type: REMOVE_SUCCESS_STATUS_PAYMENT,
});
