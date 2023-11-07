import { IVehicle } from "./IVehicle";

class Vehicle implements IVehicle{
  id: number;
  numberPlate: string;
  location: { lat: number; lng: number };
  

  constructor(id: number, numberPlate: string, location: { lat: number; lng: number }) {
    this.id = id;
    this.numberPlate = numberPlate;
    this.location = {
      lat: location.lat,
      lng: location.lng
    };
  }

  updateLocation(location: { lat: number; lng: number }) {
    this.location = location;
  }
}

export default Vehicle;
