import React, { Component } from 'react';

import getWordsAtEndpoint from '../../helpers.js';

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

  handleLookup ( e ) {
    console.log( getWordsAtEndpoint );
    getWordsAtEndpoint( 'https://api.datamuse.com/words?ml=test' )
      .then( test => {
        console.log( test );
        return test;
      })
      .catch( error => {
        console.error( error );
      });
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
        <button 
          type="submit"
          onClick={ this.handleLookup }>

        </button>
        
        <hr className="underline" />
        <hr />
        More content than we had before so this column is now quite tall.
      </div>
    );
  }
}
