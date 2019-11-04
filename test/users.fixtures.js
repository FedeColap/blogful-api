function makeUsersArray() {
    return [
      {
        id: 1,
        date_created: '2029-01-22T16:28:32.615Z',
        fullname: 'Sam Gamgee',
        username: 'sam.gamgee@shire.com',
        password: 'secret',
        nickname: 'Sam il ragazzo del west'
      },
      {
        id: 2,
        date_created: '2100-05-22T16:28:32.615Z',
        fullname: 'Sana Smith',
        username: 'sana.took@shire.com',
        password: 'secret',
        nickname: 'Rossana'
      }
    ]
  }
  
  module.exports = {
    makeUsersArray
  }