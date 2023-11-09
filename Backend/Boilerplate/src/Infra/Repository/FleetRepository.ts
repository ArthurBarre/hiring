// for this exercise I decided to register my fleets here because it's usually repositories that manipulate the flush of data in a database
import { IVehicle } from '../../Domain/Types/IVehicle';
import { IFleet } from '../../Domain/Types/IFleet';

import connection from '../../db/index'; // Import the connection from db.ts

export const saveFleet = (fleet: IFleet): Promise<IFleet> => {
  return new Promise((resolve, reject) => {
    const sql = `INSERT INTO fleets (title) VALUES (?)`;
    connection.query(sql, [fleet.title], (err, result) => {
      if (err) {
        reject(err);
      } else {
        // Assuming 'result' has an 'insertId' property that contains the new ID
        const newFleet = {
          ...fleet,
          id: result.insertId, // This adds the newly generated ID to the fleet object
        };
        resolve(newFleet);
      }
    });
  });
};


export const findFleetById = (fleetId: number): Promise<IFleet | undefined> => {
  return new Promise((resolve, reject) => {
    const sql = `SELECT * FROM fleets WHERE id = ?`;
    connection.query(sql, [fleetId], (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results[0]);
      }
    });
  });
};

export const associateFleetToUser = (userId: number, fleetId: number): Promise<void> => {
  return new Promise((resolve, reject) => {
    const sql = `INSERT INTO user_fleets (userId, fleetId) VALUES (?, ?)`;
    connection.query(sql, [userId, fleetId], (error, results) => {
      if (error) {
        reject(error);
      } else {
        resolve();
      }
    });
  });
};


export const deleteAllFleets = (): Promise<void> => {
  return new Promise((resolve, reject) => {
    const sql = `DELETE FROM fleets`;
    connection.query(sql, (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });
};

export const doesVehicleBelongToFleetRepository = (fleetId: number, vehicleId: number): Promise<boolean> => {
  return new Promise((resolve, reject) => {
    const sql = `SELECT 1 FROM fleet_vehicles WHERE fleetId = ? AND vehicleId = ? LIMIT 1`;
    connection.query(sql, [fleetId, vehicleId], (err, results) => {
      if (err) {
        reject(err);
      } else {
        // If any result is returned, the vehicle belongs to the fleet
        resolve(results.length > 0);
      }
    });
  });
};
