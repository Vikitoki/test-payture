import { Dispatch } from "react";
import {
  addNewUserPayment,
  fetchUserPaymentFailure,
  fetchUserPaymentRequest,
  fetchUserPaymentSuccess,
} from "../../store/usersPaymenst/action-creators";
import { FormHomePageContainerState } from "../../types/forms";
import { RootState } from "../../types/redux";
import { IUsersList, UserPaymentsActions } from "../../types/userPayments";

export const getUserPaymentList = () => {
  return async (dispatch: Dispatch<UserPaymentsActions>) => {
    try {
      dispatch(fetchUserPaymentRequest());

      const response = await fetch(`http://localhost:3004/users`);

      if (!response.ok) {
        throw new Error(
          "Что-то пошло не так, повторите попытку через 5 секунд"
        );
      }

      const data: IUsersList[] = await response.json();

      dispatch(fetchUserPaymentSuccess(data));
    } catch (error) {
      dispatch(fetchUserPaymentFailure(error.message));
    }
  };
};

export const getNewUserPayment = (values: FormHomePageContainerState) => {
  return async (
    dispatch: Dispatch<UserPaymentsActions>,
    getState: () => RootState
  ) => {
    try {
      dispatch(fetchUserPaymentRequest());

      console.log(getState());
      const newPayment = {
        ...values,
        id: String(Math.random()),
        date: `${new Date().toLocaleDateString()} в ${new Date().toLocaleTimeString()}`,
      };
      const response = await fetch(`http://localhost:3004/users`, {
        method: "POST",
        body: JSON.stringify(newPayment),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error(
          "Что-то пошло не так, повторите попытку через 5 секунд"
        );
      }

      dispatch(addNewUserPayment(newPayment));
      localStorage.setItem(
        "usersPaymentList",
        JSON.stringify([
          ...getState().userPayments.usersPaymentList,
        ])
      );
    } catch (error) {
      dispatch(fetchUserPaymentFailure(error.message));
    }
  };
};
