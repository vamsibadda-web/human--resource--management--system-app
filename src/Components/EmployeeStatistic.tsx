
import { useUsers } from "../Store/useUsers";
import { useLeaveStore } from "../Store/LeaveData";

function EmployeeStatistic() {
  const users = useUsers((state) => state.users )
  const leaves = useLeaveStore((state) => state.leaves)
  const totalEmployees = users.length;
  // const admins = users.filter((user) => user.designation === "Admin").length;
  const admins = users.reduce(
  (count, user) =>user.designation === "Admin"
      ? count + 1: count,
  0
);
  const employees = users.filter((user) =>user.designation === "Employee" ).length;
  return (
    <div className="p-5">
      <h1 className="text-3xl font-bold">Dashboard</h1>
      <div className="grid grid-cols-2 gap-5 mt-5">
        <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200 hover:shadow-2xl transition duration-300">
          <h3 className="text-2xl font-bold text-blue-700 mb-5 tracking-wide">Total Employees</h3>
          <p className="mt-4 text-4xl font-bold text-gray-800">{totalEmployees}</p>
        </div>
        <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200 hover:shadow-2xl transition duration-300">
          <h3 className="text-xl font-semibold text-blue-600">Admins</h3>
          <p className="mt-4 text-4xl font-bold text-gray-800">{admins}</p>
        </div>
        <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200 hover:shadow-2xl transition duration-300">
          <h3 className="text-xl font-semibold text-blue-600">Employees</h3>
          <p className="mt-4 text-4xl font-bold text-gray-800">{employees}</p>
        </div>
       <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200 hover:shadow-2xl transition duration-300">
         <h3 className="text-xl font-semibold text-blue-600 mb-4">Leave Requests</h3>
        <table className="w-full overflow-hidden rounded-xl border-collapse">
        <thead>
        <tr className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <th className="p-3 border">Employee</th>
        <th className="p-3 border"> Reason</th>
        <th className="p-3 border">Status</th>
      </tr>
    </thead>
    <tbody>
         {leaves.map((leave) => (
          <tr key={leave.id}
           className="hover:bg-blue-50 transition duration-200 text-center">
        <td className="p-4 border-b text-gray-700 font-medium"> {leave.employeeName}</td>
          <td className="p-4 border-b text-gray-700 font-medium">{leave.reason}</td>
          <td className="p-4 border-b text-gray-700 font-medium">
            <span className={`px-4 py-1 rounded-full text-white font-semibold
              ${ leave.status === "Approved" ? "bg-green-500": leave.status === "Rejected"? "bg-red-500": "bg-yellow-500"}`}>{leave.status}
            </span>
          </td>
        </tr>
      ))}
    </tbody>
   </table>
</div>
</div>
</div>
  );
}
export default EmployeeStatistic;