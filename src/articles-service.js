const ArticlesService = {
    getAllArticles(knexInstance) {
        // return Promise.resolve('all the articles!!')
        return knexInstance.select('*').from('blogful_articles')
        // return 'perche non fungi??'
    },
    insertArticle(knex, newArticle) {
       return knex
            .insert(newArticle)
            .into('blogful_articles')
            .returning('*')
            .then(rows => {
                    return rows[0]
            })
    },
    getById(knexInstance, id) {
       return knexInstance
            .from('blogful_articles')
            .select('*')
            .where('id', id)
            .first()
    },
    deleteArticle(knex, id) {
        return knex
            .from('blogful_articles')
            .where({ id })
            .delete()
    },
    updateArticle(knex, id, newArticleFields) {
        return knex
            .from('blogful_articles')
            .where({ id })
            .update(newArticleFields)
    },
}

module.exports = ArticlesService