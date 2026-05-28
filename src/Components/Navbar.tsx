import { Link, useNavigate } from "react-router-dom";
import { useUsers } from "../Store/useUsers";

function Navbar() {
  const navigate = useNavigate();
  const logout = useUsers((state) => state.logout)
  const user = JSON.parse(localStorage.getItem("user") || "null")
  const handleLogout = () => {
    logout();
    navigate("/")};
return (
    <nav className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-8 py-4 flex justify-between items-center shadow-lg">
      <h1 className="text-3xl font-bold tracking-wide">
        HRMS
      </h1>
      <div className="flex items-center gap-4">
        {user?.designation === "Admin" && (
          <>
              <Link to="/employees"
              className="px-4 py-2 rounded-lg hover:bg-white hover:text-blue-700 transition duration-300 font-medium">Employees </Link>
            <Link to="/add-employee"
              className="px-4 py-2 rounded-lg hover:bg-white hover:text-blue-700 transition duration-300 font-medium">Add Employee</Link>
            <Link to="/leave-management"
              className="px-4 py-2 rounded-lg hover:bg-white hover:text-blue-700 transition duration-300 font-medium">Leave Management </Link>
          </>
        )}
        {user?.designation === "Employee" && (
          <>
            <Link to="/statistics"
              className="px-4 py-2 rounded-lg hover:bg-white hover:text-blue-700 transition duration-300 font-medium"> Statistics </Link>
            <Link to="/apply-leave"
              className="px-4 py-2 rounded-lg hover:bg-white hover:text-blue-700 transition duration-300 font-medium">Apply Leave</Link>
          </>)}
        <button
          onClick={handleLogout}
          className="bg-red-500 hover:bg-red-600 px-5 py-2 rounded-xl font-semibold shadow-md transition duration-300">Logout</button>
      </div>
    </nav>
  );
}

export default Navbar;