import { Link } from "react-router-dom";
import { useUsers } from "../Store/useUsers";
import { useLeaveStore } from "../Store/LeaveData";

function EmployeeStatistic() {

  const users = useUsers(
    (state) => state.users
  );

  const leaves = useLeaveStore(
    (state) => state.leaves
  );

  // STATISTICS
  const totalEmployees = users.length;

  const admins = users.filter(
    (user) =>
      user.designation === "Admin"
  ).length;

  const employees = users.filter(
    (user) =>
      user.designation === "Employee"
  ).length;

  const pendingLeaves = leaves.filter(
    (leave) =>
      leave.status === "Pending"
  ).length;

  return (

    <div className="p-5">

      <h1 className="text-3xl font-bold">
        Dashboard
      </h1>

      <div className="grid grid-cols-2 gap-5 mt-5">

        <div className="p-5 border rounded">

          <h3>Total Employees</h3>

          <p>{totalEmployees}</p>

        </div>

        <div className="p-5 border rounded">

          <h3>Admins</h3>

          <p>{admins}</p>

        </div>

        <div className="p-5 border rounded">

          <h3>Employees</h3>

          <p>{employees}</p>

        </div>

        <div className="p-5 border rounded">

          <h3>Pending Leaves</h3>

          <p>{pendingLeaves}</p>

        </div>

      </div>

      <div className="flex gap-5 mt-10">

        <Link to="/employees">
          Employee Table
        </Link>

        <Link to="/add-employee">
          Add Employee
        </Link>

        <Link to="/apply-leave">
          Apply Leave
        </Link>

      </div>

    </div>
  );
}

export default EmployeeStatistic;