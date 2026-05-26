import { useState,useMemo } from "react";
import { useUsers } from "../Store/useUsers";

function EmployeeTable() {
       const users = useUsers((state) => state.users );
    const deleteEmployee = useUsers((state) => state.deleteEmployee)
    const [search, setSearch] = useState("");
      const filteredUsers = useMemo(() => {
    console.log("Filtering Users...");
    return users.filter((user) =>user.name .toLowerCase() .includes(search.toLowerCase()));
  }, [users, search]);
return (
    <div>
     <input placeholder="Search Employee" onChange={(e) =>
          setSearch(e.target.value)}/>
       <br />
      <br />
    <table border={1}>
      <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Designation</th>
            <th>Role</th>
            <th>Salary</th>
            <th>Action</th>
          </tr>
        </thead>
       <tbody>
       {filteredUsers.map((user) => (
         <tr key={user.id}>
          <td>{user.id}</td>
              <td>{user.name}</td>
               <td>{user.designation}</td>
              <td>{user.role}</td>
              <td>{user.salary}</td>
              <td>
                <button
                  onClick={() =>
                    deleteEmployee(user.id)}> Delete</button>
              </td>
            </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
export default EmployeeTable;