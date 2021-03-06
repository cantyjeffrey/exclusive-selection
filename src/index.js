// @flow

import React from "react";
import ReactDOM from "react-dom";
import { AppContainer } from "react-hot-loader";
import App from "./components/App";
import registerServiceWorker from "./registerServiceWorker";

import "./styles/global-styles";

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById("root")
  );
};

render(App);

if (module.hot) {
  module.hot.accept("./components/App", () => {
    render(App);
  });
}

registerServiceWorker();
