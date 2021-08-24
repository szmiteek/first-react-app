import React, { Component } from "react";
import Row from "./Row";
import LastRow from "./LastRow";
import Button from "@material-ui/core/Button";
import Modal from "./Modal";

class Table extends Component {
  state = {
    data: [],
    rows: [],
    modalVisible: false,
    isVisible: true,
  };
  componentDidMount() {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => this.setState({ data: data.normy }));
  }
  appendRow = (name, value) => {
    this.setState({
      rows: [
        ...this.state.rows,
        { name: name, value: value, inputValue: 0, lastCell: 0 },
      ],
      modalVisible: false,
    });
  };
  lastCellHandler = (index, lastCellValue) => {
    let rows = this.state.rows.slice();
    rows[index].lastCell = lastCellValue;
    this.setState({
      rows: rows,
    });
  };
  RowInputHandler = (index, inputValue) => {
    let rows = this.state.rows.slice();
    rows[index].inputValue = inputValue;
    this.setState({
      rows: rows,
    });
  };
  visibleHandler = () => {
    this.setState({
      isVisible: !this.state.isVisible,
    });
  };
  deleteRow = (id) => {
    let rows = [...this.state.rows];
    rows.splice(id, 1);
    this.setState({
      rows: rows,
    });
  };
  toggleModal = (visible) => {
    this.setState({
      modalVisible: visible,
    });
  };

  getRowsElements = () => {
    return this.state.rows.map((row, index) => (
      <Row
        deleteRow={this.deleteRow}
        key={index}
        index={index}
        name={row.name}
        value={row.value}
        lastCellValue={row.lastCell}
        lastCellHandler={this.lastCellHandler}
        inputValue={row.inputValue}
        RowInputHandler={this.RowInputHandler}
      ></Row>
    ));
  };
  render() {
    const { modalVisible, isVisible, data } = this.state;
    const rows = this.getRowsElements();

    return (
      <>
        <Modal
          addRow={this.appendRow}
          data={data}
          click={this.toggleModal}
          visible={modalVisible}
        ></Modal>

        <button onClick={this.visibleHandler}>
          {isVisible ? "Ukryj" : "Pokaż"}
        </button>

        <button onClick={() => this.props.deleteTitles(this.props.index)}>
          Usuń tabele
        </button>
        {isVisible ? (
          <table>
            <tbody>
              <tr className="tableHead">
                <th>Nazwa</th>
                <th>Norma</th>
                <th>Grubość</th>
                <th>Obciążenie</th>
                <th>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => this.toggleModal(true)}
                  >
                    DODAJ MATERIAŁ
                  </Button>
                </th>
              </tr>
              {rows}
              {this.state.rows.length !== 0 ? (
                <LastRow rows={this.state.rows} />
              ) : null}
            </tbody>
          </table>
        ) : null}
      </>
    );
  }
}

export default Table;
