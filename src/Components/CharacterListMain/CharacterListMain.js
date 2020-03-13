import React from 'react'
import Character from '../CharacterView/Character'
import ApiContext from '../../ApiContext'
import { getCharactersForUser } from '../../characters-helpers'
import './characterListMain.css'

export default class CharacterListMain extends React.Component {
    static defaultProps = {
        match: {
            params: {}
        }
    }

    static contextType = ApiContext

    render() {
        const { userid } = this.props.match.params
        const { characters } = this.context
        const charactersForUser = getCharactersForUser(characters, userid)

        return (
            <section className='CharacterListMain'>
                <ul>
                    {charactersForUser.map(character => {
                        return (
                            <li key={character.characterid}>
                            <Character
                                key={character.characterid}
                                characterid={character.characterid}
                                charactername={character.charactername}
                                characterrole={character.characterrole}
                                userid={character.userid}
                            />
                        </li>
                        ) }
        )}
                </ul>
            </section>
        )
    }
}