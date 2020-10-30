import React from 'react';

export default function Clock (props) {
  const { dateInfo } = props;
  return (
    <h1>{dateInfo.toLocaleTimeString()}</h1>
  )
}