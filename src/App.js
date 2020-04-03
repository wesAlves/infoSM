import React, { Component } from "react";
import "./App.css";
import ScrollDialog from "./components/boxes";
import data from "./InfoData.json";
import "./styles/styles.scss";
import Svg from "./components/svg";
import container, { Container } from '@material-ui/core';

class App extends Component {
  render() {
    return (
      <div>
        <Container fixed maxWidth= 'lg'>
        
        <div className="container container--box">
          {data.map((conteudos, index) => {
            return (
              <h1
                className={[conteudos.class, conteudos.type].join(" ")}
                style={{ gridArea: conteudos.position }}
              >
                <ScrollDialog
                  title={conteudos.title}
                  main={conteudos.content.main}
                  yes = {conteudos.content.sim}
                  no = {conteudos.content.nao}
                  disabled={conteudos.disabled}
                />
              </h1>
            );
          })}
        </div>
       
        </Container>
      </div>
    );
  }
}

export default App;
