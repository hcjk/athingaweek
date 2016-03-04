'use strict';
const React = require('react');


class Project extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <form method='POST' action='/projects'>
        <label htmlFor='name'>
          Project Name
        </label>
        <input type='text' name='name' id='name' required />
        <label htmlFor='url'>
          URL (Project must be hosted somewhere)
        </label>
        <input type='url' name='url' id='url' required />
        <input type='submit' />
      </form>
    )
  }
}

module.exports = Project;
