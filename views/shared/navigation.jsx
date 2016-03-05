'use strict';
const React = require('react');

class Navigation extends React.Component {
  constructor(props) {
    super(props);
  }
  renderButtons() {
    if (this.props.current_user) {
      return (
        <a href='/projects/new' className='btn'>New</a>
      )
    }
    return (
      <a href='/login' className='btn'>Login w/ Slack</a>
    )
  }
  render() {
    return (
      <nav>
        <div className='wrapper'>
          <a href='/' className='logo'>
            <img src='/images/logo.jpg' />
            A Thing A Week
          </a>
          {this.renderButtons()}
        </div>
      </nav>
    )
  }
}

module.exports = Navigation;