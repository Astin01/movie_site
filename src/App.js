import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// browser router는 url이 보통의 웹사이트 처럼 생김
// hash router url 앞에 #이 붙음
import Detail from "./routes/Detail";
import Home from "./routes/Home";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="movie/:id" element={<Detail />} />
      </Routes>
      {/* :id 변수 전달 */}
    </Router>
  );
}

export default App;

// app.js는 router를 render, router는 url을 보고 있는 컴포로 url 변화에 따라 화면을 전환
// switch route(url)를 찾고 랜더링,
// 라우팅:사용자가 요청한 URL에 따라 해당 URL에 맞는 페이지를 보여주는 것
