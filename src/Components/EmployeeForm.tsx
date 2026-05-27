import { useState } from "react";
import { useUsers } from "../Store/useUsers";
import { useNavigate } from "react-router-dom";

function EmployeeForm() {

  const navigate = useNavigate();

  const addEmployee = useUsers(
    (state) => state.addEmployee
  );

  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [salary, setSalary] = useState("");

  const handleAdd = () => {
    const newEmployee = {
      id: Date.now(),
      name,
      designation: "Employee",
      role,
      salary: Number(salary),
      Email: `${name}@gmail.com`,
      password: "1234",
    };
    addEmployee(newEmployee);
    setName("");
    setRole("");
    setSalary("");

    navigate("/employees");
  };

  return (
  <div className="flex justify-center items-center min-h-screen bg-gray-100">

    <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">

      <h2 className="text-2xl font-bold text-center mb-6 text-blue-600">
        Add Employee
      </h2>

      <div className="space-y-4">

        <input
          placeholder="Employee Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full border p-3 rounded-lg"
        />

        <input
          placeholder="Role"
          value={role}
          onChange={(e) => setRole(e.target.value)}
          className="w-full border p-3 rounded-lg"
        />

        <input
          placeholder="Salary"
          value={salary}
          onChange={(e) => setSalary(e.target.value)}
          className="w-full border p-3 rounded-lg"
        />

        <button
          onClick={handleAdd}
          className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700"
        >
          Add Employee
        </button>

      </div>

    </div>

  </div>
);
}
export default EmployeeForm