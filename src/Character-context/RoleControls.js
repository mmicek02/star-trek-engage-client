import React from 'react'
import RoleContext from './RoleContext'


export default function RoleControls(props) {
  return (
    <RoleContext.Consumer>
        {(value) => {
            return (
                <>
                    <button
                        onClick={() => props.onSetRole('Chief Engineer')}
                        disabled={value.characterrole === 'Chief Engineer'}>
                        Chief Engineer{' '}
                    </button>
                    {' '}
                    <button
                        onClick={() => props.onSetRole('Chief of Security')}
                        disabled={value.characterrole === 'Chief of Security'}>
                        Chief of Security{' '}
                    </button>
                    {' '}
                    <button
                        onClick={() => props.onSetRole('Chief Medical Officer')}
                        disabled={value.characterrole === 'Chief Medical Officer'}>
                        Chief Medical Officer{' '}
                    </button>
                    {' '}
                    <button
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