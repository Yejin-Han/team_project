import React from "react";
import { useNavigate } from "react-router-dom";

const Main = () => {
  const navigate = useNavigate();
  return (
    <div id="app_list">
      <div
        className="menu_wrapper memo"
        onClick={() => {
          navigate("/memo");
        }}
      >
        <div className="menu"></div>
        <h2>메모</h2>
      </div>
      <div
        className="menu_wrapper calendar"
        onClick={() => {
          navigate("/calendar");
        }}
      >
        <div className="menu"></div>
        <h2>달력</h2>
      </div>
      <div
        className="menu_wrapper paint"
        onClick={() => {
          navigate("/paint");
        }}
      >
        <div className="menu"></div>
        <h2>그림판</h2>
      </div>
      <div
        className="menu_wrapper calculator"
        onClick={() => {
          navigate("/calculator");
        }}
      >
        <div className="menu"></div>
        <h2>계산기</h2>
      </div>
      <div
        className="menu_wrapper currency"
        onClick={() => {
          navigate("/currency");
        }}
      >
        <div className="menu"></div>
        <h2>환율계산기</h2>
      </div>
      <div
        className="menu_wrapper weather"
        onClick={() => {
          navigate("/weather");
        }}
      >
        <div className="menu"></div>
        <h2>날씨</h2>
      </div>
    </div>
  );
};

export default Main;
