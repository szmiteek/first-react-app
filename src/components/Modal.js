import React, { useState } from "react";
import ReactDOM from "react-dom";
import List from "./List";
import Input from "@material-ui/core/Input";
import Background from "../images/closeButton.png";

const MODAL_STYLES = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)",
  backgroundColor: "rgb(49, 49, 49)",
  padding: "50px",
  zIndex: 1000,
  textAligne: "center",
};
const OVERLAY_STYLE = {
  position: "fixed",
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  backgroundColor: "black",
  zIndex: 1000,
};
const BUTTON_STYLES = {
  position: "fixed",
  top: 10,
  right: 10,
  backgroundImage: `url(${Background})`,
  backgroundColor: "rgb(49, 49, 49)",
  backgroundSize: "contain",
  paddingTop: 10,
  height: 35,
  width: 35,
  cursor: "pointer",
  borderRadius: 40,
  border: "none",
};
const Modal = ({ addRow, data, click, visible }) => {
  if (!visible) return null;

  const [filterData, setFilterData] = useState(data);

  const inputHandler = (e) => {
    if (e.target.value === "") {
      setFilterData(data);
    }
    let filter = data.filter((norma) =>
      norma.name.toLowerCase().startsWith(e.target.value.toLowerCase())
    );
    setFilterData(filter);
  };

  return ReactDOM.createPortal(
    <>
      <div style={OVERLAY_STYLE}>
        <div style={MODAL_STYLES}>
          <button style={BUTTON_STYLES} onClick={() => click(false)}></button>
          <Input
            type="text"
            onChange={inputHandler}
            placeholder="SZUKAJ"
          ></Input>
          <List click={addRow} data={filterData}></List>
        </div>
      </div>
    </>,
    document.getElementById("portal")
  );
};
export default Modal;
