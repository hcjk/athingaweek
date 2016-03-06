'use strict';
const React = require('react');
const Layout = require('../layouts/application.jsx');
const Project = require('../shared/project.jsx');
const BaseWrapper = require('../shared/base_wrap.jsx');

class Index extends React.Component {
  constructor(props) {
    super(props);
  }
  renderProjects() {
    const projects = this.props.projects.map(((project) => {      
      return <Project project={project} />
    }));
    return projects;
  }
  render() {
    return (
      <Layout {...this.props}>
        <BaseWrapper header='Projects'>
          {this.renderProjects()}
        </BaseWrapper>
      </Layout>
    );
  }
}

module.exports = Index;
