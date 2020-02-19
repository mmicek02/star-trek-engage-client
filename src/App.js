import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import RegistrationPage from './Routes/RegistrationPage/RegistrationPage';
import LoginPage from './Routes/LoginPage/LoginPage';
import NewCharacterForm from './Components/CharacterForm/NewCharacterForm';
import CharacterView from './Components/CharacterView/CharacterView';
import LandingPage from './Routes/LandingPage/LandingPage';
import ApiContext from './ApiContext';

class App extends Component {
  state = {
    characters: [],
  };

  componentDidMount() {
  
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
    // const value = {
    //   characters: this.state.characters,
    // }

    return (
      <ApiContext.Provider>
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
