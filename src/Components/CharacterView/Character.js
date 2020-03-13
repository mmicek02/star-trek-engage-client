import React from 'react'
import { Route, Link, BrowserRouter } from 'react-router-dom'
import ApiContext from '../../ApiContext'
import config from '../../config'
import './character.css'

export default class Character extends React.Component {
  static defaultProps ={
    onDeleteCharacter: () => {},
  }
  static contextType = ApiContext;

  handleClickDelete = e => {
    e.preventDefault()
    const characterid = this.props.characterid

    fetch(`${config.API_ENDPOINT}/characters/${characterid}`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json'
      },
    })
      .then(() => {
        this.context.deleteCharacter(characterid)
        // allow parent to perform extra behaviour
        this.props.onDeleteCharacter(characterid)
      })
      .catch(error => {
        console.error({ error })
      })
  }

  render() {
    const { charactername, characterid, characterrole } = this.props
        return (
      <div className='Character'>
        <h2 className='Character__name'>
            <Link to={`/api/characters/${characterid}`}>
              {charactername}
            </Link>
          {characterrole}
        </h2>
        <button
          className='Character__delete'
          type='button'
          onClick={this.handleClickDelete}
        >
          Delete Character
        </button>
      </div>
    )
  }
}