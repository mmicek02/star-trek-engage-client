import TokenService from '../services/token-service'
import config from '../config'

const CharacterApiService = {
  getCharacters() {
    return fetch(`${config.API_ENDPOINT}/characters`, {
      headers: {
        'authorization': `basic ${TokenService.getAuthToken()}`,
      },
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  getCharacter(characterId) {
    return fetch(`${config.API_ENDPOINT}/characters/${characterId}`, {
      headers: {
        'authorization': `basic ${TokenService.getAuthToken()}`,
      },
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
}

export default CharacterApiService
