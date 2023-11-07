const { Given, When, Then, BeforeAll, After } = require('cucumber')
const assert = require('assert')
const {
  createFleet,
  createVehicle,
  addVehicleToFleet,
  updateVehicleLocation,
  resetFleets,
  resetUsers,
  resetVehicles,
} = require('../../dist/App/app.js')

let myFleet
let myVehicle
let location

BeforeAll(function () {
  myFleet = undefined
  myVehicle = undefined
  location = undefined
  resetFleets()
  resetUsers()
  resetVehicles()
})

Given('my fleet', function () {
  myFleet = createFleet(1, 'Fleet 1')
})

Given('a vehicle', function () {
  myVehicle = createVehicle(1, '123456', { lat: 48.8566, lng: 2.3522 })
})

Given('I have registered this vehicle into my fleet', function () {
  addVehicleToFleet(myFleet.id, myVehicle.id)
})

Given('a location', function () {
  location = { lat: 40.7128, lng: -74.006 } // Example location
})

When('I park my vehicle at this location', function () {
  updateVehicleLocation(myVehicle.id, location)
})

Then(
  'the known location of my vehicle should verify this location',
  function () {
    assert.deepStrictEqual(myVehicle.location, location)
  }
)

Given('my vehicle has been parked into this location', function () {
  updateVehicleLocation(myVehicle.id, location)
})

When('I try to park my vehicle at this location', function () {
  //already parked

})

Then(
  'I should be informed that my vehicle is already parked at this location',
  function () {
    try {
      updateVehicleLocation(myVehicle.id, location)
      throw new Error('Expected error was not thrown')
    } catch (error) {
      assert.strictEqual(
        error.message,
        `Vehicle with ID ${myVehicle.id} already has this location.`
      )
    }
  }
)

After(function () {
  resetFleets()
  resetUsers()
  resetVehicles()
})
