import { useState, useEffect } from "react";

function Hello() {
  // function byFn(){
  //   console.log("bye");
  // }
  // function hiFn(){
  //   console.log("hi");
  //   return byFn;
  // }
  // useEffect(hiFn,[]);
  useEffect(() => {
    console.log("hi");
    return () => console.log("bye");
  }, []);
  return <h1>Hello</h1>;
  // 위 과정과 같음
  //   useEffect(
  //     function(){
  //       console.log("hi");
  //       return function(){
  //         console.log("bye");
  //       };
  //     },[]);

  // }
  // component는 jsx를 return하는 함수
  // componenet 생성,제거가 반복되어 한번이 아닌 여러번 실행
  // cleanup fun: component 가 제거 될때 실행, 제거 때 실행은 제거함수의 반환값으로 설정
  // 리렌더링->이전 이팩트 클린업->새로운 이팩트 실행, 자주 사용x
}
function App() {
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing((prev) => !prev);
  return (
    <div>
      {showing ? <Hello /> : null}
      {/* 생성, 제거 */}
      <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
    </div>
  );
}
