import { Navigate, Outlet, useLocation, useNavigate } from "react-router-dom";
import { useAuthContext } from "../providers/auth-provider";
import { useEffect } from "react";

const Protected = () => {
  const { isAuthenticated } = useAuthContext();
  const { pathname } = useLocation();
  const navigate = useNavigate();
  //   alert(pathname);

  if (!isAuthenticated) {
    return <Navigate to="/login" replace state={{ from: pathname }} />;
  }

  //   console.log('setting outlet')
  return <Outlet />;
};

export default Protected;
