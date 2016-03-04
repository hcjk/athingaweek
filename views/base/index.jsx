'use strict';
const React = require('react');
const Layout = require('../layouts/application.jsx');
const Project = require('../shared/project.jsx');

class Index extends React.Component {
  constructor(props) {
    super(props);
  }
  renderProjects() {
    const projects = this.props.projects.map(((project) => {
      console.log(project);
      return <Project {...project} />
    }));
    console.log(projects);
    return projects;
  }
  render() {
    return (
      <Layout {...this.props}>
        <h1>Projects</h1>
        {this.renderProjects()}
      </Layout>
    );
  }
}

module.exports = Index;
