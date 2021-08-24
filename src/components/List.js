import React from "react";
import "../styles/List.css";
import { FixedSizeList } from "react-window";

const List = ({ click, data }) => {
  const Row = ({ index, style }) => {
    const norma = data[index];
    return (
      <li
        style={style}
        onClick={() => click(norma.name, norma.value)}
        key={norma.id}
      >
        {norma.name}
      </li>
    );
  };
  return (
    <FixedSizeList
      className="list"
      height={200}
      width={500}
      itemCount={data.length}
      itemSize={60}
    >
      {Row}
    </FixedSizeList>
  );
};

export default List;
