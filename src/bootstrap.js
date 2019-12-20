import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import { Router, Switch, Route } from "react-router-dom";
import reducers from "./reducers";

const createStoreWithMiddleware = applyMiddleware()(compose((window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())(createStore)));

import "./style/main.scss";

import history from './history'

import Layout from "./components/layout";
import SignIn from "./components/auth/signin";
import SignUp from "./components/auth/signup";

function main() {
  ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
      <Router history={history}>
        <Layout>
          <Switch>
            <Route path='/' exact component={SignIn} />
            <Route path='/signin' component={SignIn} />
            <Route path='/signup' component={SignUp} />
          </Switch>
        </Layout>
      </Router>
    </Provider>,
    document.querySelector(".app-wrapper")
  );
}

document.addEventListener("DOMContentLoaded", main);
