import React, { Component } from 'react';

class ResultResetter extends Component {
  constructor(props) { 
    super(props);
    this.state = { resetterValue: 'AC'};
  }

  get setState()      { return this.props.setUpParentState; }
  get resetterValue() { return (this.props.parentsState.resetterValue || this.state.resetterValue); }

  resetResult(e) {
    this.setState({result: 0, pseudoResult: this.result, ac: true, resetterValue: 'AC'});
  }

  render() {
    return (
      <div className="adds" onClick={(e) => this.resetResult(e)} >{this.resetterValue}</div>
    )
  }
}

export default ResultResetter;
