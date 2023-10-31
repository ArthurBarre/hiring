import IFleet from './IFleet';
import { IVehicle } from '../Vehicle/IVehicle';

class Fleet implements IFleet {
  id: number;
  title: string;
  vehicles: IVehicle[];

  constructor(id: number, title: string) {
    this.id = id;
    this.title = title;
    this.vehicles = [];
  }

  addVehicle(vehicle: IVehicle) {
    this.vehicles.push(vehicle);
  }
}

export default Fleet;