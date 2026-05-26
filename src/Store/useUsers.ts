import { create } from "zustand";
import { users } from "../Data/Users";


interface Users{
    id:number,
    name:string,
    role:string,
    salary:number,
    Email :string,
    password:string
}
interface store {users:Users[];
    loggedUser: Users | null; 
    login: (name: string) => boolean; 
    logout: () => void;
};
export const useUsers = create<store>((set) => ({
    users: users,
    loggedUser:null,
    login: (Email: string,password:string) => {
    const foundUser = users.find((u) => u.Email.toLowerCase() === Email.toLowerCase()
      && u.password === password);
    if (foundUser) {
      set({ loggedUser: foundUser });
      return true;
    }
    return false;
  },
  logout: () => set({ loggedUser: null }),
}));
