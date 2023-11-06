import logo from "./logo.svg";
import "./App.css";

//스타일 정의 해서 사용했고,
//바로 사용도 가능함
const style = {
  backgroundColor : "red",
  color : "Yellow",
  fontSize: "30px"
};

const name = "강정현";

function App() {
  return (
    <div style= {{
      backgroundColor : "red",
      color : "Yellow",
      fontSize: "30px"
    }}>
      {name === "강정현" ? <h1>강정현이 맞네</h1> : <h1>강정현이 아니네</h1>}
    </div>
  );
}

export default App;

