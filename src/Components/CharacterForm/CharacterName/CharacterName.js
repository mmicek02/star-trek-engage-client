import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class CharacterName extends Component {
    /* 
      This componet will render the form that allows a  user
      to create their very own character for the Star Trek TTRPG.
  
      Once the form is complete it should load the Character in the CharacterView 
      component.
    */
  render() {
    return (
      <div>
          <header>
            <h3>Character Name</h3>
          </header>
          <form class='new-character-form'>
            <fieldset>
              <div>
                <label for="first-name">Name</label>
                <input placeholder='First Name' type="text" name='first-name' id='first-name' />
              </div>
              <br />
                <Link to='/view-character/'>
                  <button>Next</button>
                </Link>
            </fieldset>
          </form>
      </div>
    )
  }
}