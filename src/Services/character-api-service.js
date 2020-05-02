import TokenService from '../services/token-service'
import config from '../config'

const CharacterApiService = {
  getCharacters() {
    return fetch(`${config.API_ENDPOINT}/characters`, {
      headers: {
        'authorization': `bearer ${TokenService.getAuthToken()}`,
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
        'authorization': `bearer ${TokenService.getAuthToken()}`,
      },
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  postCharacter(characterId) {
    return fetch(`${config.API_ENDPOINT}/characters`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'authorization': `bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify(
        console.log(characterId)
        // characterid: 1,
        //     userid: 1,
        //     characterrole: '',
        //     species: '',
        //     attributes: [
        //         11, 10, 9, 9, 8, 7
        //     ],
        //     disciplines: [
        //         5, 4, 3, 3, 2, 2
        //     ],
        //     charactervalue: 'Logical',
        //     charactername: '',
        //     equipment: 'Tricorder, Comm Badge, Phaser'
      ),
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  }
}

export default CharacterApiService
