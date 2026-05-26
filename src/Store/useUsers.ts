import { create } from "zustand";

import { users as initialUsers } from "../Data/Users";

interface Users {
  id: number;
  name: string;
  designation: string;
  role: string;
  salary: number;
  Email: string;
  password: string;
}

interface Store {
  users: Users[];
  loggedUser: Users | null;
  login: ( Email: string,password: string) => boolean;
  logout: () => void;
  addEmployee: (newEmployee: Users) => void;
  editEmployee: (updatedEmployee: Users) => void;
  deleteEmployee: (id: number) => void;
}
export const useUsers =
create<Store>((set) => ({
  users: initialUsers,
  loggedUser: null,
  login: (Email: string,password: string) => {

    const foundUser =
      initialUsers.find(
        (u) =>
          u.Email.toLowerCase() ===
            Email.toLowerCase() &&
          u.password === password
      );

    if (foundUser) {

      set({
        loggedUser: foundUser
      });

      localStorage.setItem(
        "user",
        JSON.stringify(foundUser)
      );

      return true;
    }

    return false;
  },

  logout: () => {

    localStorage.removeItem("user");

    set({
      loggedUser: null
    });
  },

  addEmployee: (newEmployee) =>
    set((state) => ({
      users: [
        ...state.users,
        newEmployee
      ],
    })),

  editEmployee: (updatedEmployee) =>
    set((state) => ({
      users: state.users.map((user) =>
        user.id === updatedEmployee.id
          ? updatedEmployee
          : user
      ),
    })),

  deleteEmployee: (id) =>
    set((state) => ({
      users: state.users.filter(
        (user) => user.id !== id
      ),
    })),
}));