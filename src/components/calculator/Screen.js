import { useContext } from "react";
import { CalcContext } from "./CalcContext";

const Screen = () => {
  const { calc } = useContext(CalcContext);
  return (
    <div className="screen">
      <p className="expression">{calc.exp}</p>
      <p className="result">{calc.res}</p>
    </div>
  );
};

export default Screen;
