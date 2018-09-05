import React from 'react'

const HiddenOptions = (props) => (
  <div
    id={ props.id }
    className="hidden-options"
    onClick={ props.toggleView }
  >
    <hr />
    <hr />
    <hr />
  </div>
)

export default HiddenOptions;
