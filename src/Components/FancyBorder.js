import React from 'react';

export default function FancyBorder (props) {
  return (
    <div style={{border: 'blue 2px solid', padding:'2em 1em'}}>
        {props.children}
    </div>
  )
} 