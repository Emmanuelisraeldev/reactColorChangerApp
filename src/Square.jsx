import React from "react";

const Square = ({ colorValue, hexValue, isDarkText }) => {
  return (
    <section
      className="square"
      style={{
        backgroundColor: colorValue,
        color: isDarkText ? "#000" : "#FFF"
      }}
    >
      <p>{colorValue ? colorValue : "Empty value"}</p>
      <p>{hexValue ? hexValue : null}</p>
    </section>
  );
};

Square.defaultProp = {
  colorValue: "Empty Color value"
};

export default Square;
