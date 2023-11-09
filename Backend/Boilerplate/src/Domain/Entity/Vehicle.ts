import { IVehicle } from "../Types/IVehicle";

class Vehicle implements IVehicle{
  plateNumber: string;
  location: { lat: number; lng: number };
  

  constructor( plateNumber: string, location: { lat: number; lng: number }) {
    this.plateNumber = plateNumber;
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
