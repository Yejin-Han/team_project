import React from "react";
import { useNavigate } from "react-router-dom";
import "./Calculator.style.scss";
import Screen from "./component/Screen";
import KeypadsWrapper from "./component/KeypadsWrapper";
import Keypads from "./component/Keypads";
import CalcProvider from "./component/CalcContext";

const Values = [
  ["%", "Ο", "C", "del"],
  ["1/π", "πΒ²", "βπ", "Γ·"],
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
            <h2>κ³μ°κΈ°</h2>
            <button
              type="button"
              onClick={() => {
                navigate("/");
              }}
            >
              β
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
