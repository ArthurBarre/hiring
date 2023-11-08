import * as app from './App/app.js'
import { createTables } from './db/init-db.js';

createTables();


// Insert a new user
// insertUser('Jane', 'Doe', 'jane.doe@example.com', 'securepassword');
// app.createUser(1, 'John2', 'Doe2', 'asaSSSS2@fdsf.com', '1223456')
// app.createUser(2, 'John2', 'Doe2', 'asa2@fdsf.com', '1223456')
// app.createFleet('Fleet 1').then(res=>console.log(res))
// app.createFleet(2, 'Fleet 2')
// app.addFleetToUser(1, 1)
// app.addFleetToUser(2, 2)
// app.createVehicle(1, '123456', {lat: 48.8566, lng: 2.3522})
// app.createVehicle(2, '123456', {lat: 48.8566, lng: 2.3522})
// // app.createVehicle(1, '123456',  {lat: 48.8566, lng: 2.3522})
// app.addVehicleToFleet(1, 1)
// app.addVehicleToFleet(2, 1)
// app.updateVehicleLocation(1, {lat: 48.8566, lng: 2.7777})

// app.updateVehicleLocation(1, {lat: 48.8566, lng: 22})
// app.findUserById(1).then(res=>console.log(res))
