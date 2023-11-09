import {IFleet} from '../Types/IFleet';
import { IVehicle } from '../Types/IVehicle';

class Fleet implements IFleet {
  title: string;
  vehicles: IVehicle[];

  constructor(title: string) {

    this.title = title;
    this.vehicles = [];
  }

  addVehicle(vehicle: IVehicle) {
    this.vehicles.push(vehicle);
  }
}

export default Fleet;