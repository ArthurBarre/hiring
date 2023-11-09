#!/usr/bin/env node
const { program } = require('commander')
const app = require('../../../dist/App/app.js')

program
  .command('create <firstName> <lastName> <email> <password>')
  .description('Create a fleet for the user and return the fleetId')
  .action(async (firstName, lastName, email, password) => {
    const result = await app.createUser(firstName, lastName, email, password)
    console.log(`User ${result.id} created`)
  })

program.parse(process.argv)
