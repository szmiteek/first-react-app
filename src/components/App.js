import React, { Component } from "react";
import "../styles/App.css";
import Title from "./Title";

import Button from "@material-ui/core/Button";

class App extends Component {
  state = {
    titles: [],
  };
  appendTitle = () => {
    let title;
    do {
      title = prompt("Podaj nazwe tabeli");
      if (title === null) {
        return null;
      }
    } while (title === "" || title.startsWith(" "));
    this.setState({
      titles: [...this.state.titles, { title }],
    });
  };
  deleteTitles = (id) => {
    let titles = [...this.state.titles];
    titles.splice(id, 1);
    this.setState({
      titles: titles,
    });
  };

  render() {
    const style = {
      background: "linear-gradient(rgb(206, 114, 10), rgb(226, 45, 45)",
      borderRadius: 3,
      border: 0,
      color: "white",
      height: 42,
      padding: "0 30px",
      margin: "15px 0px 0px 30px",
    };

    return (
      <>
        <Button style={style} onClick={this.appendTitle}>
          DODAJ TABELE
        </Button>

        {this.state.titles.map((title, index) => (
          <Title
            deleteTitles={this.deleteTitles}
            title={title.title}
            key={index}
            index={index}
          ></Title>
        ))}
      </>
    );
  }
}
export default App;
