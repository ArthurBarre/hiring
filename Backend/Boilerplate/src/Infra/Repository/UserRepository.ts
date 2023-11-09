// for this exercise I decided to register my users here because it's usually repositories that manipulate the flush of data in a database
import { IUser } from '../../Domain/Types/IUser'
import connection from '../../db/index'; // Import the connection from db.ts


export const saveUser = (user: IUser): Promise<IUser | undefined> => {
  return new Promise((resolve, reject) => {
    const sql = `INSERT INTO users (firstName, lastName, email, password) VALUES (?, ?, ?, ?)`;
    const { firstName, lastName, email, password } = user;
    connection.query(sql, [firstName, lastName, email, password], (err, result) => {
      if (err) {
        reject(err);
      } else {
        const newUser = {
          ...user,
          id: result.insertId, // This adds the newly generated ID to the fleet object
        };
        resolve(newUser);
      }
    });
  });
};

export const findUserByIdRepository = (userId: number): Promise<IUser | undefined> => {
  return new Promise((resolve, reject) => {
    const sql = `SELECT * FROM users WHERE id = ?`;
    connection.query(sql, [userId], (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results[0]);
      }
    });
  });
};

export const updateUser = (userId: number, newUser: IUser): Promise<IUser | undefined> => {
  return new Promise((resolve, reject) => {
    const sql = `UPDATE users SET firstName = ?, lastName = ?, email = ?, password = ? WHERE id = ?`;
    const { firstName, lastName, email, password } = newUser;
    connection.query(sql, [firstName, lastName, email, password, userId], (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result.changedRows > 0 ? newUser : undefined);
      }
    });
  });
};

export const deleteAllUsers = (): Promise<void> => {
  return new Promise((resolve, reject) => {
    const sql = `DELETE FROM users`;
    connection.query(sql, (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });
};
