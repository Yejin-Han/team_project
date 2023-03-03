import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Main from "./components/Main";
import Calculator from "./components/calculator/Calculator";
import MainMemo from "./components/memo/MainMemo";
import MainCalender from "./components/calendar/MainCalender";
import Paint from "./components/paint/Paint";
import Currency from "./components/converter/Currency";
import Weather from "./components/weather/Weather";
import MemoStore from "./components/memo/store/memoStore";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/memo" element={<MainMemo store={new MemoStore()} />} />
        <Route path="/calendar" element={<MainCalender />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/paint" element={<Paint />} />
        <Route path="/currency" element={<Currency />} />
        <Route path="/weather" element={<Weather />} />
      </Routes>
    </div>
  );
};

export default App;
