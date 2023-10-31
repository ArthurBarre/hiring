// for this exercise I decided to register my users here because it's usually repositories that manipulate the flush of data in a database
import { IUser } from '../Domain/User/IUser'

const users: IUser[] = [];

function saveUser(user: IUser): IUser[] {
  users.push(user);
  return users;
}

function findUserByIdRepository(userId: number): IUser | undefined {
  return users.find((u) => u.id === userId);
}

const updateUser = (userId: number, newUser: IUser): IUser | undefined => {
  const index = users.findIndex((u) => u.id === userId);
  if (index !== -1) {
    users[index] = newUser;
    return users[index];
  }
  return undefined;
}

export { saveUser, findUserByIdRepository, updateUser };
