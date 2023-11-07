"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const FleetRepository_1 = require("../../Infra/FleetRepository"); // Import FleetRepository if not already imported
const VehicleRepository_1 = require("../../Infra/VehicleRepository"); // Import VehicleRepository if not already imported
function registerVehicleToFleet(vehicleId, fleetId) {
    const fleet = FleetRepository_1.findFleetById(fleetId);
    const vehicle = VehicleRepository_1.findVehicleById(vehicleId);
    if (!fleet) {
        throw new Error(`Fleet with ID ${fleetId} not found.`);
    }
    if (!vehicle) {
        throw new Error(`Vehicle with ID ${vehicleId} not found.`);
    }
    if (fleet.vehicles.some((v) => v.id === vehicle.id)) {
        throw new Error(`Vehicle with ID ${vehicle.id} already exists.`);
    }
    fleet.addVehicle(vehicle);
    return fleet;
}
exports.registerVehicleToFleet = registerVehicleToFleet;
