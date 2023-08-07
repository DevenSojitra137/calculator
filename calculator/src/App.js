import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [val, setval] = useState("");
  const [sign, setsign] = useState("");
  const [fisrt, setfirst] = useState(0);

  const back = () => {
    setval(val.slice(0, -1));
  };
  const handle = (e) => {
    setval(val + e.target.value);
  };
  const signhandler = (e) => {
    setfirst(val);

    if (e.target.value == "+") {
      setsign(e.target.value);
    }
    if (e.target.value == "-") {
      setsign(e.target.value);
    }
    if (e.target.value == "*") {
      setsign(e.target.value);
    }
    if (e.target.value == "/") {
      setsign(e.target.value);
    }

    setval("");
  };

  const ans = () => {
    if (sign == "+") {
      var ans = parseInt(fisrt) + parseInt(val);
    }
    if (sign == "-") {
      var ans = parseInt(fisrt) - parseInt(val);
    }
    if (sign == "*") {
      var ans = parseInt(fisrt) * parseInt(val);
    }
    if (sign == "/") {
      var ans = parseInt(fisrt) / parseInt(val);
    }

    setval(ans)
  };
  return (
    <>
      <center>
        <input type="text" value={val}/>
      </center>

      <center>
        <div className="btn1">
          <button value="1" onClick={handle}>
            1
          </button>
          <button value="2" onClick={handle}>
            2
          </button>
          <button value="3" onClick={handle}>
            3
          </button>
          <button value="4" onClick={handle}>
            4
          </button>
          <button value="5" onClick={handle}>
            5
          </button>
          <button value="6" onClick={handle}>
            6
          </button>
          <button value="7" onClick={handle}>
            7
          </button>
          <button value="8" onClick={handle}>
            8
          </button>
          <button value="9" onClick={handle}>
            9
          </button>
          <button value="+" onClick={signhandler}>
            +
          </button>
          <button value="-" onClick={signhandler}>
            -
          </button>
          <button value="*" onClick={signhandler}>
            *
          </button>
          <button value="/" onClick={signhandler}>
            /
          </button>
          <button onClick={back}>c</button>
          <button onClick={ans}>=</button>
        </div>
      </center>
    </>
  );
}

export default App;
