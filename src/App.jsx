import React, { Component } from 'react';

import Options from './components/Options.jsx';
import WordFinder from './components/WordFinder.jsx';

export default class App extends Component {
  constructor () {
    super();
  };

  render() {
    return (
      <div>
        <div className="navbar">
          Datamuse Word-Finder
        </div>
  
        <div className="app-grid">
          <Options />
          <WordFinder />
          <div className="box footer">
            Footer
          </div>
        </div>
      </div>
    );
  }
};
