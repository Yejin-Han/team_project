import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Currency.style.scss";

const Convertor = (props) => {
  const navigate = useNavigate();
  const {
    currencyOptions,
    firstCurrency,
    onChangeCurrency,
    onChangeAmount,
    amount,
    result,
    date,
    Card,
    onSwap,
  } = props;

  const [convertTo, setConvertTo] = useState(currencyOptions[1]);

  const changeInputHandler = (e) => {
    onChangeAmount(e);
  };

  const selectHandler = (e) => {
    setConvertTo(e.target.value);
    onChangeCurrency(e);
  };

  const swapHandler = (e) => {
    onSwap(e);
    setConvertTo(firstCurrency);
  };

  const onClick = () => {
    navigate("/");
  };

  return (
    <div className="container">
      <div className="row">
        <div className="row-bg">
          <Card title="💴 환율계산기" extra={<a onClick={onClick}>✕</a>}>
            <h5>
              {amount} {firstCurrency} 의 {convertTo} 환율 계산 결과
            </h5>
            <h3>
              {amount === "" ? "0" : result === "" ? "계산중..." : result}
            </h3>
            <p>As of {date === "" ? "" : date}</p>
            <div className="in-op">
              <div>
                <form>
                  <input
                    type="number"
                    value={amount}
                    onChange={changeInputHandler}
                  />
                  <select
                    name="base"
                    value={firstCurrency}
                    onChange={(e) => onChangeCurrency(e)}
                  >
                    {currencyOptions.map((currency, key) => (
                      <option key={key} value={currency}>
                        {currency}
                      </option>
                    ))}
                  </select>
                </form>
                <form>
                  <input
                    readOnly
                    value={
                      amount === ""
                        ? "0"
                        : result === null
                        ? "계산중..."
                        : result
                    }
                  />
                  <select
                    name="convertTo"
                    value={convertTo}
                    onChange={selectHandler}
                  >
                    {currencyOptions.map((currency, key) => (
                      <option key={key} value={currency}>
                        {currency}
                      </option>
                    ))}
                  </select>
                </form>
              </div>
              <div>
                <h1
                  className="swap"
                  onClick={swapHandler}
                  style={{ cursor: "pointer" }}
                >
                  ⇵
                </h1>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Convertor;
