"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const VehicleRepository_1 = require("../../Infra/VehicleRepository"); // Import VehicleRepository if not already imported
function updateLocation(vehicleId, location) {
    const vehicle = VehicleRepository_1.findVehicleById(vehicleId);
    if (!vehicle) {
        throw new Error(`Vehicle with ID ${vehicleId} not found.`);
    }
    if (vehicle.location.lat === location.lat && vehicle.location.lng === location.lng) {
        throw new Error(`Vehicle with ID ${vehicleId} already has this location.`);
    }
    vehicle.updateLocation(location);
    return vehicle;
}
exports.updateLocation = updateLocation;
