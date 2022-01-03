import React, { Component } from "react";

class Square extends Component {
  render() {
    return (
      <button className="square" onClick={() => console.log(this.props.value)}>
        {this.props.value}
      </button>
    );
  }
}

export default Square;
