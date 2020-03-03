import React, { Component } from 'react';
import ApiContext from '../../ApiContext'
import { findCharacter, findUser } from '';

export default class CharacterViewNav extends Component {
    /* 
      This componet will render the a character that a user has
      already created.
    */
    static defaultProps = {
        history: {
            goBack: () => { }
        },
        match: {
            params: {}
        }
    }
    
    static contextType = ApiContext;

    render() {
        const { characters, users, } = this.context
        const { characterid } = this.props.match.params
        const character = findCharacter(characters, characterid) || {}
        const user = findUser(users, character.userid)
        return (
        <div className="CharacterViewNav">
            <button
                tag='button'
                role='like'
                onClick={() => this.props.history.goBack()}
            >
                Back
            </button>
            {user && (
                <h3>
                    {user.username}
                </h3>
            )}
        </div>
        )
    }
}