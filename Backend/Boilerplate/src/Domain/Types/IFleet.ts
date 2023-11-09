import { IVehicle } from './IVehicle';

export interface IFleet {
  title: string;
  vehicles: IVehicle[];
  addVehicle(vehicle: IVehicle): void;
}


