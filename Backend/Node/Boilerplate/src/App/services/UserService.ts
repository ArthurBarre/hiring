import { findUserByIdRepository } from '../../Infra/UserRepository';
import { findFleetById } from '../../Infra/FleetRepository'; 
import { IUser } from '../../Domain/Entity/User/IUser';

function addFleetToUserService(userId: number, fleetId: number): IUser | undefined {
  const user = findUserByIdRepository(userId);
  const fleet = findFleetById(fleetId);

  if (!user) {
    throw new Error(`User with ID ${userId} not found.`);
  }

  if (!fleet) {
    throw new Error(`Fleet with ID ${fleetId} not found.`);
  }

  user.addFleets(fleet);
  return user;
}

export { addFleetToUserService };
