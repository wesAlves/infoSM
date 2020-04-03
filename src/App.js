import React, { Component } from "react";
import "./App.css";
import ScrollDialog from "./components/boxes";
import data from "./InfoData.json";
import "./styles/styles.scss";
import Svg from "./components/svg";
import container, { Container } from "@material-ui/core";
import { Fragment } from "react";

class App extends Component {
  render() {
    return (
      <div>
        <Container fixed maxWidth="lg">
          <div className="container container--box">
            {data.map((conteudos, index) => {
              return (
                <p
                  className={[conteudos.class, conteudos.type].join(" ")}
                  style={{ gridArea: conteudos.position }}
                >
                  {conteudos.content.sim == conteudos.content.nao ? (
                    <ScrollDialog
                      title={conteudos.title}
                      content={conteudos.content.main}
                      clsName = "MainBt"
                      contPos = {conteudos.mainPos}
                    />
                  ) : (
                    <Fragment className="diamond">
                      <ScrollDialog
                        title="Sim"
                        content={conteudos.content.sim}
                      clsName = "yes"
                      contPos = {conteudos.yesPos}
                      />
                      <ScrollDialog
                        title={conteudos.title}
                        content={conteudos.content.main}
                      clsName = "MainBt"
                      contPos = {conteudos.mainPos}
                      />
                      <ScrollDialog
                        title="Não"
                        content={conteudos.content.nao}
                      clsName = "no"
                      contPos = {conteudos.noPos}
                      />
                    </Fragment>
                  )}
                </p>
              );
            })}
          </div>
        </Container>
      </div>
    );
  }
}

export default App;
