import React, { Component } from 'react';

import Options from './components/Options.jsx';
import WordFinder from './components/WordFinder.jsx';

export default class App extends Component {
  constructor () {
    super();
    this.state = {
      meaning: {
        'definition': false,
        'synonym': false,
        'antonym': false,
        'comprises': false,
        'kind of': false,
        'more general': false
      },
      usage: {
        'part': false,
        'modified by': false,
        'modifies': false,
        'triggers': false,
        'follower': false,
        'predecessor': false
      },
      sound: {
        'sounds like': false,
        'assonant rhyme': false,
        'consonant rhyme': false,
        'approximate rhyme': false,
        'homophone': false
      }
    };

    this.handleSelect = this.handleSelect.bind(this);
  };

  handleSelect ( e ) {
    let selectedOption = e.target.id.split(',');
    let category = selectedOption[0];
    let option = selectedOption[1];

    let categoryAltered = Object.assign( {}, this.state[category] );
    categoryAltered[option] = !categoryAltered[option];

    this.setState({
      [category]: categoryAltered
    });
  }

  render() {
    return (
      <div>
        <div className="navbar">
          Datamuse Word-Finder
        </div>
  
        <div className="app-grid">
          <Options 
            associations={ this.state }
            handleSelect={ this.handleSelect }
          />
          <WordFinder />
          <div className="box footer">
            Footer
          </div>
        </div>
      </div>
    );
  }
};
