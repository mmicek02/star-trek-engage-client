import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import RegistrationPage from './Routes/RegistrationPage/RegistrationPage';
import LoginPage from './Routes/LoginPage/LoginPage';
import NewCharacterForm from './Components/CharacterForm/NewCharacterForm';
import LandingPage from './Routes/LandingPage/LandingPage';
import CharacterPageMain from './Components/CharacterView/CharacterPageMain';
import CharacterListMain from './Components/CharacterListMain/CharacterListMain';
import PrivateRoute from './Utils/PrivateRoute'
import PublicOnlyRoute from './Utils/PublicOnlyRoute'
import ApiContext from './ApiContext';
import config from './config';

class App extends Component {
  state = {
    characters: [],
    users: [],
    userid: null
  };

  componentDidMount() {
    Promise.all([
      fetch(`${config.API_ENDPOINT}/characters`),
      fetch(`${config.API_ENDPOINT}/users`)
    ])
      .then(([charactersRes, usersRes]) => {
        if (!charactersRes.ok)
          return charactersRes.json().then(e => Promise.reject(e))
        if (!usersRes.ok)
          return usersRes.json().then(e => Promise.reject(e))

        return Promise.all([
          charactersRes.json(),
          usersRes.json(),
        ])
      })
      .then(([characters]) => {
        this.setState({ characters })
      })
      .catch(error => {
        console.error({ error })
      })
  }

  handleAddCharacter = character => {
    this.setState({
      characters: [
        ...this.state.characters,
        character
      ]
    })
  }

  handleDeleteCharacter = characterId => {
    this.setState({
      characters: this.state.characters.filter(character => character.characterid !== characterId)
    })
  }

  renderMainRoutes() {
    return (
      <>
        <Route 
          exact 
          path='/' 
          component={LandingPage} />
        <PublicOnlyRoute 
          path='/login' 
          component={LoginPage} />
        <PublicOnlyRoute 
          path='/register' 
          component={RegistrationPage} />
      </>
    )
  }
  renderCharacterCreationsRoutes() {
    return (
      <>
        <PrivateRoute 
          path='/new-character' 
          component={NewCharacterForm} />
      </>
    )
  }
  renderUserRoutes() {
    return (
      <>
        
          <PrivateRoute
            exact
            path='/mycharacters'
            component={CharacterListMain} />
        
        <PrivateRoute 
          path='/api/characters/:characterid' 
          component={CharacterPageMain} />
      </>
    )
  }
  render() {
    const value = {
      characters: this.state.characters,
      users: this.state.users,
      addCharacter: this.handleAddCharacter,
      deleteCharacter: this.handleDeleteCharacter,
      addUsers: this.handleAddUsers
    }

    return (
      <ApiContext.Provider value={value}>
        <div>
          <header>
            <Header />
          </header>
          <main className='App'>
              {this.renderMainRoutes()}
              {this.renderCharacterCreationsRoutes()}
              {this.renderUserRoutes()}
          </main>
        </div>
      </ApiContext.Provider>
    );
  }
}

export default App;
