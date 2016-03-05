'use strict';
const React = require('react');

class BaseWrap extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="wrapper content">
        <div className="base">
          <div className="base-inner" id={this.props.id}>
            {(() => {
              if (!this.props.header) return;
              return (
                <div className="base-header">
                  <h1>{this.props.header}</h1>
                </div>
              )
            })()}
            {this.props.children}
          </div>
        </div>
      </div>
    )
  }
}

module.exports = BaseWrap;