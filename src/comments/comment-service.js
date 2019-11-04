const CommentsService = {
    getAllComments(knexInstance) {
      return knexInstance.select('*').from('blogful_comments')
    },
  
    insertComment(knexInstance, newComment) {
      return knexInstance
        .insert(newComment)
        .into('blogful_comments')
        .returning('*')
        .then(rows => {
          return rows[0]
        })
    },
  
    getById(knexInstance, id) {
      return knexInstance
        .from('blogful_comments')
        .select('*')
        .where('id', id)
        .first()
    },
  
    deleteComment(knexInstance, id) {
      return knexInstance
        .from('blogful_comments')
        .where({ id })
        .delete()
    },
  
    updateComment(knexInstance, id, newCommentFields) {
        return knexInstance
        .from('blogful_comments')
        .where({ id })
        .update(newCommentFields)
    },
  }
  
  module.exports = CommentsService