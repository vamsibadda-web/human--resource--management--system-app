import { useLeaveStore } from "../Store/LeaveData";

function LeaveManagement() {
  const leaves = useLeaveStore((state) => state.leaves);
  const approveLeave = useLeaveStore((state) => state.approveLeave)
  const rejectLeave = useLeaveStore((state) => state.rejectLeave)
  return (
    <div className="min-h-screen p-6 bg-gray-100">
      <div className="p-6 bg-white shadow-lg rounded-2xl">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-bold text-gray-800"> Leave Management</h1>
          <div className="px-4 py-2 text-sm font-semibold text-white bg-blue-600 rounded-lg">
            Total Requests : {leaves.length}
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full border border-gray-200 rounded-lg">
            <thead className="text-white bg-gray-800">
              <tr>
                <th className="px-4 py-3 text-left border">Employee</th>
                <th className="px-4 py-3 text-left border">Reason</th>
                <th className="px-4 py-3 text-left border"> From</th>
                <th className="px-4 py-3 text-left border">To</th>
                <th className="px-4 py-3 text-left border">Status</th>
                <th className="px-4 py-3 text-center border">Actions</th>
              </tr>
            </thead>
            <tbody>
              {leaves.map((leave) => (
                <tr
                  key={leave.id}className="transition hover:bg-gray-100">
                  <td className="px-4 py-3 border">{leave.employeeName}</td>
                  <td className="px-4 py-3 border">{leave.reason}</td>
                  <td className="px-4 py-3 border">{leave.fromDate}</td>
                  <td className="px-4 py-3 border">{leave.toDate} </td>
                 <td className="px-4 py-3 border">
                    <span className={`px-3 py-1 text-sm font-semibold rounded-full
                      ${leave.status === "Approved"? "bg-green-100 text-green-700":leave.status === "Rejected"
                          ? "bg-red-100 text-red-700"
                          : "bg-yellow-100 text-yellow-700"}`}>
                      {leave.status}</span>
                  </td>
                  <td className="px-4 py-3 space-x-3 text-center border">
                    <button
                      onClick={() =>approveLeave(leave.id)}
                      className="px-4 py-2 text-white transition bg-green-600 rounded-lg hover:bg-green-700"> Approve</button>
                    <button
                      onClick={() =>rejectLeave(leave.id)}
                    className="px-4 py-2 text-white transition bg-red-600 rounded-lg hover:bg-red-700">Reject</button>
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
export default LeaveManagement