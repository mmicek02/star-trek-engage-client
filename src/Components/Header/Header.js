import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../../style/main.css'

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
                <Link to='/api/users/1'>
                    View Characters
                </Link>
          </nav>
        )
    }
}

export default Header