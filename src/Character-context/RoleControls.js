import React from 'react'
import RoleContext from './RoleContext'
import '../Components/CharacterForm/CharacterForm.css'

export default function RoleControls(props) {
  return (
    <RoleContext.Consumer>
        {(value) => {
            return (
                <>
                    <button 
                        className="CharacterForm__add-character-button"
                        onClick={() => props.onSetRole('Chief Engineer')}
                        disabled={value.characterrole === 'Chief Engineer'}>
                        Chief Engineer{' '}
                    </button>
                    {' '}
                    <button 
                        className="CharacterForm__add-character-button"
                        onClick={() => props.onSetRole('Chief of Security')}
                        disabled={value.characterrole === 'Chief of Security'}>
                        Chief of Security{' '}
                    </button>
                    {' '}
                    <button 
                        className="CharacterForm__add-character-button"
                        onClick={() => props.onSetRole('Chief Medical Officer')}
                        disabled={value.characterrole === 'Chief Medical Officer'}>
                        Chief Medical Officer{' '}
                    </button>
                    {' '}
                    <button
                        className="CharacterForm__add-character-button"
                        onClick={() => props.onSetRole('Science Officer')}
                        disabled={value.characterrole === 'Science Officer'}>
                        Science Officer{' '}
                    </button>
                </>
            )
        }}
    </RoleContext.Consumer>
    
  );
}