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
                      label = {conteudos.content.main}
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
        <div className="container container--line">
            <Svg pt='115 37.5,245 37.5,245 182.50,0' gArea='1 / 1 / 2 / 2'></Svg>
            <Svg pt='115 37.5, 260 37.5, 0' gArea='2 / 1 / 2 / 2'></Svg>
            <Svg pt = '115 37.5, 360 37.5, 0' gArea='2 / 2'></Svg>
            
            <Svg pt='280 37.5,245 37.5,245 182.5, 0' gArea='1 / 4 / 1 / auto'></Svg>
            <Svg pt ='280 37.5,235 37.50, 0' gArea='2 / 4'></Svg>
            <Svg pt='127 37.5,127 150, 0' gArea='1 / 4'></Svg>
            <Svg pt='330, 37.5 150, 37.5' gArea='2 / 3 / auto / 4'></Svg>
            
            <Svg pt='127 37.5,127 150, 0' gArea='2 / 3 '></Svg>
            <Svg pt='127 37.5,127 100, 0' gArea='3 / 3'></Svg>
            <Svg pt='127 37.5, 127 150, 0' gArea='4 / 3'></Svg>
            <Svg pt='127 37.5,127 100, 0' gArea='5 / 3'></Svg>
            <Svg pt='127 37.5,127 150  , 0' gArea='6/ 3'></Svg>
            <Svg pt='127 37.5,127 130, 0' gArea='7 / 3'></Svg>
            <Svg pt='127 37.5,127 105, 0' gArea='8 / 3'></Svg>
            <Svg pt='35 37.5,35 140,0' gArea='9 / 2 '></Svg>
            
            <Svg pt='127 37.5,127 0,127 -195, 0' gArea='9 / 2'></Svg>
            <Svg pt='35 37.5, -40 37.5, -40 520,-10 520, 0' gArea='7 / 2'></Svg>
            <Svg pt='127 345, 127 37.5,260 37.5, 0' gArea='6 / 2 / 5 / 3'></Svg>
            <Svg pt ='127 105, -380 105, -380 140, 0' gArea='10 / 3'></Svg>
            <Svg pt ='40 37.5,-40 37.5, 0' gArea='9 / 3'></Svg>
            <Svg pt='127 37.5, 290 37.5, 0' gArea='10 / 2 '></Svg>

            
            <Svg pt='130 37.5,-10 37.5,0' gArea=' 5/ 4'></Svg>
            <Svg pt='-50 37.5,285 , 37.5 ' gArea='9 / 4 '></Svg>
            <Svg pt='-50 37.5, 135 37.5, 135 -60, 0' gArea='6 / 4' ></Svg>
            <Svg pt='-50 37.5, -10, 37.5' gArea='4 / 4'></Svg>
            <Svg pt ='127 205, 127 37.5, -25 37.5, 0' gArea='3 / 4'></Svg>
            <Svg pt='-50 800,300 800, 300 5, 265 5, 0' gArea='4 / 4 / 10 / 6'></Svg>
            

            <Svg pt='130 37.5,500 37.5, 0' gArea='11 / 1 '></Svg>
            <Svg pt='130 37.5,500 37.5, 0' gArea='11 / 3 / auto/ 4'></Svg>
            


            


        </div>
        </Container>
      </div>
    );
  }
}

export default App;
