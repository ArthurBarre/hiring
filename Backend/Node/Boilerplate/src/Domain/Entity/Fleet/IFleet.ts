import { IVehicle } from '../Vehicle/IVehicle';

export interface IFleet {
  title: string;
  vehicles: IVehicle[];
  addVehicle(vehicle: IVehicle): void;
}


