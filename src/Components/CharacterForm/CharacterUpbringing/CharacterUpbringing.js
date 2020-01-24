import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class CharacterUpbringing extends Component {
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
                    <h3>Choose an Upbringing</h3>
                </header>
                <form class='new-character-form'>
                    <fieldset>
                        <select id='note-folder-select' name='note-folder-id'>
                            <option value="">Starfleet</option>
                            <option value="">Business/ Trade</option>
                            <option value="">Rural</option>
                            <option value="">Technology</option>
                            <option value="">Artistic</option>
                            <option value="">Politics</option>
                        </select>
                        <br />
                        <Link to='/new-character/career-experience'>
                            Next
                        </Link>
                    </fieldset>
                </form>
            </div>
        )
    }
}

