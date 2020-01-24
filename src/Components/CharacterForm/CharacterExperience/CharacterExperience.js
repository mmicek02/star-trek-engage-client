import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class CharacterExperience extends Component {
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
                    <h3>Career/ Experience</h3>
                </header>
                <form class='new-character-form'>
                    <fieldset>
                        <select id='note-folder-select' name='note-folder-id'>
                        <option value="">Young Office</option>
                        <option value="">Experienced Office</option>
                        <option value="">Veteran Office</option>
                        </select>
                        <br />
                        <Link to='/new-character/career-event'>Next</Link>
                    </fieldset>
                </form>
            </div>
        )
    }
}

