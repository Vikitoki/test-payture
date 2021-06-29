import React from "react";
import { HomePage } from "../../pages/HomePage/HomePage";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";
import { Provider } from "react-redux";
import { store } from "../../store/store";

const App = () => {
  return (
    <Provider store={store}>
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
    </Provider>
  );
};

export default App;
