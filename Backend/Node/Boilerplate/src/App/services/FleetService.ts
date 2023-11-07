import { findFleetById }  from '../../Infra/FleetRepository'; // Import FleetRepository if not already imported
import { findVehicleById } from '../../Infra/VehicleRepository'; // Import VehicleRepository if not already imported

import { IFleet } from '../../Domain/Entity/Fleet/IFleet'
import { IVehicle } from '../../Domain/Entity/Vehicle/IVehicle';

function registerVehicleToFleet(vehicleId: number, fleetId: number): IFleet | undefined {
  const fleet = findFleetById(fleetId);
  const vehicle = findVehicleById(vehicleId);

  if (!fleet) {
    throw new Error(`Fleet with ID ${fleetId} not found.`);
  }

  if (!vehicle) {
    throw new Error(`Vehicle with ID ${vehicleId} not found.`);
  }
  if (fleet.vehicles.some((v:IVehicle) => v.id === vehicle.id)) {
    throw new Error(`Vehicle with ID ${vehicle.id} already exists.`);
  }

  fleet.addVehicle(vehicle);
  return fleet;
}

export { registerVehicleToFleet };
