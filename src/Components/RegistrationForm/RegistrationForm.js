import React, { Component } from 'react'
import '../../style/main.css'

export default class RegistrationForm extends Component {
    /* 
      This componet will render the form that allows a new user
      to create an account and sumbit that account to the server.
  
      They should then be prompted to login.
    */

   render() {
    return (
      <form className='signup-form'>
      <div>
        <label htmlFor="username">Username </label>
        <input placeholder='Username' type="text" name='username' id='user-name' />
      </div>
      <div>
        <label htmlFor="password">Password </label>
        <input type="password" name='password' id='password' />
      </div>
      <button 
        className="add-character-button"
        type='submit'>Sign Up</button>
  </form>
    )
  }
  }