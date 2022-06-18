import React from "react";
import colorNames from "colornames";

const Input = ({
  colorValue,
  setColorValue,
  setHexValue,
  isDarkText,
  setIsDarkText
}) => {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <label>Add Color name </label>
      <input
        type="text"
        value={colorValue}
        placeholder="Add Color name"
        required
        onChange={(e) => {
          setColorValue(e.target.value);
          setHexValue(colorNames(e.target.value));
        }}
      />
      <button type="button" onClick={() => setIsDarkText(!isDarkText)}>
        Toggle text color
      </button>
    </form>
  );
};

export default Input;
