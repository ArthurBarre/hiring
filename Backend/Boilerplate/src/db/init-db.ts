// userOperations.ts
const mysql = require('mysql');

// Create a connection to the database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'user',
  password: 'password',
  database: 'db'
});

connection.connect();

// Function to create tables
export const createTables = async () => {
  const usersTable = `
    CREATE TABLE IF NOT EXISTS users (
      id INT AUTO_INCREMENT PRIMARY KEY,
      firstName VARCHAR(255) NOT NULL,
      lastName VARCHAR(255) NOT NULL,
      email VARCHAR(255) NOT NULL UNIQUE,
      password VARCHAR(255) NOT NULL
    );`;

  const fleetsTable = `
    CREATE TABLE IF NOT EXISTS fleets (
      id INT AUTO_INCREMENT PRIMARY KEY,
      title VARCHAR(255) NOT NULL
    );`;

  const vehiclesTable = `
    CREATE TABLE IF NOT EXISTS vehicles (
      id INT AUTO_INCREMENT PRIMARY KEY,
      plateNumber VARCHAR(255) NOT NULL UNIQUE,
      lat DOUBLE NOT NULL,
      lng DOUBLE NOT NULL
    );`;

  const fleetVehiclesTable = `
    CREATE TABLE IF NOT EXISTS fleet_vehicles (
      fleetId INT,
      vehicleId INT,
      PRIMARY KEY (fleetId, vehicleId),
      FOREIGN KEY (fleetId) REFERENCES fleets(id),
      FOREIGN KEY (vehicleId) REFERENCES vehicles(id)
    );`;
  const userFleetsTable = `
  CREATE TABLE IF NOT EXISTS user_fleets (
    userId INT,
    fleetId INT,
    PRIMARY KEY (userId, fleetId),
    FOREIGN KEY (userId) REFERENCES users(id),
    FOREIGN KEY (fleetId) REFERENCES fleets(id)
  );
  `;
  connection.query(usersTable, (err: any) => {
    if (err) throw err;
    console.log('Users table created');

    connection.query(fleetsTable, (err: any) => {
      if (err) throw err;
      console.log('Fleets table created');

      connection.query(vehiclesTable, (err: any) => {
        if (err) throw err;
        console.log('Vehicle table created');

        connection.query(fleetVehiclesTable, (err: any) => {
          if (err) throw err;
          console.log('Fleet vehicle table created');

          connection.query(userFleetsTable, (err: any) => {
            if (err) throw err;
            console.log('User fleets table created');

            connection.end((err: any) => {
              if (err) throw err;
              process.exit();
            });
          });
        });
      }); 
    });
  });
};

createTables();