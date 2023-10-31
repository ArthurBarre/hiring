"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateLocation = void 0;
var VehicleRepository_1 = require("../../Infra/VehicleRepository"); // Import VehicleRepository if not already imported
function updateLocation(vehicleId, location) {
    var vehicle = (0, VehicleRepository_1.findVehicleById)(vehicleId);
    if (!vehicle) {
        throw new Error("Vehicle with ID ".concat(vehicleId, " not found."));
    }
    vehicle.updateLocation(location);
    return vehicle;
}
exports.updateLocation = updateLocation;
