const { Given, When, Then } = require('cucumber')
const assert = require('assert')
// const { createUser } = require('../../dist/App/app.js')

Given('the following user data', function (dataTable) {
  this.userData = dataTable.hashes()
})

When(
  'I register the user with id {string}, first name {string}, last name {string}, email {string}, and password {string}',
  function (id, firstName, lastName, email, password) {
    this.result = createUser(Number(id), firstName, lastName, email, password)
  }
)

Then(
  'the user should be registered in the system with id {string}, first name {string}, last name {string}, email {string}, and password {string}',
  function (id, firstName, lastName, email, password) {
    assert.deepStrictEqual(this.result, [
      { id: Number(id), firstName, lastName, email, password },
    ])
  }
)
