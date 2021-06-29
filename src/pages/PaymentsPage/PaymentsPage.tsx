import React, { FC } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { UserBlock } from "../../components/UserBlock/UserBlock";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { getUserPaymentList } from "../../services/rest/userPaymentsActions";

import "./PaymentsPage.scss";

export const PaymentsPage: FC = () => {
  const dispatch = useDispatch();
  const { error, loading, usersPaymentList } = useTypedSelector(
    (state) => state.userPayments
  );

  useEffect(() => {
    dispatch(getUserPaymentList());
  }, [dispatch]);

  return (
    <div className="payments-page">
      <div className="payments-page__container container">
        <div className="payments-page__content">
          <h2 className="payments-page__title">
            Список пользователей оставивших заявки
          </h2>
          {loading ? (
            <span className="form__status">Загружаем данные...</span>
          ) : error ? (
            <span className="form__status">{error}</span>
          ) : usersPaymentList.length === 0 ? (
            <span className="form__status">Ваш список заявок пока пуст</span>
          ) : (
            <ul className="payments-page__items">
              {usersPaymentList.map((userInfo) => {
                return (
                  <li key={userInfo.id}>
                    <UserBlock userInfo={userInfo} />
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};
