import { useContext } from "react";
import { CalcContext } from "./CalcContext";

const Values = [
  ["(", ")", "C", "del"],
  ["%", "𝓍²", "sqrt(x)", "÷"],
  ["7", "8", "9", "x"],
  ["4", "5", "6", "-"],
  ["1", "2", "3", "+"],
  ["+/-", "0", ".", "="],
];

const getStyleName = (btn) => {
  const symbolClass = {
    "(": "opt",
    ")": "opt",
    C: "opt",
    del: "opt",
    "%": "opt",
    "𝓍²": "opt",
    "sqrt(x)": "opt",
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
  const numClick = (e) => {
    const valueStr = value.toString();
    let numValue;
    if (valueStr === "0" && calc.num === 0) {
      numValue = "0";
    } else {
      numValue = Number(calc.num + valueStr);
    }
  };
  const btnClick = (e) => {};
  const resetClick = () => {
    setCalc({
      sign: "",
      num: 0,
      res: 0,
    });
  };
  const dotClick = () => {
    setCalc({
      ...calc,
      num: !calc.num.toString().includes(".") ? calc.num + value : calc.num, //screen에 .이 없으면 .을 붙여주고 아니면 그대로
    });
  };
  const handleClick = () => {
    const clickedValue = {
      //"(": leftParenClick,
      //")": rightParenClick,
      C: resetClick,
      //del: delClick,
      //"%": percentClick,
      //"𝓍²": powerClick,
      //"sqrt(x)": rootClick,

      ".": dotClick,
    };
    if (clickedValue[value]) {
      return clickedValue[value]();
    } else {
      numClick();
    }
  };

  return (
    <div className="keypads">
      {Values.flat().map((btn, idx) => (
        <button
          value={btn}
          key={idx}
          className={`${getStyleName(btn)} btn`}
          onClick={handleClick}
        >
          {btn}
        </button>
      ))}
    </div>
  );
};

export default Keypads;
/* https://wikimedia.org/api/rest_v1/media/math/render/svg/d62b24be305beff66cba9bfbcc01a362ba390f44 */
