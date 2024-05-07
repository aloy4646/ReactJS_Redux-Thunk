import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import reducers from "./reducers";
import App from "./components/App";

const store = createStore(reducers, applyMiddleware(thunk))

const el = document.getElementById("root")

// // tell react to take control of that element
const root = ReactDOM.createRoot(el)

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);