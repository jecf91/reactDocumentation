import React from 'react';

export default function Button (props) {
  const { handlerFunction , nameTag } = props;
  return (
    <button onClick={(e) => handlerFunction(e)}>
      {nameTag}
    </button>
  )
}
