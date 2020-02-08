import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class CharacterRace extends Component {
    /* 
      This componet will render the form that allows a  user
      to create their very own character for the Star Trek TTRPG.
  
      Once the form is complete it should load the Character in the CharacterView 
      component.
    */
    constructor(props) {
        super(props);
        this.state = {
            role: '',
            species: '',
            attributes: {
                control: 11,
                daring: 10,
                fitness: 9,
                insight: 9,
                presence: 8,
                reason: 7
            },
            disciplines: {
                control: 5,
                daring: 4,
                fitness: 3,
                insight: 3,
                presence: 2,
                reason: 2
            },
            value: '',
            name: ''
        }
    }
    // Updates Character's role
    updateCharacterRole = (characterRole) => {
        this.setState({
            role: characterRole
        })
    }

    // Updates Character's Species
    updateCharacterSpecies = (CharacterSpecies) =>{
        this.setState({
            species: CharacterSpecies
        })
      }
    // Updates Character's Attributes
    updateCharacterAttributes = (characterAttributes) => {
        this.setState({
            attributes: characterAttributes
        })
    }
    // Updates Character's Disciplines
    updateCharacterDisciplines = (CharacterDisciplines) => {
        this.setState({
            disciplines: CharacterDisciplines
        })
    }
    // Update Character's Value
    updateCharacterValue = (CharacterValue) => {
        this.setState({
            value: CharacterValue
        })
    }
    // Update Character's Name
    updateCharacterName = (CharacterName) => {
        this.setState({
            value: CharacterName
        })
    }
      handleSubmit = e => {
        e.preventDefault();
        console.log(this.state);

        const characterSpeciesInfo = {
            species: this.state.species.value
        }
      }
    
    render() {
        console.log(`Current species: ${this.state.species}`)
        console.log(`Updated attributes: ${this.state.attributes}`)
        return (
            <div>
                <header>
                    <h1>Create a new character</h1>
                </header>
                <form className='new-character-form'>
                    {/* Add Species to Character*/}
                    <h2>Choose your Species</h2>
                    <fieldset>
                        <select 
                            id='character-species question' 
                            name='species answer'
                            onChangee= {e => this.updateCharacterSpecies(e.target.value)}
                            required
                        >
                            <option value="andorian">Andorian</option>
                            <option value="denobulan">Denobulan</option>
                            <option value="human">Huamn</option>
                            <option value="tellarite">Tellarite</option>
                            <option value="trill">Trill</option>
                            <option value="vulcan">Vulcan</option>
                        </select>
                    </fieldset>
                    {/* Add Attributes to Character*/}
                    <h2>Choose your Attributes</h2>
                    <p>Assign the following values to the six attributes below 10, 10, 9, 9, 8, 7</p>
                    <fieldset>
                        <span>Control:</span>
                        <select 
                            className="control"
                            onChange={e => this.updateCharacterAttributes(e.target.value)} >
                            <option value={10}>10</option>
                            <option value={10}>10</option>
                            <option value={9}>9</option>
                            <option value={9}>9</option>
                            <option value={8}>8</option>
                            <option value={7}>7</option>
                        </select>
                        <span>Fitness:</span>
                        <select 
                            className="fitness"
                            onChange={e => this.updateCharacterAttributes(e.target.value)} >
                            <option value={10}>10</option>
                            <option value={10}>10</option>
                            <option value={9}>9</option>
                            <option value={9}>9</option>
                            <option value={8}>8</option>
                            <option value={7}>7</option>
                        </select>
                        <span>Presence:</span>
                        <select 
                            className="Presence"
                            onChange={e => this.updateCharacterAttributes(e.target.value)} >
                            <option value={10}> 10 </option>
                            <option value={10}> 10 </option>
                            <option value={9}> 9 </option>
                            <option value={9}> 9 </option>
                            <option value={8}> 8 </option>
                            <option value={7}> 7 </option>
                        </select>
                        <span>Daring</span>
                        <select className="Daring">
                            <option value={10}>10</option>
                            <option value={10}>10</option>
                            <option value={9}>9</option>
                            <option value={9}>9</option>
                            <option value={8}>8</option>
                            <option value={7}>7</option>
                        </select> 
                        <span>Insight</span>
                        <select className="Insight">
                            <option value={10}>10</option>
                            <option value={10}>10</option>
                            <option value={9}>9</option>
                            <option value={9}>9</option>
                            <option value={8}>8</option>
                            <option value={7}>7</option>
                        </select>
                        <span>Reason</span>
                        <select className="Reason">
                            <option value={10}>10</option>
                            <option value={10}>10</option>
                            <option value={9}>9</option>
                            <option value={9}>9</option>
                            <option value={8}>8</option>
                            <option value={7}>7</option>
                        </select>
                    </fieldset>
                    {/* Add Character Disciplines*/}
                    <h2>Choose your Disciplines</h2>
                    <p>Assign scores to the six disciplines below</p>
                    <fieldset>
                        <span>Control:</span>
                        <select 
                            className="control"
                            onChange={e => this.updateCharacterDisciplines(e.target.value)} >
                            <option value={10}>10</option>
                            <option value={10}>10</option>
                            <option value={9}>9</option>
                            <option value={9}>9</option>
                            <option value={8}>8</option>
                            <option value={7}>7</option>
                        </select>
                        <span>Fitness:</span>
                        <select 
                            className="fitness"
                            onChange={e => this.updateCharacterDisciplines(e.target.value)} >
                            <option value={10}>10</option>
                            <option value={10}>10</option>
                            <option value={9}>9</option>
                            <option value={9}>9</option>
                            <option value={8}>8</option>
                            <option value={7}>7</option>
                        </select>
                        <span>Presence:</span>
                        <select 
                            className="Presence"
                            onChange={e => this.updateCharacterDisciplines(e.target.value)} >
                            <option value={10}> 10 </option>
                            <option value={10}> 10 </option>
                            <option value={9}> 9 </option>
                            <option value={9}> 9 </option>
                            <option value={8}> 8 </option>
                            <option value={7}> 7 </option>
                        </select>
                        <span>Daring</span>
                        <select 
                            className="Daring"
                            onChange={e => this.updateCharacterDisciplines(e.target.value)} >
                            <option value={10}>10</option>
                            <option value={10}>10</option>
                            <option value={9}>9</option>
                            <option value={9}>9</option>
                            <option value={8}>8</option>
                            <option value={7}>7</option>
                        </select> 
                        <span>Insight</span>
                        <select 
                            className="Insight"
                            onChange={e => this.updateCharacterDisciplines(e.target.value)} >
                            <option value={10}>10</option>
                            <option value={10}>10</option>
                            <option value={9}>9</option>
                            <option value={9}>9</option>
                            <option value={8}>8</option>
                            <option value={7}>7</option>
                        </select>
                        <span>Reason</span>
                        <select 
                            className="Reason"
                            onChange={e => this.updateCharacterDisciplines(e.target.value)} >
                            <option value={10}>10</option>
                            <option value={10}>10</option>
                            <option value={9}>9</option>
                            <option value={9}>9</option>
                            <option value={8}>8</option>
                            <option value={7}>7</option>
                        </select>
                    </fieldset>
                    {/* Add Value*/}
                    <fieldset>
                        <h2>Choose a Value</h2>
                        <select 
                            id='character-value question' 
                            name='note-folder-id'
                            onChangee= {e => this.updateCharacterAttributes(e.target.value)}
                        >
                            <option value="">Homeworld</option>
                            <option value="">Frontier Colony</option>
                            <option value="">Starship or Starbase</option>
                            <option value="">Another Species' World</option>
                        </select>
                    </fieldset>
                    {/* Add Character Name */}
                    <fieldset>
                        <span>Character Name:</span>
                        <input type="text" name="Character Name" />
                    </fieldset>
                    <br />
                        <button 
                            type="submit"
                            onClick={e => this.handleSubmit(e)}
                        >
                            Create Character
                        </button>
                </form>
            </div>
        )
    }
}

export default CharacterRace