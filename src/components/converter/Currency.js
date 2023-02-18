import React from "react";

export default function Currency(props) {
  const {
    currencyOptions,
    selectedCurrency,
    onChangeCurrency,
    onChangeAmount,
    amount,
  } = props;

  return (
    <div>
      <input
        type="number"
        className="input"
        value={amount}
        onChange={onChangeAmount}
      />
      <select value={selectedCurrency} onChange={onChangeCurrency}>
        {React.Children.toArray(
          currencyOptions.map((option, key) => (
            <option key={key} value={option}>
              {option}
            </option>
          ))
        )}
      </select>
    </div>
  );
}
