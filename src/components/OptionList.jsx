import React from 'react';

export default ( props ) => {

  return (
    <ul> 
      { Object.keys( props.optionList ).map(( option, i, optionListKeys ) => (
        <li
          key={ i }
          id={ [ props.id, option ] }
          className={ ( props.optionList[option] ) ? "selected" : null }
          onClick={ props.handleSelect }>
          { option }
        </li>
      ))}
    </ul>
  );
};