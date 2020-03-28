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
        <div className="container container--line">
            <Svg gArea='3 / 2 / 2 / auto '></Svg>
            <Svg pt='0,25 75, 25 75, 25 75,125' gArea='2 / 2 / auto / 2'></Svg>
        </div>
        <div className="container container--box">
          {data.map((conteudos, index) => {
            return (
              <h1
                className={[conteudos.class, conteudos.type].join(" ")}
                style={{ gridArea: conteudos.class }}
              >
                <ScrollDialog
                  title={conteudos.title}
                  content={conteudos.content}
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
