"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let vehicles = [];
function saveVehicle(vehicle) {
    // Check if the vehicle with the same ID already exists
    if (vehicles.some((v) => v.id === vehicle.id)) {
        throw new Error(`Vehicle with ID ${vehicle.id} already exists.`);
    }
    // If the ID doesn't exist, add the vehicle to the repository
    vehicles.push(vehicle);
    return vehicle;
}
exports.saveVehicle = saveVehicle;
function findVehicleById(vehicleId) {
    return vehicles.find((v) => v.id === vehicleId);
}
exports.findVehicleById = findVehicleById;
const updateVehicle = (vehicleId, newVehicle) => {
    const index = vehicles.findIndex((v) => v.id === vehicleId);
    if (index !== -1) {
        vehicles[index] = newVehicle;
        return vehicles[index];
    }
    return undefined;
};
exports.updateVehicle = updateVehicle;
const deleteAllVehicles = () => {
    vehicles = [];
};
exports.deleteAllVehicles = deleteAllVehicles;
