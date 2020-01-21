import React, { Component } from 'react';

export default class Header extends Component {
  /* 
    This componet will render the top bar that displays the
    'login', 'register', and 'logout' links
  */
}

export default class LoginForm extends Component {
  /* 
    This componet will render the form that allows a returning
    user to sign in with their username and password.
  */
}

export default class RegistrationForm extends Component {
  /* 
    This componet will render the form that allows a new user
    to create an account and sumbit that account to the server.

    They should then be prompted to login.
  */
}

export default class CharacterForm extends Component {
  /* 
    This componet will render the form that allows a  user
    to create their very own character for the Star Trek TTRPG.

    Once the form is complete it should load the Character in the CharacterView 
    component.
  */
}

export default class CharacterView extends Component {
  /* 
    This componet will render the a character that a user has
    already created.
  */
}

export default class UserHomeNav extends Component {
  /* 
    This componet will render all of the characers a user has created as a
    button that will load the clicked character in the CharacterView component.
  */
}

export default class UserHomePage extends Component {
  /* 
    This componet will render information about the user and their account, it
    will also provide a button to allow them to create a new character.
  */
}

function App() {
  return (
    <main className='App'>
      {/* content goes here */}
    </main>
  );
}

export default App;
