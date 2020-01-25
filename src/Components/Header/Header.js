import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../../style/main.css'
import LoginPage from '../../Routes/LoginPage/LoginPage'
import RegistrationPage from '../../Routes/RegistrationPage/RegistrationPage'

class Header extends Component {

    render() {
        return (
            <nav className='Header'>
                <Link to='/'>
                <h1>
                    Star Trek Engage!
                </h1>
                </Link>
                <Link to='/login'>
                    Login
                </Link>
                {'/'}
                <Link to='/register'>
                    Register
                </Link>
          </nav>
        )
    }
}

export default Header