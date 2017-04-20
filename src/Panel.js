import React, { Component } from 'react';
import './Panel.sass';
import Digits from './Digits';
import ResultWindow from './ResultWindow';
import ResultResetter from './ResultResetter';
import Addons from './Addons';
import Operators from './Operators';
import FinalResultControl from './FinalResultControl';

class Panel extends Component {
  constructor(props) {
    super(props);

    this.state = {result: 0};
  }

  setUpState(properties) {
    this.setState(properties);
  }

  render() {
    let result = this.state.result;
    let components = [ResultResetter, Digits, Addons, Operators, FinalResultControl]

    components.forEach(item =>
      item.defaultProps = {setUpParentState: this.setUpState.bind(this), parentsState: this.state}
    );

    return (
      <div>
        <div><ResultWindow result={result} /></div>

        <div className="container">
          <table>
            <tbody>
              <tr>
                <td>
                  <ResultResetter />
                  <Addons />
                </td>
                <td rowSpan="2" style={{width: "100px"}}>
                  <Operators />
                  <FinalResultControl />
                </td>
              </tr>
              <tr>
                <td>
                  <Digits />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}

export default Panel;
