import React, { Component } from "react";
import "./App.css";
import ScrollDialog from "./components/boxes";
import data from "./InfoData.json";
import './styles/styles.scss'

class App extends Component {
  render() {
    return (
      <div className = "container">
        {data.map((conteudos, index) => {
          return (
            <h1 className = {[conteudos.class, conteudos.type ].join(' ')} style={{gridArea: conteudos.class}}>
              
              <ScrollDialog
                title={conteudos.title}
                content={conteudos.content}
              />
            </h1>
          );
        })}
      </div>
    );
  }
}

export default App;
