// for this exercise I decided to register my users here because it's usually repositories that manipulate the flush of data in a database
import { IUser } from '../Domain/Entity/User/IUser'

let users: IUser[] = [];

function saveUser(user: IUser): IUser {
  users.push(user);
  return user;
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

const  deleteAllUsers = (): void => {
  users = []
}

export { saveUser, findUserByIdRepository, updateUser, deleteAllUsers };
