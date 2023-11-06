import logo from './logo.svg';
import './App.css';

function App() {
  const clickE = () => {
    const NAME = document.querySelector("#name");
    const ID = document.querySelector("#id");
    const PW = document.querySelector("#pw");

    alert(`${NAME.value}`);
    alert(`${ID.value}`);
    alert(`${PW.value}`);
  }
  

  return (
    <div className='box'>
      <form>
        <div className='flexBox'><p>이름 : </p><input type='text' id='name'/></div>
        <div className='flexBox'><p>아이디 : </p><input type='text' id='id'/></div>
        <div className='flexBox'><p>비밀번호 : </p><input type='password' id='pw'/></div>

        <button onClick={clickE}>제출</button>
      </form>
    </div>
  );
}

export default App;
