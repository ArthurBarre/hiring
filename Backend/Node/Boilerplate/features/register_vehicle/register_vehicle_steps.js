const { Given, When, Then, AfterAll } = require('cucumber')
const assert = require('assert')

const {
  createUser,
  createFleet,
  createVehicle,
  addVehicleToFleet,
  addFleetToUser,
  doesVehicleBelongToFleet,
} = require('../../dist/App/app.js')

let myFleet = undefined
let myVehicle = undefined
let otherUserFleet = undefined
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
  myFleet = await createFleet('Fleet 1')
})

Given('a vehicle', async function () {
  if (!myVehicle) {
    myVehicle = await createVehicle(generateID(), { lat: 48.8566, lng: 2.3522 })
  }
})

When('I register this vehicle into my fleet', async function () {
  if (isAssociated) return
  await addVehicleToFleet(myFleet.id, myVehicle.id)
  isAssociated = true
})

Given('I have registered this vehicle into my fleet', async function () {
  // Attempt to associate the vehicle to the fleet only if it has not been done yet
  if (!isAssociated) {
    const result = await addVehicleToFleet(myFleet.id, myVehicle.id)
    // Ensure no error was returned during the association
    assert.strictEqual(result.error, false)
    isAssociated = true
  }
})

Given('the fleet of another user', async function () {
  otherUserFleet = await createFleet('Fleet 2')
  let otherUser = await createUser(
    'John2',
    'Doe2',
    generateID() + '@f.f',
    '1223456'
  )
  await addFleetToUser(otherUser.id, otherUserFleet.id)
})

Given(
  "this vehicle has been registered into the other user's fleet",
  async function () {
    const result = await addVehicleToFleet(otherUserFleet.id, myVehicle.id)
    assert.strictEqual(result.error, false)
    assert.strictEqual(
      result.message,
      `Vehicle associated with fleet successfully.`
    )
  }
)

When('I try to register the same vehicle into my fleet', async function () {
  // Attempt to associate the vehicle again and expect an error this time
  this.result = await addVehicleToFleet(myFleet.id, myVehicle.id)
})

When('I register the vehicle into my new fleet', function () {
  //already done
})

Then(
  'I should be informed that this vehicle has already been registered into my fleet',
  function () {
    // Check that an error was indeed returned as expected
    assert.strictEqual(this.result.error, true)
    assert.strictEqual(
      this.result.message,
      `Vehicle with ID ${myVehicle.id} is already associated with fleet ID ${myFleet.id}.`
    )
  }
)

Then('this vehicle should be part of my vehicle fleet', async function () {
  let vehicleIsInFleet = await doesVehicleBelongToFleet(
    myFleet.id,
    myVehicle.id
  )
  assert.strictEqual(vehicleIsInFleet, true)
})
