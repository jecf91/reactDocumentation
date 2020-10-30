import React from 'react';

export default function Form (props) {
  return(
    <form onSubmit={(e) => props.handleSubmit(e)}>
      <label>Name:</label>
      <input name="name" type="text" value={props.value.name} onChange={(e) => props.handleChange(e)}/>
      <br/>
      <label>Password:</label>
      <input name="password" type="password" value={props.value.password} onChange={(e) => props.handleChange(e)}/>
      <button type="submit">Send</button>
    </form>
  )
}