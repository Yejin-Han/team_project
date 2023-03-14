import React, { useLayoutEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./Main.style.scss";

const createStars = () => {
  const starsContainer = useRef(null);
  const starRefs = useRef([]);

  useLayoutEffect(() => {
    const stars = 800;
    const r = 800;
    for (let i = 0; i < stars; i++) {
      const star = document.createElement("div");
      star.classList.add("star");
      starsContainer.current.appendChild(star);
      starRefs.current.push(star);
    }
    starRefs.current.forEach((star) => {
      const s = 0.2 + Math.random() * 1;
      const curR = r + Math.random() * 300;
      star.style.transformOrigin = `0 0 ${curR}px`;
      star.style.transform = `translate3d(0,0,-${curR}px) rotateY(${
        Math.random() * 360
      }deg) rotateX(${Math.random() * -50}deg) scale(${s},${s})`;
    });
  }, []);

  return <div className="stars" ref={starsContainer}></div>;
};

const Main = () => {
  const navigate = useNavigate();
  return (
    <>
      {createStars()}
      <div id="main_wrapper">
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
            className="menu_wrapper account"
            onClick={() => {
              navigate("/");
            }}
          >
            <div className="menu"></div>
            <h2>가계부(준비중)</h2>
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
            className="menu_wrapper clock"
            onClick={() => {
              navigate("/");
            }}
          >
            <div className="menu"></div>
            <h2>시계(준비 중)</h2>
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
            className="menu_wrapper unknown"
            onClick={() => {
              navigate("/");
            }}
          >
            <div className="menu"></div>
            <h2>미정</h2>
          </div>
          <div
            className="feedback"
            onClick={() => {
              navigate("/");
            }}
          >
            <button type="button">별점 남기기</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
