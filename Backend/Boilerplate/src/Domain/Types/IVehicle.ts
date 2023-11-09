export interface IVehicle {
  plateNumber: string;
  location: { lat: number; lng: number };
  updateLocation(location: { lat: number; lng: number }): void;
}
