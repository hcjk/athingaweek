'use strict';
const React = require('react');

class Project extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className='project'>
        <div className='project-name'>{this.props.name}</div>
      </div>
    )
  }
}