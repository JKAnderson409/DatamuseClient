import React, { Component } from 'react';

export default class WordLookup extends Component {
  constructor () {
    super();
    this.state = {
      textInput: ''
    };

    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput ( e ) {
    e.preventDefault();
    this.setState({
      textInput: e.target.value
    });
  }

  handleSubmit ( e ) {
    e.preventDefault();
    console.log( this.state.textInput );
  }
  
  render() {
    return (
      <div className="box word-finder">
        <hr />
        <input
          type="text"
          
          onChange={ this.handleInput }
          onInput={ this.handleSubmit }>
        </input>
        
        <hr className="underline" />
        <hr />
        More content than we had before so this column is now quite tall.
      </div>
    );
  }
}
