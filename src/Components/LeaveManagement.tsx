import { useLeaveStore } from "../Store/LeaveData";

function LeaveManagement() {
  const leaves = useLeaveStore( (state) => state.leaves);
  const approveLeave = useLeaveStore( (state) => state.approveLeave);

  const rejectLeave = useLeaveStore( (state) => state.rejectLeave);
  return (
    <div>
      <h2>Leave Requests</h2>
      <table border={1}>
        <thead>
            <tr>
            <th>Name</th>
            <th>Reason</th>
            <th>From</th>
            <th>To</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
            {leaves.map((leave) => (
            <tr key={leave.id}>
              <td>{leave.employeeName}</td>
              <td>{leave.reason}</td>
              <td>{leave.fromDate}</td>
              <td>{leave.toDate}</td>
              <td>{leave.status}</td>
              <td>
                <button onClick={() =>
                    approveLeave(leave.id)
                  }>Approve </button>

                <button
                  onClick={() =>
                    rejectLeave(leave.id)}>Reject</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default LeaveManagement;