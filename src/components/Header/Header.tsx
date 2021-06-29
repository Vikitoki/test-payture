import React from "react";
import { FC } from "react";
import { Link } from "react-router-dom";

import "./Header.scss";

export const Header: FC = () => {
  return (
    <header className="header">
      <div className="header__container container">
        <Link to="/" className="header__logo">
          Payture
        </Link>
        <nav className="header__menu">
          <ul className="header__list">
            <li>
              <Link to="/" className="header__link">
                Home
              </Link>
            </li>
            <li>
              <Link to="/payments" className="header__link">
                Payments
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
