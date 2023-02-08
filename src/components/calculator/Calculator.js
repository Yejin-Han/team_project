import React from "react";
import { useNavigate } from "react-router-dom";
import "./Calculator.style.scss";
import Screen from "./Screen";
import KeypadsWrapper from "./KeypadsWrapper";
import Keypads from "./Keypads";
import CalcProvider from "./CalcContext";

const Values = [
  ["(", ")", "C", "del"],
  ["%", "𝓍²", "√𝓍", "÷"],
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
          <div className="calc_header">
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
