import React, { Component } from 'react';

class ResultWindow extends Component {
  constructor(props) { super(props); }

  render() { return <div id="result">{this.props.result}</div> }
}

export default ResultWindow;
