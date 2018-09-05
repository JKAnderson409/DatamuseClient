import React, { Component } from 'react';

export default class Dictionaries extends Component {
  constructor () {
    super();
    this.state = {
      'Standard English': false,
      'English Wikipedia': true,
      Spanish: false

    };
  }

  render() {
    return (
      <div className="box-body">
        <ul>
          {Object.keys( this.state ).map(( dictionary, i ) => (
            <li key={ i }>{ dictionary }</li>
          ))}
        </ul>
      </div>
    );
  }
}
