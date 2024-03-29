import { useState, useEffect } from "react";
import axios from "axios";
import Convertor from "./component/Convertor";
import { Card } from "antd";
import "./Currency.style.scss";

const IMPORT_URL = "https://api.exchangerate.host/latest";

function Currency() {
  const [currencyOptions, setCurrencyOptions] = useState([]);
  const [amount, setAmount] = useState("");
  const [firstCurrency, setFirstCurrency] = useState("");
  const [convertTo, setConvertTo] = useState("");
  const [result, setResult] = useState("");
  const [date, setDate] = useState("");

  useEffect(() => {
    fetch(IMPORT_URL)
      .then((res) => res.json())
      .then((data) => {
        const rates = Object.keys(data.rates);
        setConvertTo("KRW");
        setCurrencyOptions([...rates, data.base]);
        setFirstCurrency(data.base);
      });
  }, []);

  useEffect(() => {
    const numericAmount = Number(amount);
    if (isNaN(numericAmount)) {
      return;
    } else {
      const getCurrencyConverter = async () => {
        const response = await axios.get(
          `https://api.exchangerate.host/latest?base=${firstCurrency}&symbols=${convertTo}`
        );
        setDate(response.data.date);
        setResult((response.data.rates[convertTo] * numericAmount).toFixed(4));
      };
      getCurrencyConverter();
    }
  }, [amount, firstCurrency, convertTo]);

  function handleAmountChange(e) {
    setAmount(e.target.value);
  }

  function handleCurrencyChange(e) {
    setConvertTo(e.target.value);
  }

  function swapHandler(e) {
    e.preventDefault();
    setConvertTo(firstCurrency);
    setFirstCurrency(convertTo);
  }

  return (
    <div className="App">
      <Convertor
        currencyOptions={currencyOptions}
        firstCurrency={firstCurrency}
        onChangeCurrency={handleCurrencyChange}
        onChangeAmount={handleAmountChange}
        amount={amount}
        result={result}
        date={date}
        onSwap={swapHandler}
        Card={Card}
      />
    </div>
  );
}

export default Currency;
