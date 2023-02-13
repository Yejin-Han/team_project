import { useContext } from "react";
import { CalcContext } from "./CalcContext";

const getStyleName = (btn) => {
  const symbolClass = {
    "(": "opt",
    ")": "opt",
    C: "opt",
    del: "opt",
    "%": "opt",
    "𝓍²": "opt",
    "√𝓍": "opt",
    "÷": "opt",
    x: "opt",
    "-": "opt",
    "+": "opt",
    "=": "equals",
  };
  return symbolClass[btn];
};

const Keypads = ({ value }) => {
  const { calc, setCalc } = useContext(CalcContext);
  const numClick = () => {
    const valueStr = value.toString();
    let numValue;
    if (valueStr === "0" && calc.num === 0) {
      numValue = "0";
    } else {
      numValue = Number(calc.num + valueStr);
    }
    setCalc({
      ...calc,
      num: numValue,
      exp: calc.num ? calc.num + numValue : calc.res + numValue,
    });
  };
  const resetClick = () => {
    setCalc({
      sign: "",
      num: 0,
      res: 0,
      exp: 0,
    });
  };
  const percentClick = () => {
    setCalc({
      num: calc.num / 100,
      res: calc.res / 100,
      sign: "",
      exp: calc.num ? calc.num + "÷100" : calc.res + "÷100",
    });
  };
  const squareClick = () => {
    setCalc({
      num: calc.num ** 2,
      res: calc.res ** 2,
      sign: "",
      exp: calc.num ? calc.num + "^2" : calc.res + "^2",
    });
  };
  const sqrtClick = (e) => {
    setCalc({
      num: Number(Math.sqrt(calc.num).toFixed(10)),
      res: Number(Math.sqrt(calc.res).toFixed(10)),
      sign: "",
      exp: calc.num ? calc.num + value : calc.res + value,
    });
  };
  const signClick = () => {
    setCalc({
      sign: value,
      res: !calc.res && calc.num ? calc.num : calc.res,
      num: 0,
      exp: !calc.res && calc.num ? calc.num + value : calc.res + value,
    });
  };
  const invertClick = () => {
    setCalc({
      num: calc.num ? calc.num * -1 : 0,
      res: calc.res ? calc.res * -1 : 0,
      sign: "",
      exp: calc.num ? calc.num + value : calc.res + value,
    });
  };
  const dotClick = () => {
    setCalc({
      ...calc,
      num: !calc.num.toString().includes(".") ? calc.num + value : calc.num, //screen에 .이 없으면 .을 붙여주고 아니면 그대로
      exp: calc.num ? calc.num + value : calc.res + value,
    });
  };
  const equalsClick = () => {
    if (calc.res && calc.num) {
      const math = (a, b, sign) => {
        const result = {
          "÷": (a, b) => a / b,
          x: (a, b) => a * b,
          "-": (a, b) => a - b,
          "+": (a, b) => a + b,
        };
        return result[sign](a, b);
      };
      setCalc({
        res: math(calc.res, calc.num, calc.sign),
        sign: "",
        num: 0,
        exp: calc.num ? calc.num + value : calc.res + value,
      });
    }
  };
  const handleClick = () => {
    const clickedValue = {
      //"(": leftParenClick,
      //")": rightParenClick,
      C: resetClick,
      //del: delClick,
      "%": percentClick,
      "𝓍²": squareClick,
      "√𝓍": sqrtClick,
      "÷": signClick,
      x: signClick,
      "-": signClick,
      "+": signClick,
      "+/-": invertClick,
      ".": dotClick,
      "=": equalsClick,
    };
    if (clickedValue[value]) {
      return clickedValue[value]();
    } else {
      return numClick();
    }
  };

  return (
    <button className={`${getStyleName(value)} btn`} onClick={handleClick}>
      {value}
    </button>
  );
};

export default Keypads;
/* https://wikimedia.org/api/rest_v1/media/math/render/svg/d62b24be305beff66cba9bfbcc01a362ba390f44 */
