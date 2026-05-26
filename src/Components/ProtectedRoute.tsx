import type { JSX } from "react"

import { Navigate } from "react-router-dom"

type props ={
  children : JSX.Element;
  allowedRoles:string[];
}
function ProtectedRoute({children,
  allowedRoles,

} : props){
  const userData = localStorage.getItem("user")
  if(!userData){
    return <Navigate to="/loginScreen"/>
  }
  const user=JSON.parse(userData)
  if(!allowedRoles.includes(user.role))
  {
    return <h2>Access Denied</h2>
  }
  return children
}
export default ProtectedRoute