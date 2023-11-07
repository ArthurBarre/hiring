"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let users = [];
function saveUser(user) {
    users.push(user);
    return user;
}
exports.saveUser = saveUser;
function findUserByIdRepository(userId) {
    return users.find((u) => u.id === userId);
}
exports.findUserByIdRepository = findUserByIdRepository;
const updateUser = (userId, newUser) => {
    const index = users.findIndex((u) => u.id === userId);
    if (index !== -1) {
        users[index] = newUser;
        return users[index];
    }
    return undefined;
};
exports.updateUser = updateUser;
const deleteAllUsers = () => {
    users = [];
};
exports.deleteAllUsers = deleteAllUsers;
