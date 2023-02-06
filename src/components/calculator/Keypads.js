const Values = [
  ["(", ")", "C", "del"],
  ["%", "𝓍²", "sqrt(x)", "÷"],
  ["7", "8", "9", "x"],
  ["4", "5", "6", "-"],
  ["1", "2", "3", "+"],
  ["+/-", "0", ".", "="],
];

const Keypads = () => {
  return (
    <div className="keypads">
      {Values.flat().map((btn, idx) => (
        <button value={btn} key={idx} className="btn">
          {btn}
        </button>
      ))}
    </div>
  );
};

export default Keypads;
/* https://wikimedia.org/api/rest_v1/media/math/render/svg/d62b24be305beff66cba9bfbcc01a362ba390f44 */
