import { Navigate } from "react-router-dom";

interface ProtectedRouteProps {
  children: React.ReactNode;
  allowedRoles: string[];
}

function ProtectedRoute({
  children,
  allowedRoles,
}: ProtectedRouteProps) {

  const user = JSON.parse(
    localStorage.getItem("user") || "null"
  );
  if (!user) {
    return <Navigate to="/" />;
  }
  if (!allowedRoles.includes(user. designation)) {
    return <Navigate to="/dashboard"/>;
  }

  return <>{children}</>;
}

export default ProtectedRoute