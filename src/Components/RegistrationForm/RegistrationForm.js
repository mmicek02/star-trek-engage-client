import React, { Component } from 'react'
import '../../style/main.css'
import propTypes from 'prop-types';
import ApiContext from '../../ApiContext';
import ValidationError from '../../ValidationError';

class RegistrationForm extends Component {
    /* 
      This componet will render the form that allows a new user
      to create an account and submit that account to the server.
  
      They should then be prompted to login.
    */
   static contextType = ApiContext;

   constructor(props) {
    super(props);
    this.state = {
        userid: '',
        username: '',
        userpassword: '',
        datejoined: '',
        touched: false,
    }
  }

  updateUsername = (Username) => {
    this.setState({
        username: Username,
        touched: true
    })
  }

  updatePassword = (Password) => {
    this.setState({
      userpassword: Password
    })
  }

  handleSubmit = e => {
    e.preventDefault();

    const userInfo = {
        userid: this.state.userid,
        username: this.state.username,
        userpassword: this.state.userpassword,
        datejoined: new Date,
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
        this.context.users.push(resJson)
        this.props.history.push(`/`)
    })
    .catch(err => {
        this.setState({
            error: err.message
        })
    })
  }

  validateUsername() {
    const username = this.state.username;
    if (username.length === 0) {
      return 'username is required';
    } else if (username.length < 3) {
      return 'username must be at least 3 characters long';
    }
  }

  validatePassword() {
    const password = this.state.userpassword;
    if (password.length === 0) {
      return 'password is required';
    } else if (password.length < 6) {
      return 'password must be at least 6 characters long';
    }
  }

   render() {
    const nameError = this.validateUsername();
    const passwordError = this.validatePassword();
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
          { this.state.username.touched && <ValidationError message={nameError} /> }
      </div>
      <div>
        <label htmlFor="password">Password </label>
        <input 
          type="password" 
          name='password' 
          id='password' 
          onChange={e => this.updatePassword(e.target.value)} />
          { this.state.userpassword.touched &&<ValidationError message={passwordError} /> }
      </div>
      <button 
        className="add-character-button"
        type='submit'
        onClick={e => this.handleSubmit(e)}
        disabled = {
          this.validateUsername(),
          this.validatePassword(),
          !!nameError,
          !!passwordError
        }
      >
          Sign Up</button>
  </form>
    )
  }
}

export default RegistrationForm;

RegistrationForm.propTypes = {
  username: propTypes.string.isRequired,
  password: propTypes.string.isRequired
};