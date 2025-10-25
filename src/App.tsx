import { useState } from 'react'
import './App.css'

function App() {
  const [input, setInput] = useState('0');
  const [isResult, setIsResult] = useState(false);

  function subtract() {
    let result = 0;
    let tokens = input.split('-');
    tokens.forEach((token, idxToken) => {
      token.trim();
      if (idxToken === 0) {
        result += Number(token);
      } else {
        result -= Number(token);
      }
    })
    return result;
  }

  function add() {
    let result = 0;
    let tokens = input.split('+');
    tokens.forEach((token) => {
      token.trim();
      result += Number(token);
    })
    return result;
  }

  function multiply() {
    let result = 0;
    let tokens = input.split('\u00d7');
    tokens.forEach((token, idxToken) => {
      token.trim();
      if (idxToken === 0) {
        result = Number(token);
      } else {
        result *= Number(token);
      }
    })
    return result;
  }

  function divide() {
    let result = 0;
    let tokens = input.split('\u00f7');
    tokens.forEach((token, idxToken) => {
      token.trim();
      if (idxToken === 0) {
        result = Number(token);
      } else {
        result /= Number(token);
      }
    })
    return result;
  }

  function calculate() {
    let result = 0;

    if (input.includes('-')) result = subtract();
    if (input.includes('+')) result = add();
    if (input.includes('\u00d7')) result = multiply();
    if (input.includes('\u00f7')) result = divide();
    
    setInput(result.toString());
    setIsResult(true);
  }

  function isOperator(string: string): boolean {
    return string === '+' ||
           string === '-' || 
           string === '\u00d7' ||
           string === '\u00f7';
  }

  function onClick(id: string): void {
    let temp = input;
    if (isResult || temp === '0') {
      if (!isOperator(id)) temp = '';
      setIsResult(false);
    }
    if (id === '=') {
      calculate();
    } else if (isOperator(id)) {
      setInput(temp + ` ${id} `)
    } else {
      setInput(temp + id);
    }
  }

  return (
    <>
      <div className="container">
        <div className="input">
          {input}
        </div>
        <div className="row">
          <div id="7" className="key number" onClick={() => onClick("7")}>
            7
          </div>
          <div id="8" className="key number" onClick={() => onClick("8")}>
            8
          </div>
          <div id="9" className="key number" onClick={() => onClick("9")}>
            9
          </div>
          <div id="&times" className="key operator" onClick={() => onClick("\u00d7")}>
            &times;
          </div>
        </div>
        <div className="row">
          <div id="4" className="key number" onClick={() => onClick("4")}>
            4
          </div>
          <div id="5" className="key number" onClick={() => onClick("5")}>
            5
          </div>
          <div id="6" className="key number" onClick={() => onClick("6")}>
            6
          </div>
          <div id="&minus" className="key operator" onClick={() => onClick("-")}>
          &minus;
          </div>
        </div>
        <div className="row">
          <div id="1" className="key number" onClick={() => onClick("1")}>
            1
          </div>
          <div id="2" className="key number" onClick={() => onClick("2")}>
            2
          </div>
          <div id="3" className="key number" onClick={() => onClick("3")}>
            3
          </div>
          <div id="+" className="key operator" onClick={() => onClick("+")}>
            +
          </div>
        </div>
        <div className="row">
          <div id="0" className="key number" onClick={() => onClick("0")}>
            0
          </div>
          <div id="." className="key number" onClick={() => onClick(".")}>
            .
          </div>
          <div id="&divide" className="key operator" onClick={() => onClick("\u00f7")}>
            &divide;
          </div>
          <div id="=" className="key operator" onClick={() => onClick("=")}>
            = 
          </div>
        </div>
      </div>
    </>
  )
}

export default App

