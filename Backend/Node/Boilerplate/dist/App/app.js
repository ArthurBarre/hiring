"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Entities
const User_1 = require("../Domain/User/User"); // Import the User entity
const Fleet_1 = require("../Domain/Fleet/Fleet"); // Import the Fleet entity
const Vehicle_1 = require("../Domain/Vehicle/Vehicle"); // Import the Vehicle entity
// Repositories
const UserRepository_1 = require("../Infra/UserRepository"); // Import the UserRepository
const FleetRepository_1 = require("../Infra/FleetRepository"); // Import the FleetRepository
const VehicleRepository_1 = require("../Infra/VehicleRepository"); // Import the VehicleRepository
// Services
const UserService_1 = require("./services/UserService"); // Import the UserService
const FleetService_1 = require("./services/FleetService"); // Import the FleetService
const VehicleService_1 = require("./services/VehicleService"); // Import the VehicleService
// Create a User
const createUser = (id, firstName, lastName, email, password) => {
    const user = new User_1.default(id, firstName, lastName, email, password);
    return UserRepository_1.saveUser(user);
};
exports.createUser = createUser;
// Create a Fleet
const createFleet = (id, title) => {
    const fleet = new Fleet_1.default(id, title);
    return FleetRepository_1.saveFleets(fleet); // Assuming you have a saveFleet method in FleetRepository
};
exports.createFleet = createFleet;
// Add Fleet to User
const addFleetToUser = (userId, fleetId) => {
    const userWithNewFleet = UserService_1.addFleetToUserService(userId, fleetId);
    if (userWithNewFleet) {
        return UserRepository_1.updateUser(userId, userWithNewFleet);
    }
    return userWithNewFleet;
};
exports.addFleetToUser = addFleetToUser;
// Create a Vehicle
const createVehicle = (id, numberPlate, location) => {
    const vehicle = new Vehicle_1.default(id, numberPlate, location);
    if (vehicle) {
        return VehicleRepository_1.saveVehicle(vehicle);
    }
    return vehicle;
};
exports.createVehicle = createVehicle;
// Add Vehicle to Fleet
const addVehicleToFleet = (fleetId, vehicleId) => {
    const fleetWithNewVehicle = FleetService_1.registerVehicleToFleet(vehicleId, fleetId);
    if (fleetWithNewVehicle === undefined) {
        return undefined; // Return undefined if vehicleLocationUpdated is undefined
    }
    return FleetRepository_1.updateFleet(fleetId, fleetWithNewVehicle);
};
exports.addVehicleToFleet = addVehicleToFleet;
// Find User by ID
const findUserById = (userId) => {
    return UserRepository_1.findUserByIdRepository(userId);
};
exports.findUserById = findUserById;
const updateVehicleLocation = (vehicleId, location) => {
    const vehicleLocationUpdated = VehicleService_1.updateLocation(vehicleId, location);
    if (vehicleLocationUpdated === undefined) {
        return undefined; // Return undefined if vehicleLocationUpdated is undefined
    }
    return VehicleRepository_1.updateVehicle(vehicleId, vehicleLocationUpdated);
};
exports.updateVehicleLocation = updateVehicleLocation;
const resetUsers = () => {
    UserRepository_1.deleteAllUsers();
};
exports.resetUsers = resetUsers;
const resetFleets = () => {
    FleetRepository_1.deleteAllFleets();
};
exports.resetFleets = resetFleets;
const resetVehicles = () => {
    VehicleRepository_1.deleteAllVehicles();
};
exports.resetVehicles = resetVehicles;
