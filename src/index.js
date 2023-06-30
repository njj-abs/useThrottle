import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

const Entry = () => {
  return App({});
};

ReactDOM.render(
  <React.StrictMode>
    <Entry />
  </React.StrictMode>,
  document.getElementById("root")
);
