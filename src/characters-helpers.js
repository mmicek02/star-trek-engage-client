
export const findUser = (users=[], userid) =>
users.find(user => user.userid === userid)

export const findCharacter = (characters=[], characterid) =>
characters.find(character => character.characterid === characterid)

export const getCharactersForUser = (characters=[], userid) => (
(!userid)
  ? characters
  : characters.filter(character => character.userid == userid)
)

export const countNotesForFolder = (notes=[], userid) =>
notes.filter(note => note.userid == userid).length
