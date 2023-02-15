import React from "react";

export default function Currency(props) {
  const { currencyOptions } = props;

  return (
    <div>
      <input type="number" className="input" />
      <select>
        {React.Children.toArray(
          currencyOptions.map((option, key) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))
        )}
      </select>
    </div>
  );
}
