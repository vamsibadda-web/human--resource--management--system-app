import { useState,useMemo,useCallback} from "react";
import { useUsers } from "../Store/useUsers";

function EmployeeTable() {
   const users = useUsers((state) => state.users );
    const deleteEmployee = useUsers((state) => state.deleteEmployee)
    const editEmployee = useUsers((state) => state.editEmployee)
    const [search, setSearch] = useState("");

    const filteredUsers = useMemo(() => {
    console.log("Loading Filter");
    return users.filter((user) => user.name.toLowerCase().includes(search.toLowerCase()));
  }, [users, search]);
 const handleEdit = (user: any) => {
    const updatedName = prompt(
      "Enter New Name",
      user.name );
    if (!updatedName) return;
    editEmployee({
      ...user,
      name: updatedName,});
  };
  const [showAlert, setShowAlert]= useState(false)
    const [selectedId, setSelectedId]
    = useState<number | null>(null);
  const handleDeleteClick = useCallback(
  (id: number) => {
    setSelectedId(id);
    setShowAlert(true);
  },[]
);
  const handleConfirmDelete = () => {
    if (selectedId !== null) {
      deleteEmployee(selectedId);
      alert("Employee Deleted");
    }
   setShowAlert(false);
  };
  const handleCancel = () => {
    setShowAlert(false);
  };

return (
 <div className="p-6 bg-gray-100 min-h-screen">
  <div className="bg-white p-6 rounded-xl shadow-md">
    <div className="flex justify-between items-center mb-5">
      <h1 className="text-2xl font-bold text-gray-700">Employee Management</h1>
      <input
        type="text"
        placeholder="Search Employee..."
        className="border px-4 py-2 rounded-lg outline-none focus:ring-2 focus:ring-blue-400"
        onChange={(e) => setSearch(e.target.value)} />
    </div>
    <table className="w-full border-collapse">
      <thead>
        <tr className="bg-blue-600 text-white">
          <th className="p-3 border">ID</th>
          <th className="p-3 border">Name</th>
          <th className="p-3 border">Designation</th>
          <th className="p-3 border">Role</th>
          <th className="p-3 border">Salary</th>
          <th className="p-3 border">Actions</th>
        </tr>
      </thead>
      <tbody>
        {filteredUsers.map((user) => (
          <tr
              key={user.id}
            className="text-center hover:bg-gray-100 transition">
            <td className="p-3 border">{user.id}</td>
            <td className="p-3 border">{user.name}</td>
            <td className="p-3 border">{user.designation}</td>
            <td className="p-3 border">{user.role}</td>
            <td className="p-3 border">{user.salary}</td>
            <td className="p-3 border space-x-2">
              <button
                onClick={() => handleEdit(user)}
                className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 transition">Edit </button>
              <button
                onClick={() => handleDeleteClick(user.id)}
                className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition">Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
   </table>
  </div>
  {showAlert && (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
      <div className="bg-white w-[350px] p-6 rounded-2xl shadow-2xl text-center">
        <h2 className="text-2xl font-bold text-gray-700">Are You Sure? </h2>
        <p className="mt-3 text-gray-500">Do you want to delete employee?</p>
        <div className="flex justify-center gap-5 mt-6">
          <button
            onClick={handleConfirmDelete}
            className="bg-red-500 text-white px-5 py-2 rounded-lg hover:bg-red-600 transition">Yes</button>
          <button
            onClick={handleCancel}
            className="bg-gray-400 text-white px-5 py-2 rounded-lg hover:bg-gray-500 transition">No</button>
        </div>
      </div>
    </div>
  )}

</div>
)
}
export default EmployeeTable