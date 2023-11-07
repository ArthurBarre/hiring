import { findVehicleById } from '../../Infra/VehicleRepository'; // Import VehicleRepository if not already imported
import { IVehicle } from '../../Domain/Entity/Vehicle/IVehicle'; // Import the Vehicle class or type if not already imported

function updateLocation(vehicleId: number, location: { lat: number; lng: number }): IVehicle | undefined {
  const vehicle = findVehicleById(vehicleId);

  if (!vehicle) {
    throw new Error(`Vehicle with ID ${vehicleId} not found.`);
  }
  if(vehicle.location.lat === location.lat && vehicle.location.lng === location.lng) {
    throw new Error(`Vehicle with ID ${vehicleId} already has this location.`);
  }

  vehicle.updateLocation(location);
  return vehicle;
}

export { updateLocation };
