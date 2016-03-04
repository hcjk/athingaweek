'use strict';
const React = require('react');

class Project extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log(this.props);
    return (
      <div className='project'>
        <div className='project-name'>{this.props.name}</div>
      </div>
    )
  }
}

module.exports = Project;
