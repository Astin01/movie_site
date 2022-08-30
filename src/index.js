// 중요
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

//반드시 react react-dom 버전 일치되게, 최신으로
// module not found: can't resolve 버전을 일치시킨다
