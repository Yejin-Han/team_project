import { useContext } from "react";
import { CalcContext } from "./CalcContext";

const getStyleName = (btn) => {
  const symbolClass = {
    "%": "opt",
    ฯ: "opt",
    C: "opt",
    del: "opt",
    "1/๐": "opt",
    "๐ยฒ": "opt",
    "โ๐": "opt",
    "รท": "opt",
    x: "opt",
    "-": "opt",
    "+": "opt",
    "=": "equals",
  };
  return symbolClass[btn];
};

const Keypads = ({ value }) => {
  const { calc, setCalc } = useContext(CalcContext);
  const equalsClick = () => {
    if (calc.res && calc.num) {
      const math = (a, b, sign) => {
        const result = {
          "รท": (a, b) => a / b,
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
      num:
        !calc.exp || calc.exp.toString().includes("=")
          ? Number(valueStr)
          : numValue,
      res: !calc.exp || calc.exp.toString().includes("=") ? 0 : calc.res,
      exp:
        !calc.exp || calc.exp.toString().includes("=")
          ? valueStr
          : calc.exp + valueStr,
    });
  };
  const percentClick = () => {
    setCalc({
      num: calc.num / 100,
      res: calc.res / 100,
      sign: "",
      exp: calc.exp ? calc.num + "รท100=" : 0,
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
    const expStr = calc.exp.toString();
    if (expStr.includes("=") || !calc.exp) {
      setCalc({
        num: 0,
        res: 0,
        sign: "",
        exp: 0,
      });
    } else if (
      expStr.substr(expStr.length - 1, 1) === "รท" ||
      expStr.substr(expStr.length - 1, 1) === "x" ||
      expStr.substr(expStr.length - 1, 1) === "-" ||
      expStr.substr(expStr.length - 1, 1) === "+"
    ) {
      setCalc({
        num: calc.num,
        res: calc.res,
        sign: "",
        exp: calc.exp.toString().slice(0, -1),
      });
    } else {
      setCalc({
        num: calc.num.toString().slice(0, -1),
        res: calc.res.toString().slice(0, -1),
        sign: "",
        exp: calc.exp.toString().slice(0, -1),
      });
    }
  };
  const fractionClick = () => {
    setCalc({
      num: (1 / calc.num).toFixed(10),
      res: (1 / calc.res).toFixed(10),
      sign: "",
      exp: calc.num ? "1รท" + calc.num + "=" : "1รท" + calc.res + "=",
    });
  };
  const squareClick = () => {
    setCalc({
      num: calc.num ** 2,
      res: calc.res ** 2,
      sign: "",
      exp: calc.num ? calc.num + "^2=" : calc.res + "^2=",
    });
  };
  const sqrtClick = () => {
    setCalc({
      num: Number(Math.sqrt(calc.num).toFixed(10)),
      res: Number(Math.sqrt(calc.res).toFixed(10)),
      sign: "",
      exp: calc.num ? "โ" + calc.num + "=" : "โ" + calc.res + "=",
    });
  };
  const signClick = () => {
    //๋ ๋ฏธ์์ด์ผ ์ผ๋จ ์น์ธ๊ฒ
    console.log(
      calc.exp.toString().includes("รท") ||
        calc.exp.toString().includes("x") ||
        calc.exp.toString().includes("-") ||
        calc.exp.toString().includes("+"),
      calc.num,
      calc.res,
      calc.exp
    );
    if (
      calc.exp.toString().includes("รท") ||
      calc.exp.toString().includes("x") ||
      calc.exp.toString().includes("-") ||
      calc.exp.toString().includes("+")
    ) {
      equalsClick();
    }
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
      exp: calc.num ? calc.num + "*(-1)=" : calc.res + "*(-1)=",
    });
  };
  const dotClick = () => {
    setCalc({
      ...calc,
      num: !calc.num.toString().includes(".") ? calc.num + value : calc.num, //screen์ .์ด ์์ผ๋ฉด .์ ๋ถ์ฌ์ฃผ๊ณ? ์๋๋ฉด ๊ทธ๋๋ก
      exp: calc.exp ? calc.exp + value : value,
    });
  };
  const handleClick = () => {
    const clickedValue = {
      "%": percentClick,
      ฯ: piClick,
      C: resetClick,
      del: delClick,
      "1/๐": fractionClick,
      "๐ยฒ": squareClick,
      "โ๐": sqrtClick,
      "รท": signClick,
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
