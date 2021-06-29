import React from "react";
import { FC } from "react";
import { IUsersList } from "../../types/userPayments";

import "./UserBlock.scss";

interface UserBlockProps {
  userInfo: IUsersList;
}

export const UserBlock: FC<UserBlockProps> = ({ userInfo }) => {
  const {
    date,
    userCard,
    userCardCVC,
    userCardDate,
    userEmail,
    userName,
    userSum,
  } = userInfo;

  return (
    <div className="user-block">
      <ul className="user-block__list">
        <li>Имя пользователя: {userName}</li>
        <li>Почта пользователя: {userEmail}</li>
        <li>Номер карты: {userCard}</li>
        <li>CVC: {userCardCVC}</li>
        <li>Дата окончания использования карты: {userCardDate}</li>
        <li>Время оплаты: {date}</li>
        <li>Сумма оплаты: {userSum}</li>
      </ul>
    </div>
  );
};
