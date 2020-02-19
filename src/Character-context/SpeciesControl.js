import React from 'react'
import SpeciesContext from './SpeciesContext'

export default function SpeciesControls(props) {
  return (
    <SpeciesContext.Consumer>
        {(value) => {
            return (
                <>
                    <button
                        onClick={() => props.onSetSpecies('andorian')}
                        disabled={value.species === 'andorian'}>
                        Andorian{' '}
                    </button>
                    {' '}
                    <button
                        onClick={() => props.onSetSpecies('denobulan')}
                        disabled={value.species === 'denobulan'}>
                        Denobulan{' '}
                    </button>
                    {' '}
                    <button
                        onClick={() => props.onSetSpecies('human')}
                        disabled={value.species === 'human'}>
                        Human{' '}
                    </button>
                    {' '}
                    <button
                        onClick={() => props.onSetSpecies('tellarite')}
                        disabled={value.species === 'tellarite'}>
                        Tellarite{' '}
                    </button>
                    {' '}
                    <button
                        onClick={() => props.onSetSpecies('trill')}
                        disabled={value.species === 'trill'}>
                        Trill{' '}
                    </button>
                    {' '}
                    <button
                        onClick={() => props.onSetSpecies('vulcan')}
                        disabled={value.species === 'vulcan'}>
                        Vulcan{' '}
                    </button>
                </>
            )
        }}
    </SpeciesContext.Consumer>
    
  );
}