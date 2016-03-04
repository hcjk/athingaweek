'use strict';
const React = require('react');

class Navigation extends React.Component {
  constructor(props) {
    super(props);
  }
  renderButtons() {
    if (this.props.current_user) {
      return (
        <a href='/projects/new' className='button'>New</a>
      )
    }
    return (
      <a href='/login' className='button'>Login w/ Slack</a>
    )
  }
  render() {
    return (
      <nav>
        <a href="/">A Thing A Week</a>
        {this.renderButtons()}
      </nav>
    )
  }
}

module.exports = Navigation;