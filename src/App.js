import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Main from "./components/Main";
import Calculator from "./components/calculator/Calculator";
import Memo from "./components/memo/Memo";
import MainCalender from "./components/calendar/MainCalender";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/memo" element={<Memo />} />
        <Route path="/calendar" element={<MainCalender />} />
      </Routes>
    </div>
  );
};

export default App;
