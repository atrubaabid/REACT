import logo from './logo.svg';
import './App.css';

function App() {

  let myname = "Syeda Atruba"
  let arr = [10, 20, 30, 40, 50]
  let obj = {
    student: "Atruba",
    program: "BSCS",
  }

  return (
    <div className="App">
      
      {/* html */}

      <h1>{myname}</h1>

      {arr.map((v) => {
        return (
          <div>{v + 2}</div>
        )
      })}

      <div>{obj.student}</div>
      <div>{obj.program}</div>



      {/* css */}

      <h1 style={{ color: "red", backgroundColor: "yellow" }}>{myname}</h1>

      <h1 className='main'>{myname}</h1>


    </div>
  );
}

export default App;
