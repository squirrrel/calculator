import React, { Component } from 'react';

class FinalResultControl extends Component {
  constructor(props) { super(props); }

  get result()         { return this.props.parentsState.result; }
  get cachedResult()   { return this.props.parentsState.cachedResult; }
  get cachedOperator() { return this.props.parentsState.cachedOperator; }
  get leftSide()       { return this.props.parentsState.leftSide; }
  get pseudoResult()   { return this.props.parentsState.pseudoResult; }
  get operator()       { return this.props.parentsState.operator; }
  get ac()             { return this.props.parentsState.ac; }
  get setState()       { return this.props.setUpParentState; }

  setFinalResult(e) {
    let result = this.result;

    this.setState({finalResult: true});

    if (this.cachedResult && this.cachedOperator) {
      result = eval(`${result}${this.cachedOperator}${this.cachedResult}`);
      this.setState({result: result});
      return 0;
    }

    if (this.ac) {
      if (this.leftSide && /^(\+|\-)$/.test(this.leftSide.slice(-1).toString())) {
        result = this.leftSide.slice(0, -1);
      } else if (this.leftSide && /^(\*|\/)$/.test(this.leftSide.slice(-1).toString())) {
        result = 0;
      } else if (this.operator && /^(\+|\-)$/.test(this.operator)) {
        result = this.pseudoResult;
      } else {
        result = 0;
      }
    } else if (this.leftSide) {
      this.setState({
        cachedResult: result,
        cachedOperator: this.leftSide.slice(1)
      });

      result = eval(`${this.leftSide}${result}`)
      this.setState({result: result});
      return 0;
    } else if (this.operator) {
      this.setState({
        cachedResult: result,
        cachedOperator: this.operator
      });

      result = eval(`${result}${this.operator}${result}`);
    } else {
      this.setState({result: result});
    }

    this.setState({
      result: result,
      leftSide: undefined,
      operator: undefined,
      ac: undefined,
      pseudoResult: undefined
    });
  }

  render() {
    return(<div className="operator" onClick={(e) => this.setFinalResult(e)}>=</div>)
  }
}

export default FinalResultControl;
