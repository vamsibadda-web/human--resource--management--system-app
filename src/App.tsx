import { Route, Routes } from "react-router-dom";
import LoginScreen from "./Components/LoginScreen";
import ProtectedRoute from "./Components/ProtectedRoute";

import EmployeeForm from "./Components/EmployeeForm";
import EmployeeTable from "./Components/EmployeeTable";
import Dashboard from "./Components/Dashboard";
// import Dashboard from "./Components/Dashboard";

function App() {
 return(
  <Routes>
   <Route path="/" element={<LoginScreen />}/>
   <Route  path="/dashboard" element={<ProtectedRoute allowedRoles={["Admin", "Employee"]}><Dashboard /> </ProtectedRoute>} />
   <Route path="/employess" element={ <ProtectedRoute allowedRoles={["Admin"]}> <EmployeeForm/></ProtectedRoute>}/>
   <Route path="/add-employee" element={ <ProtectedRoute allowedRoles={["Admin"]}><EmployeeForm /></ProtectedRoute>}/>
</Routes>
 )
}
export default App;
