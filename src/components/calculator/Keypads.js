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
    let resValue;
    if (valueStr === "0" && calc.res === 0) {
      resValue = "0";
    } else {
      resValue = Number(calc.res + valueStr);
    }
    setCalc({
      ...calc,
      res: resValue,
      exp: calc.exp.toString().includes("=")
        ? valueStr
        : calc.exp !== 0
        ? calc.exp + valueStr
        : valueStr,
    });
  };
  const resetClick = () => {
    setCalc({
      sign: "",
      res: 0,
      exp: 0,
    });
  };
  const delClick = () => {
    setCalc({
      res: calc.res ? calc.res.slice(0, -1) : 0,
      sign: "",
      exp: calc.res ? calc.res.slice(0, -1) : 0,
    });
  };
  const percentClick = () => {
    setCalc({
      res: calc.res / 100,
      sign: "",
      exp: calc.res ? calc.res + "÷100" : 0,
    });
  };
  const squareClick = () => {
    setCalc({
      res: calc.res ** 2,
      sign: "",
      exp: calc.res ? calc.res + "^2" : 0,
    });
  };
  const sqrtClick = (e) => {
    setCalc({
      res: Number(Math.sqrt(calc.res).toFixed(10)),
      sign: "",
      exp: calc.res ? "√" + calc.res : 0,
    });
  };
  const signClick = () => {
    setCalc({
      sign: value,
      res:
        !calc.res && calc.exp
          ? Number(calc.exp.toFixed(10))
          : Number(calc.res.toFixed(10)),
      exp: !calc.res && calc.exp ? calc.exp + value : calc.res + value,
    });
  };
  const invertClick = () => {
    setCalc({
      res: calc.res ? calc.res * -1 : 0,
      sign: "",
      exp: calc.res ? calc.res + "* (-1)" : 0,
    });
  };
  const dotClick = () => {
    setCalc({
      ...calc,
      res: !calc.exp.toString().includes(".") ? calc.res + value : calc.res, //screen에 .이 없으면 .을 붙여주고 아니면 그대로
      exp: calc.exp ? calc.exp + value : value,
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
        res: math(calc.res, calc.exp, calc.sign),
        sign: "",
        exp: calc.exp ? calc.exp + value : value,
      });
    }
  };
  const handleClick = () => {
    const clickedValue = {
      //"(": leftParenClick,
      //")": rightParenClick,
      C: resetClick,
      del: delClick,
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
