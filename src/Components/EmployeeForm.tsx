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
    <div>
      <h3>Add Employee</h3>
      <input placeholder="Name" value={name}
        onChange={(e) =>
          setName(e.target.value)}/>
      <input placeholder="Role" value={role}
        onChange={(e) =>
          setRole(e.target.value)}/>
      <input placeholder="Salary" value={salary}
        onChange={(e) =>
          setSalary(e.target.value) }/>
      <button onClick={handleAdd}>
        Add Employee
      </button>
    </div>
  );
}
export default EmployeeForm