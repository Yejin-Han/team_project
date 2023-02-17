import { useContext } from "react";
import { CalcContext } from "./CalcContext";

const getStyleName = (btn) => {
  const symbolClass = {
    "%": "opt",
    π: "opt",
    C: "opt",
    del: "opt",
    "1/𝓍": "opt",
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
      exp: calc.exp ? valueStr : calc.exp + valueStr,
      /* calc.exp.toString().includes("=") ? valueStr : calc.exp !== 0 ? calc.exp + valueStr : valueStr, */
    });
  };
  const percentClick = () => {
    setCalc({
      num: calc.num / 100,
      res: calc.res / 100,
      sign: "",
      exp: calc.exp ? calc.num + "÷100" : 0,
    });
  };
  const piClick = () => {
    setCalc({
      num: calc.num ? (calc.num * Math.PI).toFixed(10) : Math.PI.toFixed(10),
      res: calc.res ? (calc.res * Math.PI).toFixed(10) : Math.PI.toFixed(10),
      sign: "",
      exp: calc.num ? calc.num + value : value,
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
  const delClick = () => {
    setCalc({
      num: calc.num ? calc.num.toString().slice(0, -1) : 0,
      res: calc.res ? calc.res.toString().slice(0, -1) : 0,
      sign: "",
      exp: calc.exp ? calc.exp.toString().slice(0, -1) : 0,
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
      exp: calc.num ? "√" + calc.num : "√" + calc.res,
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
      exp: calc.num ? calc.num + "* (-1)" : calc.res + "* (-1)",
    });
  };
  const dotClick = () => {
    setCalc({
      ...calc,
      num: !calc.num.toString().includes(".") ? calc.num + value : calc.num, //screen에 .이 없으면 .을 붙여주고 아니면 그대로
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
        res: Number(math(calc.res, calc.num, calc.sign).toFixed(10)),
        sign: "",
        num: 0,
        exp: calc.exp ? calc.exp + value : value,
      });
    }
  };
  const handleClick = () => {
    const clickedValue = {
      "%": percentClick,
      π: piClick,
      C: resetClick,
      del: delClick,
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
