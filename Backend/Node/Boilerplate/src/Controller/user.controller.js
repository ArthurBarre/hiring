//entities
const User = require('../../Domain/User')

//repositories
const UserRepository = require('../../Infra/UserRepository')


const createUser = (id, firstName, lastName, email, password) => {
  const user = new User(id, firstName, lastName, email, password);
  return UserRepository.saveUser(user);
}

module.exports = {
  createUser
}
