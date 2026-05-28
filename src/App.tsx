// import EmployeeTable from "./Components/EmployeeTable";
import ProtectedRoute from "./Routes/ProtectedRoute";
import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import DashboardLayout from "./Layout/DashboardLayout";
const LoginScreen = lazy(() => import("./Components/LoginScreen"));
const Dashboard = lazy(() => import("./Components/Dashboard"));
const EmployeeTable = lazy(() => import("./Components/EmployeeTable"));
const EmployeeForm = lazy(() => import("./Components/EmployeeForm"));
const ApplyLeave = lazy(() => import("./Components/ApplyLeave"));
const LeaveManagement = lazy(() => import("./Components/LeaveManagement"));
const EmployeeStatistic = lazy(() => import("./Components/EmployeeStatistic"));
const DepartmentChart = lazy(() => import("./Components/DepartmentChart"));

function App() {
  return (
    <Suspense
      fallback={
        <div className="flex justify-center items-center h-screen text-2xl font-bold">Loading... </div>
      }>
      <Routes>
        <Route path="/" element={<LoginScreen />}/>
        <Route path="/dashboard" element={<ProtectedRoute allowedRoles={[ "Admin","Employee"]}><DashboardLayout><Dashboard /></DashboardLayout></ProtectedRoute>}/>
         <Route path="/employees" element={<ProtectedRoute allowedRoles={[ "Admin"]}><DashboardLayout><EmployeeTable/></DashboardLayout></ProtectedRoute>}/>
         <Route path="/add-employee" element={<ProtectedRoute allowedRoles={["Admin"]}><DashboardLayout><EmployeeForm/></DashboardLayout></ProtectedRoute>}/>
         <Route path="/leave-management" element={<ProtectedRoute allowedRoles={[ "Admin"]}><DashboardLayout><LeaveManagement/></DashboardLayout></ProtectedRoute>}/>
         <Route path="/apply-leave" element={<ProtectedRoute allowedRoles={[ "Employee"]}><DashboardLayout><ApplyLeave/></DashboardLayout></ProtectedRoute>}/>
         <Route path="/statistics" element={<ProtectedRoute allowedRoles={[ "Admin","Employee"]}><DashboardLayout><EmployeeStatistic/></DashboardLayout></ProtectedRoute>}/>
         <Route path="/department-chart" element={<ProtectedRoute allowedRoles={[ "Admin"]}><DashboardLayout><DepartmentChart/></DashboardLayout></ProtectedRoute>}/>
      </Routes>
    </Suspense>
  );
}

export default App;