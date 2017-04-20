import React, { Component } from 'react';

class Addons extends Component {
  constructor(props) { super(props); }

  get result()   { return this.props.parentsState.result; }
  get leftSide() { return this.props.parentsState.leftSide; }
  get setState() { return this.props.setUpParentState; }

  toggleSign(e) {
    let result = this.result;

    result = result > 0 ?  `-${result}` : result.toString().slice(1);

    this.setState({result: result});
  }

  getOnePercentOf(e) {
    let result = this.result;

    if (this.leftSide) { result = eval(`${this.leftSide.slice(0, -1)}*${result}`) }

    this.setState({
      result: result/100,
      leftSide: undefined
    });
  }

  render() {
    return (
      <div>
        <div className="adds" onClick={(e) => this.toggleSign(e)} >+/-</div>
        <div className="adds" onClick={(e) => this.getOnePercentOf(e)} >%</div>
      </div>
    )
  }
}

export default Addons;
