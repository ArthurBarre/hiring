#!/usr/bin/env node
const { program } = require('commander')
const app = require('./dist/App/app.js')

program
  .command('create <userId>')
  .description('Create a fleet for the user and return the fleetId')
  .action((userId) => {
    const fleet = app.createFleet(userId, 'Fleet ' + userId)
    console.log(fleet.id)
  })

program
  .command('create-fleet <userId> <name>')
  .description('Create a new fleet')
  .action((userId, name) => {
    console.log(app.createFleet(userId, name))
  })

program
  .command('register-vehicle <fleetId> <vehiclePlateNumber>')
  .description('Register a vehicle to the fleet')
  .action((fleetId, vehiclePlateNumber) => {
    const vehicle = app.createVehicle(
      vehiclePlateNumber,
      'Vehicle ' + vehiclePlateNumber,
      { lat: 0, lng: 0 }
    )
    app.addVehicleToFleet(fleetId, vehicle.id)
    console.log(`Vehicle ${vehiclePlateNumber} registered to fleet ${fleetId}`)
  })

program
  .command('add-fleet-to-user <userId> <fleetId>')
  .description('Associate a fleet to a user')
  .action((userId, fleetId) => {
    app.addFleetToUser(userId, fleetId)
    console.log(`Fleet ${fleetId} associated to user ${userId}`)
  })

program
  .command('find-user <userId> ')
  .description('Get user by id')
  .action((userId) => {
    const user = app.findUserById(userId)
    console.log(user)
    console.log(user.firstName)
  })

program
  .command('localize-vehicle <fleetId> <vehiclePlateNumber> <lat> <lng> [alt]')
  .description('Update the location of the vehicle')
  .action((fleetId, vehiclePlateNumber, lat, lng, alt) => {
    const location = alt ? { lat, lng, alt } : { lat, lng }
    app.updateVehicleLocation(vehiclePlateNumber, location)
    console.log(
      `Vehicle ${vehiclePlateNumber} location updated to ${lat}, ${lng}, ${
        alt || 'no altitude'
      }`
    )
  })

program.parse(process.argv)
