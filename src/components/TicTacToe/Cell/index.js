import React from "react";

const Cell = ({num, value, handleClick}) => {
  return <td onClick={() => handleClick(num)}>{value}</td>;
};

export default Cell;