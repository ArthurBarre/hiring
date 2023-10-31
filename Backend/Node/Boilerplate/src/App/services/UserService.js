"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addFleetToUserService = void 0;
var UserRepository_1 = require("../../Infra/UserRepository");
var FleetRepository_1 = require("../../Infra/FleetRepository");
function addFleetToUserService(userId, fleetId) {
    var user = (0, UserRepository_1.findUserByIdRepository)(userId);
    var fleet = (0, FleetRepository_1.findFleetById)(fleetId);
    if (!user) {
        throw new Error("User with ID ".concat(userId, " not found."));
    }
    if (!fleet) {
        throw new Error("Fleet with ID ".concat(fleetId, " not found."));
    }
    user.addFleets(fleet);
    return user;
}
exports.addFleetToUserService = addFleetToUserService;
