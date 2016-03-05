'use strict';
const React = require('react');
const Layout = require('../layouts/application.jsx');
const ProjectForm = require('../shared/forms/project.jsx');
const BaseWrapper = require('../shared/base_wrap.jsx');

class New extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Layout {...this.props}>
        <BaseWrapper header='New Project'>
          <ProjectForm />
        </BaseWrapper>
      </Layout>
    )
  }
}

module.exports = New;