import { create } from "zustand";

interface Leave {
  id: number;
  employeeName: string;
  reason: string;
  fromDate: string;
  toDate: string;
  status: string;
}

interface LeaveStore {
  leaves: Leave[];
  addLeave: (leave: Leave) => void;
  approveLeave: (id: number) => void;
  rejectLeave: (id: number) => void;
}

export const useLeaveStore = create<LeaveStore>((set) => ({
    leaves: JSON.parse(localStorage.getItem("leaves")||"[]"),
  addLeave: (leave) =>
    set((state) => ({
      leaves: [...state.leaves, leave],
     })),
  approveLeave: (id) =>
    set((state) => ({
      leaves: state.leaves.map((leave) =>
        leave.id === id
          ? { ...leave, status: "Approved" }: leave
      ),
    })),

  rejectLeave: (id) =>
    set((state) => ({
      leaves: state.leaves.map((leave) =>
        leave.id === id
          ? { ...leave, status: "Rejected" }: leave
      ),
    })),
}));