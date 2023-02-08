import React from "react";
import { useNavigate } from "react-router-dom";

const Main = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div
        className="calculator"
        onClick={() => {
          navigate("/calculator");
        }}
      >
        계산기
      </div>
      <div
        className="memo"
        onClick={() => {
          navigate("/memo");
        }}
      >
        메모
      </div>
      <div
        className="calendar"
        onClick={() => {
          navigate("/calendar");
        }}
      >
        달력
      </div>
    </div>
  );
};

export default Main;
