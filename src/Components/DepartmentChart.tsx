import { useUsers } from "../Store/useUsers";

function DepartmentChart() {
  const users = useUsers((state) => state.users);
  const frontendCount = users.filter((user) => user.role === "Frontend" ).length;
  const backendCount = users.filter((user) => user.role === "Backend").length;
  const testingCount = users.filter((user) => user.role === "Testing").length;
  const pythonCount = users.filter((user) => user.role === "Python").length;
  return (
    <div className="mt-10">
      <h2 className="text-2xl font-bold">Department Statistics</h2>
      <div className="mt-5 space-y-3">
        <div>Frontend : {frontendCount}</div>
        <div>Backend : {backendCount}</div>
        <div>Testing : {testingCount}</div>
        <div>Python : {pythonCount}</div>
      </div>
    </div>
  );
}
export default DepartmentChart;