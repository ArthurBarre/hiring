import { findVehicleById } from '../../Infra/VehicleRepository'; // Import VehicleRepository if not already imported
import { IVehicle } from '../../Domain/Vehicle/IVehicle'; // Import the Vehicle class or type if not already imported

function updateLocation(vehicleId: number, location: { lat: number; lng: number }): IVehicle | undefined {
  const vehicle = findVehicleById(vehicleId);

  if (!vehicle) {
    throw new Error(`Vehicle with ID ${vehicleId} not found.`);
  }

  vehicle.updateLocation(location);
  return vehicle;
}

export { updateLocation };
