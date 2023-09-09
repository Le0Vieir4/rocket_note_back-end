const sqliteConnection = require("../database/sqlite")
const appError = require("../utils/AppError")

class UsersController {
  async create(request, response) {
    const { name, email, password } = request.body

    const database = await sqliteConnection()

    const checkUserExists = await database.get("SELECT * FROM users WHERE email = (?)", [email])

    if(checkUserExists) {
      throw new appError("Este e-mail já esta em uso.")
    }

    await database.run("INSERT INTO users (name, email, password) VALUES (?, ? , ?)",
    [ name, email, password])
    
    return response.status(201).json()
  }
}

module.exports = UsersController