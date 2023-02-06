import React from "react";
import { useNavigate } from "react-router-dom";
import Screen from "./Screen";
import Keypads from "./Keypads";
import "./Calculator.style.scss";

const Calculator = () => {
  const navigate = useNavigate();
  return (
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
  );
};

export default Calculator;
