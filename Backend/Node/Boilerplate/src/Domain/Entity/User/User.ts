import { IUser } from './IUser';
import { IFleet } from '../Fleet/IFleet';

class User implements IUser{
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  fleets: IFleet[]; // You should replace 'any[]' with the appropriate type

  constructor(firstName: string, lastName: string, email: string, password: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.password = password;
    this.fleets = [];
  }

  addFleets(fleet: any) { // You should replace 'any' with the appropriate type
    this.fleets.push(fleet);
  }
}

export default User;
