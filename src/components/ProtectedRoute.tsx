import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/authStore";

interface ProtectedRouteProps {
  children: React.ReactNode;
}

/**
 * Wraps admin pages. Redirects to /admin/login if no valid token.
 * Calls checkAuth to validate token on mount.
 */
const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const navigate = useNavigate();
  const { admin, token, checkAuth } = useAuthStore();

  useEffect(() => {
    if (!token) {
      navigate("/admin/login", { replace: true });
      return;
    }
    if (!admin) {
      checkAuth().catch(() => {
        navigate("/admin/login", { replace: true });
      });
    }
  }, [token, admin, checkAuth, navigate]);

  if (!token) return null;
  if (!admin) {
    return (
      <div className="section section-padding">
        <div className="container text-center">
          <p>Authenticating...</p>
        </div>
      </div>
    );
  }

  return <>{children}</>;
};

export default ProtectedRoute;
