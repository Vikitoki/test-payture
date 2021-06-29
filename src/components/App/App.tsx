import React from "react";
import { HomePage } from "../../pages/HomePage/HomePage";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";

const App = () => {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <Header />
        <div className="main">
          <Switch>
            <Route path="/" exact component={HomePage} />
          </Switch>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
