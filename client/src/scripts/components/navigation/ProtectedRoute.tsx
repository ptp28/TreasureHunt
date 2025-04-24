import { Navigate } from "react-router-dom";
import { useAuth } from "../../../services/AuthenticationProvider";

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
    
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

export default ProtectedRoute;