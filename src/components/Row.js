import React, { useEffect } from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import Button from "@material-ui/core/Button";
import Input from "@material-ui/core/Input";
import "../styles/Row.css";

const Row = ({
  deleteRow,
  value,
  name,
  index,
  lastCellHandler,
  lastCellValue,
  inputValue,
  RowInputHandler,
}) => {
  const lastCell = inputValue * value;
  useEffect(() => lastCellHandler(index, lastCell), [inputValue]);
  return (
    <tr>
      <td>{name}</td>
      <td>{value}</td>
      <td>
        <Input
          onChange={(e) => RowInputHandler(index, e.target.value)}
          value={inputValue}
          type="number"
          placeholder="podaj wartość"
        ></Input>
      </td>
      <td>{lastCellValue.toFixed(3)}</td>

      <td>
        <Button
          onClick={() => deleteRow(index)}
          variant="contained"
          color="secondary"
          startIcon={<DeleteIcon />}
        >
          USUŃ
        </Button>
      </td>
    </tr>
  );
};
export default Row;
