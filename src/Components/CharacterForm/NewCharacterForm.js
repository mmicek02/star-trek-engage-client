import React, { Component } from 'react'

import SpeciesContext from '../../Character-context/SpeciesContext';
import SpeciesControls from '../../Character-context/SpeciesControl';
import SpeciesTextDetails from './CharacterSpecies/CharacterSpeciesDetails';
import ApiContext from '../../ApiContext';
import RoleContext from '../../Character-context/RoleContext';
import RoleControls from '../../Character-context/RoleControls';
import RoleTextDetails from './CharacterRole/RoleTextDetails';

class NewCharacterForm extends Component {
    /* 
      This componet will render the form that allows a  user
      to create their very own character for the Star Trek TTRPG.
  
      Once the form is complete it should load the Character in the CharacterView 
      component.
    */

    static contextType = ApiContext;

    constructor(props) {
        super(props);
        this.state = {
            characterid: 1,
            userid: 1,
            charaterrole: '',
            species: '',
            attributes: [
                11, 10, 9, 9, 8, 7
            ],
            disciplines: [
                5, 4, 3, 3, 2, 2
            ],
            charactervalue: 'Logical',
            charactername: '',
            equipment: 'Tricorder, Comm Badge, Phaser'
        }
    }
    // Updates Character's role and selects the best attributes and disciplines for the role
    updateCharacterRole = (characterRole) => {
        if( characterRole === 'Chief Engineer') {
            this.setState({
                role: characterRole,
                attributes: [
                    7, 8, 9, 9, 10, 11
                ],
                disciplines: [
                    2, 2, 3, 3, 4, 5
                ]
            })
        }

        if( characterRole === 'Chief of Security') {
            this.setState({
                role: characterRole,
                attributes: [
                    9, 11, 9, 7, 10, 8
                ],
                disciplines: [
                    2, 5, 3, 3, 4, 2
                ]
            })
        }

        if( characterRole === 'Chief Medical Officer') {
            this.setState({
                role: characterRole,
                attributes: [
                    9, 11, 9, 7, 10, 8
                ],
                disciplines: [
                    2, 5, 3, 3, 4, 2
                ]
            })
        }

        if( characterRole === 'Science Officer') {
            this.setState({
                role: characterRole,
                attributes: [
                    9, 11, 9, 7, 10, 8
                ],
                disciplines: [
                    2, 5, 3, 3, 4, 2
                ]
            })
        }
    }

    // Updates Character's Species
    updateCharacterSpecies = (CharacterSpecies) =>{
        this.setState({
            species: CharacterSpecies
        })
      }
    // Update Character's Name
    updateCharacterName = (CharacterName) => {
        this.setState({
            name: CharacterName
        })
    }
    handleSubmit = e => {
        e.preventDefault();
        const characterInfo = {
            characterid: this.state.characterid,
            userid: this.state.userid,
            charaterrole: this.state.charaterrole,
            species: this.state.species,
            attributes: this.state.attributes,
            disciplines: this.state.disciplines,
            charactervalue: this.state.charactervalue,
            charactername: this.state.charactername,
            equipment: this.state.equipment,
        }

        const url ='http://localhost:8000/api/characters/';
        const options = {
            method: 'POST',
            headers: {
              'content-type': 'application/json'
            },
            body: JSON.stringify(characterInfo)
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
          //this.props.history.push(`/users/${characterInfo.userid}`) 
        })
      }
    
    render() {
        const contextSpeciesValue = {
            species: this.state.species
        }
        const contextRoleValue = {
            role: this.state.role
        }
        return (
            <div>
                <header>
                    <h1>Create a new character</h1>
                </header>
                <form className='new-character-form'>
                    {/* Add Role to Character */}
                    <RoleContext.Provider
                        value={contextRoleValue}>
                        <fieldset>
                            <h2>Choose your Role</h2>
                            <RoleControls 
                                onSetRole={this.updateCharacterRole} />
                            <RoleTextDetails />
                        </fieldset>
                    </RoleContext.Provider>

                    <br />
                    {/* Add Species to Character*/}
                    <SpeciesContext.Provider
                        value={contextSpeciesValue}>
                        <fieldset>
                            <h2>Choose your Species</h2>
                                <SpeciesControls 
                                    onSetSpecies={this.updateCharacterSpecies} />
                                <SpeciesTextDetails />
                        </fieldset>
                    </SpeciesContext.Provider>

                    <br />
                    {/* Add Value*/}
                    {/* <fieldset>
                        <h2>Choose a Value</h2>
                        <select 
                            id='character-value question' 
                            name='note-folder-id'
                            onChange= {e => this.updateCharacterValue(e.target.value)}
                        >
                            <option value="Homeworld">Homeworld</option>
                            <option value="Colony">Frontier Colony</option>
                            <option value="Starship">Starship or Starbase</option>
                            <option value="Another World">Another Species' World</option>
                        </select>
                    </fieldset> */}
                    <br />
                    {/* Add Character Name */}
                    <fieldset>
                        <h2>Name your Character</h2>
                        <input 
                            type="text" 
                            name="Character Name" 
                            onChange= {e => this.updateCharacterName(e.target.value)}/>
                    </fieldset>
                    <br />
                        <button 
                            type="submit"
                            onClick={e => this.handleSubmit(e)}
                        >
                            Enroll In StarFleet
                        </button>
                </form>
            </div>
        )
    }
}

export default NewCharacterForm