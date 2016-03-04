'use strict';
const React = require('react');

class Flash extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className={"flash flash--" + this.props.type}>{this.props.children}</div>
    )
  }
}

class Flashes extends React.Component {
  constructor(props) {
    super(props);
  }
  renderFlashes(list, type) {
    const flashes = list.map((flash) => {
      return (
        <Flash type={type}>
          {flash}
        </Flash>
      )
    });
    return flashes;
  }
  renderNotices() {
    return this.renderFlashes(this.props.flash.notice, 'notice');
  }
  renderErrors() {
    return this.renderFlashes(this.props.flash.error, 'error');
  }
  render() {
    return (
      <div className="wrapper">
        <div className="base">
          {this.renderNotices()}
          {this.renderErrors()}
        </div>
      </div>
    )
  }
}

module.exports = Flashes;