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
        <div className="container container--line">
            <Svg pt='115,10 245, 10 245, 15 245,65' gArea='1 / 1 / 2 / 2'></Svg>
            <Svg pt='110, 10 290, 10' gArea='2 / 1 / 2 / 2'></Svg>
            <Svg pt = '115 10, 360 10, 0' gArea='2 / 2'></Svg>
            
            <Svg pt='280 10,245 10,245 65, 0' gArea='1 / 4 / 1 / auto'></Svg>
            <Svg pt ='280 10,225 10, 0' gArea='2 / 4'></Svg>
            <Svg pt='115 10,115 50, 0' gArea='1 / 4'></Svg>
            <Svg pt='330, 10 135, 10' gArea='2 / 3 / auto / 4'></Svg>
            
            <Svg pt='115 10,115 50, 0' gArea='2 / 3 '></Svg>
            <Svg pt='115 0,115 50, 0' gArea='3 / 3'></Svg>
            <Svg pt='40 20,40 52, 115 52, 115 56, 0' gArea='4 / 3'></Svg>
            <Svg pt='115 10,115 60, 0' gArea='5 / 3'></Svg>
            <Svg pt='40 20,40 50,115 50,115 53  , 0' gArea='6/ 3'></Svg>
            <Svg pt='115 10,115 50, 0' gArea='7 / 3'></Svg>
            <Svg pt='115 10,115 60, 0' gArea='8 / 3'></Svg>
            <Svg pt='115 30,115 65,0' gArea='9 / 3 '></Svg>
            
            <Svg pt='125 0,113 0,113 -65, 0' gArea='9 / 2'></Svg>
            <Svg pt='38 30, -40 30, -40 230,-10 230, 0' gArea='7 / 2'></Svg>
            <Svg pt='130 145,110, 145, 110 6,285 6, 0' gArea='6 / 2 / 5 / 3'></Svg>
            <Svg pt ='40 20, 40 52, -130 52, -130 55, 0' gArea='10 / 3'></Svg>
            <Svg pt ='40 20,-50 20, 0' gArea='9 / 3'></Svg>
            <Svg pt='75 20,265 20, 265 -15, 370 -15, 0' gArea='10 / 2 '></Svg>

            
            <Svg pt='130 10,-30 10,0' gArea=' 5/ 4'></Svg>
            <Svg pt='-50 15,285 , 15 ' gArea='9 / 4 '></Svg>
            <Svg pt='-50 15, 135 15, 135 -10, 0' gArea='6 / 4' ></Svg>
            <Svg pt='-50 15, -5, 15' gArea='4 / 4'></Svg>
            <Svg pt ='135 80, 135 10, -45 10, 0' gArea='3 / 4'></Svg>
            <Svg pt='-50 350,300 350, 300 5, 265 5, 0' gArea='4 / 4 / 10 / 6'></Svg>
            

            <Svg pt='130 15,260 15, 0' gArea='11 / 2 '></Svg>
            <Svg pt='130 15,260 15, 0' gArea='11 / 3 / auto/ 4'></Svg>
            


            


        </div>
        </Container>
      </div>
    );
  }
}

export default App;
