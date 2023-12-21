import ReactDOM from "react-dom/client";

import App from "./App";
import "./App.css";

import { StrictMode } from "react";
import store from "./store/index";
import { Provider } from "react-redux";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
