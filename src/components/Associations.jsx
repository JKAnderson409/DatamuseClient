import React, { Component } from 'react';

import OptionList from './OptionList.jsx';

export default (props) => (
  <div>
    <p
      id="showMeaning"
      className="sidebar-subtitle-1"
      onClick={ props.toggleView }>
      meaning
    </p>
    {( props.showMeaning )
      ?
        <OptionList
          id="meaning"
          optionList={ props.associations.meaning }
          handleSelect={ props.handleSelect }/>
      : null
    }

    <p
      id="showUsage"
      className="sidebar-subtitle-1"
      onClick={ props.toggleView }>
      usage
    </p>
    {( props.showUsage )
      ? 
        <OptionList
          id="usage"
          optionList={ props.associations.usage }
          handleSelect={ props.handleSelect }/>
      : null
    }

    <p
      id="showSound"
      className="sidebar-subtitle-1"
      onClick={ props.toggleView }>
      sound
    </p>
    {( props.showSound )
      ?
        <OptionList
          id="sound"
          optionList={ props.associations.sound }
          handleSelect={ props.handleSelect }/>
      : null
    }
  </div>
);
