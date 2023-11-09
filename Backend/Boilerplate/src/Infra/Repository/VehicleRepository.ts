// for this exercise I decided to register my vehicle here because it's usually repositories that manipulate the flush of data in a database
import { IVehicle } from '../../Domain/Types/IVehicle';
import connection from '../../db/index'; // Import the connection from db.ts


export const saveVehicle = (vehicle: IVehicle): Promise<IVehicle> => {
  return new Promise((resolve, reject) => {
    const sql = `INSERT INTO vehicles (plateNumber, lat, lng) VALUES (?, ?, ?)`;
    connection.query(sql, [vehicle.plateNumber, vehicle.location.lat, vehicle.location.lng], (err, result) => {
      if (err) {
        reject(err);
      } else {
        const newVehicle = {
          ...vehicle,
          id: result.insertId, // This adds the newly generated ID to the fleet object
        };
        resolve(newVehicle);
      }
    });
  });
};

export const findVehicleById = (vehicleId: number): Promise<IVehicle | undefined> => {
  return new Promise((resolve, reject) => {
    const sql = `SELECT * FROM vehicles WHERE id = ?`;
    connection.query(sql, [vehicleId], (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results.length ? results[0] : undefined);
      }
    });
  });
};

export const updateVehicleLocationRepository = (vehicleId: number, location: { lat: number, lng: number }): Promise<{ error: boolean, message?: string }> => {
  return new Promise((resolve) => {
    // First, check the current location of the vehicle
    const checkSql = `SELECT lat, lng FROM vehicles WHERE id = ?`;
    connection.query(checkSql, [vehicleId], (checkErr, checkResults) => {
      if (checkErr) {
        resolve({ error: true, message: checkErr.message });
      } else if (checkResults.length > 0 && checkResults[0].lat === location.lat && checkResults[0].lng === location.lng) {
        // If the locations are the same, resolve with a custom error message
        resolve({ error: true, message: 'Vehicle already parked at this location' });
      } else {
        // If the locations are different, proceed with the update
        const updateSql = `UPDATE vehicles SET lat = ?, lng = ? WHERE id = ?`;
        connection.query(updateSql, [location.lat, location.lng, vehicleId], (updateErr) => {
          if (updateErr) {
            resolve({ error: true, message: updateErr.message });
          } else {
            resolve({ error: false });
          }
        });
      }
    });
  });
};

export const updateVehicleLocationByPlateNumberRepository = (plateNumber: string, location: { lat: number, lng: number }): Promise<{ error: boolean, message?: string }> => {
  return new Promise((resolve) => {
    // First, check the current location of the vehicle
    const checkSql = `SELECT lat, lng FROM vehicles WHERE plateNumber = ?`;
    connection.query(checkSql, [plateNumber], (checkErr, checkResults) => {
      if (checkErr) {
        resolve({ error: true, message: checkErr.message });
      } else if (checkResults.length > 0 && checkResults[0].lat === location.lat && checkResults[0].lng === location.lng) {
        // If the locations are the same, resolve with a custom error message
        resolve({ error: true, message: 'Vehicle already parked at this location' });
      } else {
        // If the locations are different, proceed with the update
        const updateSql = `UPDATE vehicles SET lat = ?, lng = ? WHERE plateNumber = ?`;
        connection.query(updateSql, [location.lat, location.lng, plateNumber], (updateErr) => {
          if (updateErr) {
            resolve({ error: true, message: updateErr.message });
          } else {
            resolve({ error: false });
          }
        });
      }
    });
  });
};

export const associateVehicleToFleet = (fleetId: number, vehicleId: number): Promise<{error: boolean, message: string}> => {
  return new Promise((resolve) => {
    // First check if the vehicle is already associated with the fleet
    const checkSql = `SELECT 1 FROM fleet_vehicles WHERE fleetId = ? AND vehicleId = ?`;
    connection.query(checkSql, [fleetId, vehicleId], (checkErr, checkResults) => {
      if (checkErr) {
        resolve({ error: true, message: checkErr.message });
      } else if (checkResults.length > 0) {
        // If the vehicle is already associated, return error true with a message
        resolve({ error: true, message: `Vehicle with ID ${vehicleId} is already associated with fleet ID ${fleetId}.` });
      } else {
        // If not, proceed to insert the new association
        const insertSql = `INSERT INTO fleet_vehicles (fleetId, vehicleId) VALUES (?, ?)`;
        connection.query(insertSql, [fleetId, vehicleId], (insertErr) => {
          if (insertErr) {
            resolve({ error: true, message: insertErr.message });
          } else {
            resolve({ error: false, message: 'Vehicle associated with fleet successfully.' });
          }
        });
      }
    });
  });
};




export const deleteAllVehicles = (): Promise<void> => {
  return new Promise((resolve, reject) => {
    const sql = `DELETE FROM vehicles`;
    connection.query(sql, (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });
};
