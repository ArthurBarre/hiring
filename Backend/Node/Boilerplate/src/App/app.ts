// Entities
import User  from '../Domain/Entity/User/User'; // Import the User entity
import Fleet  from '../Domain/Entity/Fleet/Fleet'; // Import the Fleet entity
import Vehicle  from '../Domain/Entity/Vehicle/Vehicle'; // Import the Vehicle entity

//types
import { IUser } from '../Domain/Entity/User/IUser'; // Import the User entity
import { IFleet } from '../Domain/Entity/Fleet/IFleet'; // Import the Fleet entity
import { IVehicle } from '../Domain/Entity/Vehicle/IVehicle'; // Import the Vehicle entity

// Repositories
import { saveUser, 
  // updateUser, 
  findUserByIdRepository, 
  deleteAllUsers 
} from '../Infra/UserRepository'; 
import { 
  saveFleet,
  deleteAllFleets,
  associateFleetToUser,
  doesVehicleBelongToFleetRepository
} from '../Infra/FleetRepository'; 
import { saveVehicle, associateVehicleToFleet, deleteAllVehicles, updateVehicleLocationRepository } from '../Infra/VehicleRepository'; // Import the VehicleRepository

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
const createVehicle = async (numberPlate: string, location: {lat: number, lng: number}): Promise<IVehicle | undefined> => {
  const vehicle = new Vehicle(numberPlate, location);

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

const updateVehicleLocation = (vehicleId: number, location: { lat: number; lng: number }):  Promise<{ error: boolean, message?: string }> => {
  const vehicleLocationUpdated = updateVehicleLocationRepository(vehicleId, location);

  return vehicleLocationUpdated
}

const doesVehicleBelongToFleet = (fleetId: number, vehicleId: number): Promise<boolean> => {
  const vehicleBelongsToFleet = doesVehicleBelongToFleetRepository(fleetId, vehicleId);
  return vehicleBelongsToFleet;
}

const resetUsers = (): void => {
  deleteAllUsers();
}

const resetFleets = (): void => {
  deleteAllFleets();
}

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
  doesVehicleBelongToFleet
};
