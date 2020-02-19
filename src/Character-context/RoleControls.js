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
                        disabled={value.role === 'Chief Engineer'}>
                        Chief Engineer{' '}
                    </button>
                    {' '}
                    <button
                        onClick={() => props.onSetRole('Chief of Security')}
                        disabled={value.role === 'Chief of Security'}>
                        Chief of Security{' '}
                    </button>
                    {' '}
                    <button
                        onClick={() => props.onSetRole('Chief Medical Officer')}
                        disabled={value.role === 'Chief Medical Officer'}>
                        Chief Medical Officer{' '}
                    </button>
                    {' '}
                    <button
                        onClick={() => props.onSetRole('Science Officer')}
                        disabled={value.role === 'Science Officer'}>
                        Science Officer{' '}
                    </button>
                </>
            )
        }}
    </RoleContext.Consumer>
    
  );
}