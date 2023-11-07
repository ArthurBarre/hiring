// const { Given, When, Then, AfterAll } = require('cucumber')
// const assert = require('assert')
// const { expect } = require('chai')
// const {
//   createUser,
//   createFleet,
//   createVehicle,
//   addVehicleToFleet,
//   addFleetToUser,
//   resetUsers,
//   resetFleets,
//   resetVehicles,
// } = require('../../dist/App/app.js')

// let myFleet
// let myVehicle
// let otherUserFleet

// Given('my fleet', function () {
//   myFleet = createFleet(1, 'Fleet 1')
// })

// Given('a vehicle', function () {
//   if (!myVehicle) {
//     myVehicle = createVehicle(1, '123456', { lat: 48.8566, lng: 2.3522 })
//   }
// })

// When('I register this vehicle into my fleet', function () {
//   let firstRegister = addVehicleToFleet(myFleet.id, myVehicle.id)
//   assert.strictEqual(typeof firstRegister, 'object')
// })

// Given('I have registered this vehicle into my fleet', function () {
//   //already do
// })

// Given('the fleet of another user', function () {
//   otherUserFleet = createFleet(2, 'Fleet 2')
//   let otherUser = createUser(2, 'John2', 'Doe2', 'asa2@fdsf.com', '1223456')
//   addFleetToUser(otherUser.id, otherUserFleet.id)
// })

// Given(
//   "this vehicle has been registered into the other user's fleet",
//   function () {
//     // console.log(otherUserFleet)
//     let test = addVehicleToFleet(otherUserFleet.id, myVehicle.id)
//     assert.strictEqual(typeof test, 'object')
//   }
// )

// When('I try to register the same vehicle into my fleet', function () {
//   try {
//     addVehicleToFleet(myFleet.id, myVehicle.id)
//     throw new Error('Expected error was not thrown')
//   } catch (error) {
//     assert.strictEqual(
//       error.message,
//       `Vehicle with ID ${myVehicle.id} already exists.`
//     )
//   }
// })

// When('I register the vehicle into my new fleet', function () {
//   //already done
// })

// Then(
//   'I should be informed this this vehicle has already been registered into my fleet',
//   function () {
//     assert.deepStrictEqual(this.duplicateRegistrationResult, undefined)
//   }
// )

// Then('this vehicle should be part of my vehicle fleet', function () {

//   let vehicleIsInFleet = otherUserFleet.vehicles.includes(myVehicle)
//   console.log(vehicleIsInFleet)
//   assert.strictEqual(vehicleIsInFleet, true)
// })

// AfterAll(function () {
//   myFleet = undefined
//   myVehicle = undefined
//   otherUserFleet = undefined
//   resetUsers()
//   resetFleets()
//   resetVehicles()
// })
