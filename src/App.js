import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import RegistrationPage from './Routes/RegistrationPage/RegistrationPage';
import LoginPage from './Routes/LoginPage/LoginPage';
import CharacterRace from './Components/CharacterForm/CharacterRace/CharacterRace';
import CharacterValues from './Components/CharacterForm/CharacterValues/CharacterValues';
import CharacterUpbringing from './Components/CharacterForm/CharacterUpbringing/CharacterUpbringing';
import CharacterExperience from './Components/CharacterForm/CharacterExperience/CharacterExperience';
import CharacterEvent from './Components/CharacterForm/CharacterEvent/CharacterEvent';
import CharacterName from './Components/CharacterForm/CharacterName/CharacterName';
import CharacterView from './Components/CharacterView/CharacterView';
import LandingPage from './Routes/LandingPage/LandingPage';

class App extends Component {
  render() {
    return (
      <div>
        <header>
          <Header />
        </header>
        <main className='App'>
          <Route exact path='/' component={LandingPage} />
          <Route path='/login' component={LoginPage} />
          <Route path='/register' component={RegistrationPage} />
          <Route path='/new-character/race' component={CharacterRace} />
          <Route path='/new-character/values' component={CharacterValues} />
          <Route path='/new-character/upbringing' component={CharacterUpbringing} />
          <Route path='/new-character/career-experience' component={CharacterExperience} />
          <Route path='/new-character/career-event' component={CharacterEvent} />
          <Route path='/new-character/name' component={CharacterName} />
          <Route path='/view-character' component={CharacterView} />
        </main>
      </div>
    );
  }
}

export default App;
