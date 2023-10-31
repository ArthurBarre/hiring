export interface IVehicle {
  id: number;
  numberPlate: string;
  location: { lat: number; lng: number };
  updateLocation(location: { lat: number; lng: number }): void;
}
