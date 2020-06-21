import React from "react";
import ReactDOM from "react-dom";
import Calculator from "./Calculator";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <Calculator />
  </React.StrictMode>,
  rootElement
);
