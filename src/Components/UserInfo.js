import React from 'react';
import { UserContext } from '../Context';

export default function UserInfo (props) {
  return (
    <UserContext.Consumer>
        {value => {
          if(!value) {
            return <h1>no user to show</h1>
          }
          return <h1>{value}</h1>
        }}
    </UserContext.Consumer>
  )
}