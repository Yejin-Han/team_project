import React, { useEffect, useState } from "react";
import Currency from "./Currency";

const BASE_URL = "https://api.exchangerate.host/latest";

function Converter() {
  const [currencyOptions, setCurrencyOptions] = useState([]);
  useEffect(() => {
    fetch(BASE_URL)
      .then((res) => res.json())
      .then((data) => {
        const firstCurrency = Object.keys(data.rates)[0];
        setCurrencyOptions([data.base, ...Object.keys(data.rates)]);
        setFromCurrency(data.base);
        setToCurrency(firstCurrency);
        setExchangeRate(data.rates[firstCurrency]);
      });
  }, []);

  return (
    <>
      <h1>환율계산기</h1>
      <Currency currencyOptions={currencyOptions} />
      <div className="con_equals">=</div>
      <Currency currencyOptions={currencyOptions} />
    </>
  );
}

export default Converter;
