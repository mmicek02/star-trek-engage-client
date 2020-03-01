import React from 'react';

const ApiContext = React.createContext({
    characters: [],
    addCharacters: () => {},
    deleteCharacters: () => {},
    updateCharacters: () => {},
})

export default ApiContext