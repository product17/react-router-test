/* eslint-env props */
import React, { Component } from 'react'; // eslint-disable-line no-unused-vars

class AssetDisplay extends Component {
  render () {
    return (
      <div>
        Asset named: {this.props.match.params.asset}
      </div>
    );
  }
}

export default AssetDisplay;
