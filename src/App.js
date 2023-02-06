import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Main from "./components/Main";
import Calculator from "./components/calculator/Calculator";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/calculator" element={<Calculator />} />
      </Routes>
    </div>
  );
};

export default App;
