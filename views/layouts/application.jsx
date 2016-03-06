'use strict';
const React = require('react');
const Navigation = require('../shared/navigation');
const Flashes = require('../shared/flashes');

class Application extends React.Component {
  constructor(props) {
    super(props);
  }
  renderJSScript() {
    if (process.env["API_ENV"] === 'production' || process.env["API_ENV"] === 'staging') {
      return (
        <script src="/js/application.js"></script>
      );
    }
    return (
      <div>
        <script src="/jspm_packages/system.js"></script>
        <script src="/config.js"></script>
        <script dangerouslySetInnerHTML={{__html:"System.import('application.js');"}}></script>
      </div>
    );
  }
  render() {
    return (
      <html>
        <head>
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css" />
          <link rel="stylesheet" type="text/css" href="/css/application.css" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta name="description" />
          <meta charSet="UTF-8" />
          <title>Show A Thing A Week</title>
        </head>
        <body>
          <Navigation {...this.props} />
          <Flashes {...this.props} />
          {this.props.children}
          {this.renderJSScript()}
        </body>
      </html>
    )
  }
}

module.exports = Application;