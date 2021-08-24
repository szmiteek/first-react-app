import React from "react";
import Table from "./Table";
const Title = ({ index, title, deleteTitles }) => {
  return (
    <>
      <h2>{title}</h2>
      <Table deleteTitles={deleteTitles} index={index} />
    </>
  );
};

export default Title;
