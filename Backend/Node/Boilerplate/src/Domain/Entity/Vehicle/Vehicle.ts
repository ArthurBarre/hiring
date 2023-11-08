import { IVehicle } from "./IVehicle";

class Vehicle implements IVehicle{
  numberPlate: string;
  location: { lat: number; lng: number };
  

  constructor( numberPlate: string, location: { lat: number; lng: number }) {
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
