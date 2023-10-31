#!/usr/bin/env node

const { createUser, findUserById } = require('./src/App/app.js')
const { updateLocation } = require('./src/App/services/VehicleService.js')


const { program } = require('commander');

program
  .version('1.0.0')
  .description('CLI pour gérer les utilisateurs');

// Commande pour créer un utilisateur
program
  .command('createUser <id> <firstName> <lastName> <email> <password>')
  .alias('cu')
  .description('Créer un nouvel utilisateur')
  .action((id, firstName, lastName, email, password) => {
    console.log(`Commande createUser exécutée avec les arguments :`);
    console.log(`ID: ${id}`);
    console.log(`Prénom: ${firstName}`);
    console.log(`Nom: ${lastName}`);
    console.log(`Email: ${email}`);
    console.log(`Mot de passe: ${password}`);
    // Ajoutez ici la logique pour créer un utilisateur avec les arguments fournis
    createUser(id,firstName, lastName,email, password)
  });

// Commande pour trouver un utilisateur par ID
program
  .command('findUserById <userId>')
  .alias('fu')
  .description('Trouver un utilisateur par ID')
  .action((userId) => {
    console.log(`Commande findUserById exécutée avec l'ID: ${userId}`);
    // Ajoutez ici la logique pour rechercher un utilisateur par ID
    findUserById(userId)
  });

program.parse(process.argv);


// createUser(2, 'John2', 'Doe2', 'asa2@fdsf.com', '1223456')
// createFleet(1, 'Fleet 1')
// createFleet(2, 'Fleet 2')
// addFleetToUser(1, 1)
// addFleetToUser(2, 2)
// createVehicle(1, '123456', {lat: 48.8566, lng: 2.3522})
// createVehicle(2, '123456', {lat: 48.8566, lng: 2.3522})
// // createVehicle(1, '123456', 'Paris')
// addVehiculeToFleet(1, 1)
// addVehiculeToFleet(2, 1)
// addVehiculeToFleet(1, 2)
// updateLocation(1, {lat: 48.8566, lng: 22})

