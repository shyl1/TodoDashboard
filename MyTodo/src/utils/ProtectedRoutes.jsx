import { useContext } from "react";
import {  Navigate , Outlet } from "react-router-dom";
import { AuthContext } from "../components/AuthenticationContext";

export function ProtectedRoutes(){
  const {isAuthenticated} = useContext(AuthContext);
  if(!isAuthenticated) {
    //console.log("isAuthenticated:", isAuthenticated);
    return <Navigate to="/" replace/>;
  }
  //console.log("isAuthenticated:", isAuthenticated);
  return <Outlet/>;

}