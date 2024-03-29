import React from "react";
import { useNavigate } from "react-router-dom";
import "./Calculator.style.scss";
import Screen from "./component/Screen";
import KeypadsWrapper from "./component/KeypadsWrapper";
import Keypads from "./component/Keypads";
import CalcProvider from "./component/CalcContext";

const Values = [
  ["%", "π", "C", "del"],
  ["1/𝓍", "𝓍²", "√𝓍", "÷"],
  ["7", "8", "9", "x"],
  ["4", "5", "6", "-"],
  ["1", "2", "3", "+"],
  ["+/-", "0", ".", "="],
];

const Calculator = () => {
  const navigate = useNavigate();
  return (
    <CalcProvider>
      <div id="wrapper">
        <div className="calc_top">
          <div className="top calc_header">
            <h2>계산기</h2>
            <button
              type="button"
              onClick={() => {
                navigate("/");
              }}
            >
              ✕
            </button>
          </div>
          <Screen />
        </div>
        <KeypadsWrapper>
          {Values.flat().map((btn, idx) => (
            <Keypads value={btn} key={idx} />
          ))}
        </KeypadsWrapper>
      </div>
    </CalcProvider>
  );
};

export default Calculator;
