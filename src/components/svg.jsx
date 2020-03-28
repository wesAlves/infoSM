import React, { Component } from "react";

class Svg extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pt: "",
      gArea: ""
    };
  }
  render() {
    return (
      <svg className="svg" style={{ gridArea: this.props.gArea }}>
        <polyline
          points={this.props.pt == null ? ("0, 25 1280,25") : this.props.pt}
          fill="none"
          stroke="black"
          stroke-width="3"
        />
      </svg>
    );
  }
}

export default Svg;
