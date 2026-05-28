import { Link } from "react-router-dom";

function Dashboard() {
  const user = JSON.parse(
    localStorage.getItem("user") || "{}");

  return (
    <div className="min-h-screen bg-gray-100 p-6">
     <div className="bg-white p-6 rounded-xl shadow-md">
      <h1 className="text-3xl font-bold text-blue-600">Welcome {user.name}</h1>
        <div className="mt-5 space-y-2">
          <p>Role : {user.role}</p>
          <p>Designation : {user.designation}</p>
        </div>
      </div>
      <div className="mt-10 flex gap-5 flex-wrap">
        <Link to="/apply-leave" className="bg-pink-600 text-white px-5 py-3 rounded-lg">Apply Leave</Link>
        {user.designation === "Admin" && (
          <>
          <Link to="/employees"className="bg-blue-600 text-white px-5 py-3 rounded-lg">Employees</Link>
          <Link to="/add-employee" className="bg-green-600 text-white px-5 py-3 rounded-lg"> Add Employee</Link>
          <Link to="/department-chart" className="bg-purple-600 text-white px-5 py-3 rounded-lg"> Department Chart</Link>
          <Link to="/statistics" className="bg-orange-600 text-white px-5 py-3 rounded-lg">Statistics</Link>
          </>
        )}
      </div>
    </div>
  );
}
export default Dashboard