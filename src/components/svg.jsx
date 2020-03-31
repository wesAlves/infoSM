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
        <defs>
          <marker
            id="arrow"
            markerWidth="10"
            markerHeight="10"
            refX="0"
            refY="3"
            orient="auto"
            markerUnits="strokeWidth"
            viewBox="0 0 20 20"
          >
            <path d="M0,0 L0,6 L9,3 z" fill="#f00" />
          </marker>
        </defs>
        <marker id="circle" markerWidth="4" markerHeight="4" refX="2" refY="2">
          <circle cx="2" cy="2" r="2" stroke="none" fill="#f00" />
        </marker>

        <polyline
          points={this.props.pt == null ? "0, 25 125,25" : this.props.pt}
          fill="none"
          stroke="black"
          stroke-width="2"
          marker-end="url(#arrow)"
          marker-start="url(#circle)"
          // marker-mid="url(#circle)"
        />
      </svg>
    );
  }
}

export default Svg;
