import React, { Component } from 'react'
import '../../style/main.css'

class RegistrationForm extends React.Component {
    /* 
      This componet will render the form that allows a new user
      to create an account and submit that account to the server.
  
      They should then be prompted to login.
    */
   constructor(props) {
    super(props);
    this.state = {
        userid: 1,
        username: '',
        password: '',
    }
}

updateUsername = (Username) => {
  this.setState({
      username: Username
  })
}

updatePassword = (Password) => {
  this.setState({
      password: Password
  })
}

handleSubmit = e => {
  e.preventDefault();

  const userInfo = {
      userid: this.state.userid,
      username: this.state.username,
      password: this.state.password
  }

  const url ='https://infinite-spire-80617.herokuapp.com/api/users';
  const options = {
      method: 'POST',
      body: JSON.stringify(userInfo),
      headers: {
        'content-type': 'application/json'
      }
  };

  fetch(url, options)

  .then(res => {
      if(!res.ok) {
          throw new Error('Something went wrong, please try again later');
      }
      return res.json();
  })
  .then(resJson => {
      this.context.characters.push(resJson)
      this.props.history.push(`/api/users/${userInfo.userid}`)
  })
  .catch(err => {
      this.setState({
          error: err.message
      })
  })
}
   render() {
    return (
      <form className='signup-form'>
      <div>
        <label htmlFor="username">Username </label>
        <input 
          placeholder='Username' 
          type="text" 
          name='username' 
          id='user-name' 
          onChange={e => this.updateUsername(e.target.value)}/>
      </div>
      <div>
        <label htmlFor="password">Password </label>
        <input 
          type="password" 
          name='password' 
          id='password' 
          onChange={e => this.updatePassword(e.target.value)}/>
      </div>
      <button 
        className="add-character-button"
        type='submit'
        onClick={e => this.handleSubmit(e)}
      >
          Sign Up</button>
  </form>
    )
  }
}

export default RegistrationForm