"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Vehicle {
    constructor(id, numberPlate, location) {
        this.id = id;
        this.numberPlate = numberPlate;
        this.location = {
            lat: location.lat,
            lng: location.lng
        };
    }
    updateLocation(location) {
        this.location = location;
    }
}
exports.default = Vehicle;
