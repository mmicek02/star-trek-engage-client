import React from 'react';

const ApiContext = React.createContext({
    characters: [],
    users: [],
    addCharacters: () => {},
    deleteCharacters: () => {},
    updateCharacters: () => {},
})

export default ApiContext