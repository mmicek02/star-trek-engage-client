import React, { Component } from 'react'

export default class CharacterForm extends Component {
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
              <button type="submit" class="submitButton">Next</button>
            </fieldset>
          </form>
      </div>
    )
  }
}