// for this exercise I decided to register my vehicle here because it's usually repositories that manipulate the flush of data in a database
import { IVehicle } from '../Domain/Entity/Vehicle/IVehicle';

let vehicles: IVehicle[] = [];

function saveVehicle(vehicle: IVehicle): IVehicle {
  // Check if the vehicle with the same ID already exists
  if (vehicles.some((v) => v.id === vehicle.id)) {
    throw new Error(`Vehicle with ID ${vehicle.id} already exists.`);
  }

  // If the ID doesn't exist, add the vehicle to the repository
  vehicles.push(vehicle);

  return vehicle;
}

function findVehicleById(vehicleId: number): IVehicle | undefined {
  return vehicles.find((v) => v.id === vehicleId);
}

const updateVehicle = (vehicleId: number, newVehicle: IVehicle): IVehicle | undefined => {
  const index = vehicles.findIndex((v) => v.id === vehicleId);
  if (index !== -1) {
    vehicles[index] = newVehicle;
    return vehicles[index];
  }
  return undefined;
}

const deleteAllVehicles = () : void  => {
  vehicles = []
}

export { saveVehicle, findVehicleById, updateVehicle, deleteAllVehicles};
