#!/usr/bin/env node
const { program } = require('commander')
const app = require('../../../dist/App/app.js')

program
  .command('create <userId> ')
  .description('Create a fleet for the user and return the fleetId')
  .action(async (userId) => {
    const userData = await app.findUserById(userId)
    const fleet = await app.createFleet(`${userData.firstName}'s Fleet`)
    console.log(fleet.id)
  })

program
  .command('register-vehicle <fleetId> <vehiclePlateNumber>')
  .description('Register a vehicle to the fleet')
  .action(async (fleetId, vehiclePlateNumber) => {
    let vehicle = await app.createVehicle(vehiclePlateNumber, {
      lat: 0,
      lng: 0,
    })
    await app.addVehicleToFleet(fleetId, vehicle.id)
    console.log(`Vehicle ${vehiclePlateNumber} registered to fleet ${fleetId}`)
  })
program
  .command('localize-vehicle <vehiclePlateNumber> <lat> <lng>')
  .description('Update the location of the vehicle')
  .action(async (vehiclePlateNumber, lat, lng) => {
    // Parse lat and lng as floats, not integers, to preserve precision
    lat = parseFloat(lat)
    lng = parseFloat(lng)
    // Pass the parsed lat and lng to the update function
    await app.updateVehicleLocationByPlateNumber(vehiclePlateNumber, {
      lat, // Use the variable 'lat' directly
      lng, // Use the variable 'lng' directly
    })
    console.log(
      `Vehicle ${vehiclePlateNumber} location updated to ${lat}, ${lng}`
    )
  })

program.parse(process.argv)
