"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let fleets = [];
function saveFleets(fleet) {
    fleets.push(fleet);
    return fleet;
}
exports.saveFleets = saveFleets;
function findFleetById(fleetId) {
    return fleets.find((f) => f.id === fleetId);
}
exports.findFleetById = findFleetById;
const updateFleet = (fleetId, newFleet) => {
    const index = fleets.findIndex((f) => f.id === fleetId);
    if (index !== -1) {
        fleets[index] = newFleet;
        return fleets[index];
    }
    return undefined;
};
exports.updateFleet = updateFleet;
const deleteAllFleets = () => {
    fleets = [];
};
exports.deleteAllFleets = deleteAllFleets;
