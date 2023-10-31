#!/usr/bin/env node


const { program } = require('commander');

program
  .version('1.0.0')
  .description('User Management CLI');

program
  .command('createUser <id> <firstName> <lastName> <email> <password>')
  .description('Create a new user')
  .action((id, firstName, lastName, email, password) => {
    console.log('Creating a new user:');
    console.log(`ID: ${id}`);
    console.log(`First Name: ${firstName}`);
    console.log(`Last Name: ${lastName}`);
    console.log(`Email: ${email}`);
    console.log(`Password: ${password}`);
    // Add logic to create a user with the provided information here
  });

program
  .command('findUserById <userId>')
  .description('Find a user by ID')
  .action((userId) => {
    console.log(`Finding user by ID: ${userId}`);
    // Add logic to find and display user information by ID here
  });

program.parse(process.argv);
