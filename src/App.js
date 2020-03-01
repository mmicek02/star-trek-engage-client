import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import RegistrationPage from './Routes/RegistrationPage/RegistrationPage';
import LoginPage from './Routes/LoginPage/LoginPage';
import NewCharacterForm from './Components/CharacterForm/NewCharacterForm';
import CharacterView from './Components/CharacterView/CharacterView';
import LandingPage from './Routes/LandingPage/LandingPage';
import ApiContext from './ApiContext';
import config from './config';

class App extends Component {
  state = {
    characters: [],
    users: [],
  };

  componentDidMount() {
    Promise.all([
      fetch(`${config.API_ENDPOINT}/characters`)
    ])
      .then(([charactersRes]) => {
        if (!charactersRes.ok)
          return charactersRes.json().then(e => Promise.reject(e))
        // if (!usersRes.ok)
        //   return usersRes.json().then(e => Promise.reject(e))

        return Promise.all([
          charactersRes.json(),
//          usersRes.json(),
        ])
      })
      .then(([characters]) => {
        this.setState({ characters })
      })
      .catch(error => {
        console.error({ error })
      })
  }

  // handleAddUsers = users => {
  //   this.setState({
  //     users: [
  //       ...this.state.users,
  //       users
  //     ]
  //   })
  // }

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
        <Route 
          path='/login' 
          component={LoginPage} />
        <Route 
          path='/register' 
          component={RegistrationPage} />
      </>
    )
  }
  renderCharacterCreationsRoutes() {
    return (
      <>
        <Route 
          path='/new-character' 
          component={NewCharacterForm} />
      </>
    )
  }
  renderUserRoutes() {
    return (
      <>
        <Route 
          path='/view-character' 
          component={CharacterView} />
      </>
    )
  }
  render() {
    const value = {
      characters: this.state.characters,
      users: this.state.users,
      addCharacter: this.handleAddCharacter,
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
