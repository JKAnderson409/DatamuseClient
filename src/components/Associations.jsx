import React, { Component } from 'react';

import OptionList from './OptionList.jsx';

export default class Associations extends Component {
  constructor (props) {
    super(props);
    this.state = {
      meaning: {
        'synonym': false,
        'antonym': false,
        'definition': false,
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
        'assonant rhyme': false,
        'consonant rhyme': false,
        'approximate rhyme': false,
        'sounds like': false,
        'homophone': false
      }
    };

    this.handleSelect = this.handleSelect.bind(this);
  }

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

  render () {
    return (
      <div>
        <p
          id="showMeaning"
          className="sidebar-subtitle-1"
          onClick={ this.props.toggleView }>
          meaning
        </p>
        {( this.props.showMeaning )
          ?
            <OptionList
              id="meaning"
              optionList={ this.state.meaning }
              handleSelect={ this.handleSelect }/>
          : null
        }

        <p
          id="showUsage"
          className="sidebar-subtitle-1"
          onClick={ this.props.toggleView }>
          usage
        </p>
        {( this.props.showUsage )
          ? 
            <OptionList
              id="usage"
              optionList={ this.state.usage }
              handleSelect={ this.handleSelect }/>
          : null
        }

        <p
          id="showSound"
          className="sidebar-subtitle-1"
          onClick={ this.props.toggleView }>
          sound
        </p>
        {( this.props.showSound )
          ?
            <OptionList
              id="sound"
              optionList={ this.state.sound }
              handleSelect={ this.handleSelect }/>
          : null
        }
      </div>
    );
  }
};
