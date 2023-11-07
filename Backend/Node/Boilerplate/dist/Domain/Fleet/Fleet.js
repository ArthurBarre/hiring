"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Fleet {
    constructor(id, title) {
        this.id = id;
        this.title = title;
        this.vehicles = [];
    }
    addVehicle(vehicle) {
        this.vehicles.push(vehicle);
    }
}
exports.default = Fleet;
