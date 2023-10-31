import { IVehicle } from '../Vehicle/IVehicle';

export interface IFleet {
  id: number;
  title: string;
  vehicles: IVehicle[];
  addVehicle(vehicle: IVehicle): void;
}

export default IFleet;
