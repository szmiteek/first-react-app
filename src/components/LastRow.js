import React from "react";

const LastRow = ({ rows }) => {
  let lastCells = rows.map((row) => {
    return row.lastCell;
  });
  const sum = lastCells.reduce(function (a, b) {
    return a + b;
  });
  return (
    <>
      <tr>
        <th>SUMA</th>
        <th></th>
        <th></th>
        <th>{sum.toFixed(3)}</th>
      </tr>
    </>
  );
};

export default LastRow;
