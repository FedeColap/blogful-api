const UsersService = {
    getAllUsers(knexInstance) {
        return knexInstance.select('*').from('blogful_users')
    },
    insertUser(knexInstance, newUser) {
        return knexInstance
          .insert(newUser)
          .into('blogful_users')
          .returning('*')
          .then(rows => {
            return rows[0]
          })
      },
    
      getById(knexInstance, id) {
        return knexInstance
          .from('blogful_users')
          .select('*')
          .where('id', id)
          .first()
      },
    
      deleteUser(knexInstance, id) {
        return knexInstance
          .from('blogful_users')
          .where({ id })
          .delete()
      },
    
      updateUser(knexInstance, id, newUserFields) {
        return knexInstance
          .from('blogful_users')
          .where({ id })
          .update(newUserFields)
      },
}
module.exports = UsersService