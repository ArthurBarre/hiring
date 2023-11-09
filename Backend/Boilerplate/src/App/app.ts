// Entities
import User  from '../Domain/Entity/User'; 
import Fleet  from '../Domain/Entity/Fleet'; 
import Vehicle  from '../Domain/Entity/Vehicle'; 

//types
import { IUser } from '../Domain/Types/IUser';
import { IFleet } from '../Domain/Types/IFleet'; 
import { IVehicle } from '../Domain/Types/IVehicle'; 

// Repositories
import { 
  saveUser, 
  findUserByIdRepository, 
  deleteAllUsers 
  } from '../Infra/Repository/UserRepository';
import { 
  saveFleet,
  deleteAllFleets,
  associateFleetToUser,
  doesVehicleBelongToFleetRepository
} from '../Infra/Repository/FleetRepository'; 
import { 
  saveVehicle,
  associateVehicleToFleet,
  deleteAllVehicles,
  updateVehicleLocationRepository,
  updateVehicleLocationByPlateNumberRepository
  } from '../Infra/Repository/VehicleRepository'; 

// Create a User
const createUser = async (firstName: string, lastName: string, email: string, password: string): Promise<IUser | undefined> => {
  const user = new User(firstName, lastName, email, password);
  if(user){
    return await saveUser(user);
  }
}

// Create a Fleet
const createFleet = async (title: string):  Promise<IFleet | undefined> => {
  const fleet = new Fleet(title);
  if(fleet) {
    return await saveFleet(fleet); // Assuming you have a saveFleet method in FleetRepository
  }
}

// Add Fleet to User
const addFleetToUser = (userId: number, fleetId: number): Promise<void> => {
  const userWithNewFleet = associateFleetToUser(userId, fleetId);
  return userWithNewFleet;
}

// Create a Vehicle
const createVehicle = async (plateNumber: string, location: {lat: number, lng: number}): Promise<IVehicle | undefined> => {
  const vehicle = new Vehicle(plateNumber, location);

  if(vehicle) {
    return await saveVehicle(vehicle);
  }
}

// Add Vehicle to Fleet
const addVehicleToFleet = (fleetId: number, vehicleId: number): Promise<{ error: boolean, message?: string }> => {
  const fleetWithNewVehicle = associateVehicleToFleet(fleetId, vehicleId);
  return fleetWithNewVehicle
}

// Find User by ID
const findUserById = async (userId: number):  Promise<IUser | undefined> => {
  return await findUserByIdRepository(userId);
}

// Update Vehicle Location
const updateVehicleLocation = (vehicleId: number, location: { lat: number; lng: number }):  Promise<{ error: boolean, message?: string }> => {
  const vehicleLocationUpdated = updateVehicleLocationRepository(vehicleId, location);

  return vehicleLocationUpdated
}

// Update Vehicle Location by Plate Number
const updateVehicleLocationByPlateNumber = (plateNumber: string, location: { lat: number; lng: number }):  Promise<{ error: boolean, message?: string }> => {
  const vehicleLocationUpdated = updateVehicleLocationByPlateNumberRepository(plateNumber, location);

  return vehicleLocationUpdated
}

// Does Vehicle Belong to Fleet
const doesVehicleBelongToFleet = (fleetId: number, vehicleId: number): Promise<boolean> => {
  const vehicleBelongsToFleet = doesVehicleBelongToFleetRepository(fleetId, vehicleId);
  return vehicleBelongsToFleet;
}

// Reset all user Data
const resetUsers = (): void => {
  deleteAllUsers();
}

// Reset all fleet Data
const resetFleets = (): void => {
  deleteAllFleets();
}

// Reset all vehicle Data
const resetVehicles = (): void => {
  deleteAllVehicles();
}
export {
  createUser,
  createFleet,
  addFleetToUser,
  createVehicle,
  addVehicleToFleet,
  findUserById,
  updateVehicleLocation,
  resetUsers,
  resetFleets,
  resetVehicles,
  doesVehicleBelongToFleet,
  updateVehicleLocationByPlateNumber
};
