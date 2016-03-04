'use strict';
const React = require('react');
const Layout = require('../layouts/application.jsx');
const ProjectForm = require('../shared/forms/project.jsx');

class New extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Layout {...this.props}>
        <h1>New Project</h1>
        <ProjectForm />
      </Layout>
    )
  }
}

module.exports = New;