"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UserRepository_1 = require("../../Infra/UserRepository");
const FleetRepository_1 = require("../../Infra/FleetRepository");
function addFleetToUserService(userId, fleetId) {
    const user = UserRepository_1.findUserByIdRepository(userId);
    const fleet = FleetRepository_1.findFleetById(fleetId);
    if (!user) {
        throw new Error(`User with ID ${userId} not found.`);
    }
    if (!fleet) {
        throw new Error(`Fleet with ID ${fleetId} not found.`);
    }
    user.addFleets(fleet);
    return user;
}
exports.addFleetToUserService = addFleetToUserService;
