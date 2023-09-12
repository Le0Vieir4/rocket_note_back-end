const knex = require("../database/knex")

class TagsController {
  async index(require, response) {
  const {user_id} = require.params
    const tags = await knex("tags").where({ user_id })

    return response.json(tags)
  }
}

module.exports = TagsController