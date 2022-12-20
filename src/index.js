// 중요
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./routes/styles.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

//반드시 react react-dom 버전 일치되게, 최신으로
// module not found: can't resolve 버전을 일치시킨다

// prop,전달값,상위 컴포넌트가 하위 컴포넌트에 값을 전달할때 사용한다.(단방향 데이터 흐름 갖는다.)
//프로퍼티는 수정할 수 없다는 특징이 있다.(자식입장에선 읽기 전용인 데이터이다.)
