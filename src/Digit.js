import React, { Component } from 'react';

class Digit extends Component {
  constructor(props) {
    super(props);
    this.passNewResult = this.passNewResult.bind(this);
  }

  passNewResult(e) {
    this.props.onNewResult(e.target.innerHTML);
  }

  render() {
    return <div className="digits" onClick={this.passNewResult}>{this.props.value}</div>
  }
}

export default Digit;
