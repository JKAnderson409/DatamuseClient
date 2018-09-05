import React, { Component } from 'react';

import Associations from './Associations.jsx';
import Dictionaries from './Dictionaries.jsx';

export default class Options extends Component {
  constructor () {
    super();
    this.state = {
      showAssociations: true,
      showMeaning: true,
      showUsage: true,
      showSound: true,
      showDictionaries: false
    };

    this.toggleView = this.toggleView.bind(this);
  };

  toggleView ( e ) {
    e.preventDefault();
    const toggleSelection = e.target.id;
    this.setState( prevState => ({
      [toggleSelection]: !prevState[toggleSelection]
    }));
  }

  render() {
    return (
      <div className="box sidebar">
        <div className="sidebar-title">
          <p>options</p>
          <hr />
        </div>

        <div
          id="showAssociations"
          className="sidebar-subtitle"
          onClick={ this.toggleView }>
          <hr />
          associations
          <hr />
        </div>
        {( this.state.showAssociations )
          ?
            <Associations
              showMeaning={ this.state.showMeaning }
              showUsage={ this.state.showUsage }
              showSound={ this.state.showSound }
              toggleView={ this.toggleView }
            />
          : null 
        }

        <hr />
        <div id="showDictionaries"
          className="sidebar-subtitle"
          onClick={ this.toggleView }>
          dictionaries
        </div>
        <hr />
        {( this.state.showDictionaries )
          ?
            <Dictionaries />
          : null
        }
      </div>
    );
  }
}
