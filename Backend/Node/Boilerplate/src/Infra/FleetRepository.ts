// for this exercise I decided to register my fleets here because it's usually repositories that manipulate the flush of data in a database
import { IVehicle } from '../Domain/Vehicle/IVehicle';
import { IFleet } from '../Domain/Fleet/IFleet';


const fleets: IFleet[] = [];

function saveFleets(fleet: IFleet): IFleet[] {
  fleets.push(fleet);
  return fleets;
}

function findFleetById(fleetId: number): IFleet | undefined {
  return fleets.find((f) => f.id === fleetId);
}

const updateFleet = (fleetId: number, newFleet: IFleet): IFleet | undefined => {
  const index = fleets.findIndex((f) => f.id === fleetId);
  if (index !== -1) {
    fleets[index] = newFleet;
    return fleets[index];
  }
  return undefined;
}

export { saveFleets, findFleetById, updateFleet };
