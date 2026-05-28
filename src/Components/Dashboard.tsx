// import { Link } from "react-router-dom";

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
    </div>
  );
}
export default Dashboard