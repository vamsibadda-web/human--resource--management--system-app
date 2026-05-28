import { useUsers } from "../Store/useUsers";

function DepartmentChart() {
  const users = useUsers((state) => state.users)
  const frontendCount = users.filter((user) => user.role === "Frontend" ).length 
  const backendCount = users.filter((user) => user.role === "Backend").length
  const testingCount = users.filter((user) => user.role === "Testing").length
 return(
    <div className="mt-10">
      <h2 className="mb-6 text-3xl font-bold text-gray-800">Department Statistics</h2>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <div className="p-6 transition bg-white shadow-lg rounded-2xl hover:shadow-2xl">
        <h3 className="text-xl font-semibold text-blue-600">Frontend </h3>
        <p className="mt-4 text-4xl font-bold text-gray-800">{frontendCount}</p>
        </div>
        <div className="p-6 transition bg-white shadow-lg rounded-2xl hover:shadow-2xl">
          <h3 className="text-xl font-semibold text-green-600">Backend</h3> 
          <p className="mt-4 text-4xl font-bold text-gray-800"> {backendCount} </p>
          </div>
        <div className="p-6 transition bg-white shadow-lg rounded-2xl hover:shadow-2xl">
          <h3 className="text-xl font-semibold text-green-600">Testing </h3>
          <p className="mt-4 text-4xl font-bold text-gray-800">{testingCount} </p>
      </div>
    </div>
    </div>
  );
}
export default DepartmentChart;