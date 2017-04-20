import React, { Component } from 'react';

class Operators extends Component {
  constructor(props) { super(props); }

  get result()   { return this.props.parentsState.result; }
  get operator() { return this.props.parentsState.operator; }
  get leftSide() { return this.props.parentsState.leftSide; }
  get setState() { return this.props.setUpParentState; }

  compute(e) {
    let result = this.result;

    if (this.leftSide && this.operator) {
      result = eval(`${this.leftSide}${result}`);

      this.setState({
        leftSide: undefined,
        result: result
      });
    }

    this.setState({
      operator: e.target.innerHTML,
      finalResult: undefined,
      cachedResult: undefined,
      cachedOperator: undefined
    });

  }

  setUpList() {
    const operators = ['/', '*', '-', '+'];

    return (
      operators.map((operator) =>
        <div
          key={operator}
          className="operator"
          onClick={(e) => this.compute(e)} >{operator}
        </div>
      )
    );
  }

  render() {
    let listItems = this.setUpList();

    return <div>{listItems}</div>;
  }
}

export default Operators;
