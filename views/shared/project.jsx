'use strict';
const React = require('react');

class Project extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log(this.props.name);
    return (
      <div className='project'>
        <div className='project-name'>{this.props.project.name}</div>
        <div className='project-user'>
          <img className='project-user-img' src={this.props.project.user.image} />
          <div className='project-user-name'>{this.props.project.user.name}</div>
        </div>
        <a href={this.props.project.url} target='_blank' className='project-link'>
          <i className='fa fa-1x fa-external-link'></i>
        </a>
      </div>
    )
  }
}

module.exports = Project;
