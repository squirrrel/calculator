import React, { Component } from 'react';
import Digit from './Digit.js'

class Digits extends Component {
  constructor(props) { super(props); }

  get result()      { return this.props.parentsState.result; }
  get operator()    { return this.props.parentsState.operator; }
  get finalResult() { return this.props.parentsState.finalResult; }
  get setState()    { return this.props.setUpParentState; }

  getNewResult(digit, result) {
    if (/^0$/.test(result.toString())) {
      return (digit == '.' ? `${result}${digit}` : digit)
    } else if (/\./.test(result.toString()) && digit == '.') {
      return result; 
    } else {
      return `${result}${digit}`;
    }
  }

  setNewResult(digit) {
    let result = this.result;

    if (this.finalResult) {
      this.setState({finalResult: undefined});

      result = 0;
    }

    if (this.operator) {
      this.setState({
        leftSide: `${result}${this.operator}`,
        operator: undefined
      });

      result = 0;
    }

    let new_result = this.getNewResult(digit, result);
    this.setState({result: new_result, resetterValue: 'C'});
  }

  setUpList() {
    const digits = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0, '.'];

    return (
      digits.map((digit) =>
        <Digit key={digit} value={digit} onNewResult={this.setNewResult.bind(this)} />
      )
    );
  }

  componentDidMount() {
    let children = this.refs.container.childNodes;
    let dotAndZero =
      Array.from(children)
       .filter(node => (node.innerText === "." || node.innerText === "0"));

    let [dot] = dotAndZero.filter(node => node.innerText == ".");
    let [zero] = dotAndZero.filter(node => node.innerText == "0");

    zero.className += " zero";
    zero.colSpan = 2;

    dot.className += " dot";
  }

  render() {
    let listItems = this.setUpList();
    return <div ref="container">{listItems}</div>;
  }
}

export default Digits;
