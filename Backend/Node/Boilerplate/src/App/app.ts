// Entities
import User  from '../Domain/User/User'; // Import the User entity
import Fleet  from '../Domain/Fleet/Fleet'; // Import the Fleet entity
import Vehicle  from '../Domain/Vehicle/Vehicle'; // Import the Vehicle entity

//types
import { IUser } from '../Domain/User/IUser'; // Import the User entity
import { IFleet } from '../Domain/Fleet/IFleet'; // Import the Fleet entity
import { IVehicle } from '../Domain/Vehicle/IVehicle'; // Import the Vehicle entity

// Repositories
import { saveUser, updateUser, findUserByIdRepository } from '../Infra/UserRepository'; // Import the UserRepository
import { updateFleet, saveFleets } from '../Infra/FleetRepository'; // Import the FleetRepository
import { saveVehicle, updateVehicle } from '../Infra/VehicleRepository'; // Import the VehicleRepository

// Services
import  { addFleetToUserService }  from './services/UserService'; // Import the UserService
import { registerVehicleToFleet } from './services/FleetService'; // Import the FleetService
import { updateLocation} from './services/VehicleService'; // Import the VehicleService

// Create a User
const createUser = (id: number, firstName: string, lastName: string, email: string, password: string): IUser[] | undefined=> {
  const user = new User(id, firstName, lastName, email, password);
  return saveUser(user);
}

// Create a Fleet
const createFleet = (id: number, title: string): IFleet[] => {
  const fleet = new Fleet(id, title);
  return saveFleets(fleet); // Assuming you have a saveFleet method in FleetRepository
}

// Add Fleet to User
const addFleetToUser = (userId: number, fleetId: number): IUser | undefined=> {
  const userWithNewFleet = addFleetToUserService(userId, fleetId);
  if (userWithNewFleet) {
    return updateUser(userId, userWithNewFleet);
  }
}

// Create a Vehicle
const createVehicle = (id: number, numberPlate: string, location: {lat: number, lng: number}): IVehicle[] | undefined => {
  const vehicle = new Vehicle(id, numberPlate, location);

  if(vehicle) {
    return saveVehicle(vehicle);
  }
}

// Add Vehicle to Fleet
const addVehicleToFleet = (fleetId: number, vehicleId: number): IFleet | undefined=> {
  const fleetWithNewVehicle = registerVehicleToFleet(fleetId, vehicleId);

  if (fleetWithNewVehicle === undefined) {
    return undefined; // Return undefined if vehicleLocationUpdated is undefined
  }

  return updateFleet(fleetId, fleetWithNewVehicle);
}

// Find User by ID
const findUserById = (userId: number): IUser | undefined => {
  return findUserByIdRepository(userId);
}

const updateVehicleLocation = (vehicleId: number, location: { lat: number; lng: number }): IVehicle | undefined => {
  const vehicleLocationUpdated = updateLocation(vehicleId, location);

  if (vehicleLocationUpdated === undefined) {
    return undefined; // Return undefined if vehicleLocationUpdated is undefined
  }

  return updateVehicle(vehicleId, vehicleLocationUpdated);
}

export {
  createUser,
  createFleet,
  addFleetToUser,
  createVehicle,
  addVehicleToFleet,
  findUserById,
  updateVehicleLocation
};
