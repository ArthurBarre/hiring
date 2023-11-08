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

let myFleet = undefined
let myVehicle = undefined
let location = undefined
let isAssociated = false

function generateID() {
  let result = ''
  const characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  const charactersLength = characters.length
  for (let i = 0; i < 4; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength))
  }
  return result
}

Given('my fleet', async function () {
  if (myFleet) return
  myFleet = await createFleet('My fleet')
})

Given('a vehicle', async function () {
  if (myVehicle) return
  myVehicle = await createVehicle(generateID(), { lat: 48.8566, lng: 2.3522 })
})

Given('I have registered this vehicle into my fleet', async function () {
  // console.log(myFleet, myVehicle)
  if (isAssociated) return
  await addVehicleToFleet(myFleet.id, myVehicle.id)
  isAssociated = true
})

Given('a location', function () {
  location = { lat: 40.7128, lng: -74.006 } // Example location
})

When('I park my vehicle at this location', async function () {
  await updateVehicleLocation(myVehicle.id, location)
  myVehicle.location = location
})

Then(
  'the known location of my vehicle should verify this location',
  function () {
    assert.deepStrictEqual(myVehicle.location, { lat: 40.7128, lng: -74.006 })
  }
)

Given('my vehicle has been parked into this location', async function () {
  await updateVehicleLocation(myVehicle.id, location)
  myVehicle.location = location
})

When('I try to park my vehicle at this location', function () {
  updateVehicleLocation(myVehicle.id, location)
})

Then(
  'I should be informed that my vehicle is already parked at this location',
  async function () {
    let errorMessage = ''
    let result = await updateVehicleLocation(myVehicle.id, location)
    if (result.error) errorMessage = result.message
    assert.deepStrictEqual(
      errorMessage,
      'Vehicle already parked at this location'
    )
  }
)

After(function () {
  updateVehicleLocation(myVehicle.id, { lat: 48.8566, lng: 2.3522 })
})
