"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerVehicleToFleet = void 0;
var FleetRepository_1 = require("../../Infra/FleetRepository"); // Import FleetRepository if not already imported
var VehicleRepository_1 = require("../../Infra/VehicleRepository"); // Import VehicleRepository if not already imported
function registerVehicleToFleet(vehicleId, fleetId) {
    var fleet = (0, FleetRepository_1.findFleetById)(fleetId);
    var vehicle = (0, VehicleRepository_1.findVehicleById)(vehicleId);
    if (!fleet) {
        throw new Error("Fleet with ID ".concat(fleetId, " not found."));
    }
    if (!vehicle) {
        throw new Error("Vehicle with ID ".concat(vehicleId, " not found."));
    }
    fleet.addVehicle(vehicle);
    return fleet;
}
exports.registerVehicleToFleet = registerVehicleToFleet;
