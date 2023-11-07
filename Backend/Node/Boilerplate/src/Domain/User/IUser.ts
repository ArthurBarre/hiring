import { IFleet } from '../../Fleet/IFleet';

export interface IUser {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  fleets: IFleet[];
  addFleets(fleet: IFleet): void;
}