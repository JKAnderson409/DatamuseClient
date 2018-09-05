import React, { Component } from 'react';

import {lookupWords} from '../../helpers.js';

export default class WordLookup extends Component {
  constructor () {
    super();
    this.state = {
      textInput: ''
    };

    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleLookup = this.handleLookup.bind(this);
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
    const selectedOptions = [];
    for ( let category in this.props.associations ) {
      for ( let option in this.props.associations[category] ) {
        let optionValue = this.props.associations[category][option];
        if ( optionValue ) {
          selectedOptions.push( option );
        }
      }
    }
    lookupWords( selectedOptions );
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
          onClick={ this.handleLookup }
          style={{
            'minHeight': '30px'
          }}
        >
          Search
        </button>
        
        <hr className="underline" />
        <hr />
        More content than we had before so this column is now quite tall.
      </div>
    );
  }
}
