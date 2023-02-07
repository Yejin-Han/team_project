import React from "react";
import { useNavigate } from "react-router-dom";
import "./Calculator.style.scss";
import Screen from "./Screen";
import Keypads from "./Keypads";
import CalcProvider from "./CalcContext";

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
        <Keypads />
      </div>
    </CalcProvider>
  );
};

export default Calculator;
