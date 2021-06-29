import React from "react";
import { FC } from "react";

import { FormHomePageContainer } from "../../components/Forms/Containers/FormHomePageContainer";

import "./HomePage.scss";

export const HomePage: FC = () => {
  return (
    <div className="home-page">
      <div className="home-page__container">
        <div className="home-page__content">
          <h2 className="home-page__title">Заполните свои данные</h2>
          <div className="home-page__form">
            <FormHomePageContainer />
          </div>
        </div>
      </div>
    </div>
  );
};
