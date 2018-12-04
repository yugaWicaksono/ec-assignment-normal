import * as React from "react";
import * as ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
// import serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import store from "./redux-store/store/index";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
// serviceWorker();
