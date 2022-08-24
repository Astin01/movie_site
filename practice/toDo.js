import { useState } from "react";

function App() {
  const [toDo, setToDo] = useState("");
  // state를 직접적으로 수정x , toDo="",todo.push
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === "") {
      return;
    }
    setToDos((currentArray) => [...currentArray, toDo]);
    // ... 배열의 요소들 반환,currentArr는 settodos의 argu로 그 값은 todos이다
    setToDo("");
    // 2가지 방법 ,값보내기,함수보내기

    // map array의 item을 원하는 것으로 바꾸는 역할, item수만큼 실행,argu로 현재item
  };
  console.log(toDos);
  return (
    <div>
      <h1>My To Dos({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={toDo}
          type="text"
          placeholder="please write your toDo"
        ></input>
        <button>Add to Do</button>
      </form>
      <hr />
      <ul>
        {toDos.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      {/* hr 주제구분,선 */}
      {/* 같은 컴포list를 렌더때 key라는prop필요,react가 기본적list있는 모든item인식때문 */}
      {/* string으로 된 todo가 map통해react element(일반객체)로 이루어진 배열이 됨 */}
    </div>
  );
}

export default App;
