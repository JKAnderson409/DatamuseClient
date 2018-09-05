import React from 'react';

export default ( props ) => {

  return (
    <ul> 
      { Object.keys( props.optionList ).map(( option, i, optionListKeys ) => (
        <li
          key={ i }
          className={ ( props.optionList[option].id ) ? "selected" : null }
          onClick={ props.handleSelect }>
          { option }
        </li>
      ))}
    </ul>
  );
};