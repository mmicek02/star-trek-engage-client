import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class CharacterValues extends Component {
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
                    <h3>Choose a value</h3>
                </header>
                <form class='new-character-form'>
                    <fieldset>
                        <select id='note-folder-select' name='note-folder-id'>
                            <option value="">Homeworld</option>
                            <option value="">Frontier Colony</option>
                            <option value="">Starship or Starbase</option>
                            <option value="">Another Species' World</option>
                        </select>
                        <br />
                        <Link to='/new-character/upbringing'>
                            Next
                        </Link>
                    </fieldset>
                </form>
            </div>
        )
    }
}

