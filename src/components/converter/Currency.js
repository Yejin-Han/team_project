import { useState, useEffect } from "react";
import axios from "axios";
import Convertor from "./component/Convertor";

const BASE_URL = "https://api.exchangerate.host/latest";

function Currency() {
  const [currencyOptions, setCurrencyOptions] = useState([]);
  const [amount, setAmount] = useState("");
  const [firstCurrency, setFirstCurrency] = useState("");
  const [convertTo, setConvertTo] = useState("");
  const [result, setResult] = useState("");
  const [date, setDate] = useState("");

  useEffect(() => {
    fetch(BASE_URL)
      .then((res) => res.json())
      .then((data) => {
        setFirstCurrency("KRW");
        setCurrencyOptions([data.base, ...Object.keys(data.rates)]);
      });
  }, []);

  useEffect(() => {
    if (isNaN(amount)) {
      return;
    } else {
      const getCurrencyConverter = async () => {
        const response = await axios.get(
          `https://api.exchangerate.host/latest?base=${firstCurrency}&symbols=${convertTo}`
        );
        setDate(response.data.date);
        setResult((response.data.rates[convertTo] * amount).toFixed(3));
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
      />
    </div>
  );
}

export default Currency;
