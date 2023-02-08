import { useContext } from "react";
import { CalcContext } from "./CalcContext";

const Screen = () => {
  const { calc } = useContext(CalcContext);
  return (
    <div className="screen">
      <p className="expression">{calc.num}</p>
      <p className="result">{calc.num ? calc.num : calc.res}</p>
    </div>
  );
};

export default Screen;
