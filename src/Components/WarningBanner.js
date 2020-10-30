import React from 'react';

export default function WarningBanner (props) {
  if(props.isLoggedIn){
    return null
  }

  return (
    <span>
      <h3>please log in</h3>
    </span>
  )
}
