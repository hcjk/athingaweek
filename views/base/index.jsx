'use strict';
const React = require('react');
const Layout = require('../layouts/application.jsx');

class Index extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Layout {...this.props}>
        Hello World
        {this.props.current_user.name}
      </Layout>
    );
  }
}

module.exports = Index;
