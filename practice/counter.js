// import Button from "./button";
// import styles from "./app.module.css";
import { useState, useEffect } from "react";
// useEff 첫번째 argu에는 한번만 실행시킬 부분,
// 2번째 argu 에는 dependency(react지켜보는것)괄호 안의 변수가 변할때마다 실행
function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onChange = (event) => setKeyword(event.target.value);
  console.log("I run all");
  const onClick = () => setValue((prev) => prev + 1);
  useEffect(() => {
    console.log("call the api");
  }, []);
  // 방어막
  useEffect(() => {
    if (keyword !== "" && keyword.length > 5) {
      console.log("Search for", keyword);
    }
  }, [keyword]);
  // keyword가 변할때만 실행, 없으면 한번만 실행,[key,count]2개 이상도 가능
  return (
    <div>
      <input
        value={keyword}
        onChange={onChange}
        type="text"
        placeholder="Search here"
      ></input>
      <h1>{counter}</h1>
      {/* <h1 className={styles.title}>Welcome back</h1> */}
      {/* 다른 cssmodule의 클래스 이름과 같아도 문제x  */}
      <button onClick={onClick}>Click me</button>
      {/* <Button text={"continue"} /> */}
    </div>
  );
}
// state를 변경할떄 모든 code들이 다시 실행
export default App;

// nodejs 덕분에 파일분리 가능,한파일 당 한개의 컴포넌트 가능
// npm i prop-types
