import { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuthStore } from "../store/authStore";

const Dashboard = () => {
  const navigate = useNavigate();
  const { admin, token, logout, checkAuth } = useAuthStore();

  useEffect(() => {
    if (!token) {
      navigate("/login-register", { replace: true });
      return;
    }
    if (!admin) {
      checkAuth();
    }
  }, [token, admin, checkAuth, navigate]);

  // Re-check after checkAuth fills admin
  useEffect(() => {
    if (!token) {
      navigate("/login-register", { replace: true });
    }
  }, [token, navigate]);

  const handleLogout = () => {
    logout();
    navigate("/login-register", { replace: true });
  };

  if (!token) return null;
  if (!admin) {
    return (
      <div className="section section-padding">
        <div className="container text-center">
          <p>Loading dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Header */}
      <div
        className="page-title-section section"
        data-bg-image="assets/images/bg/page-title-1.webp"
        style={{
          backgroundImage: 'url("assets/images/bg/page-title-1.webp")',
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="page-title">
                <h1 className="title">Dashboard</h1>
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a href="/">Home</a>
                  </li>
                  <li className="breadcrumb-item active">Dashboard</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Dashboard Content */}
      <div className="section section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <div className="bg-light p-5" style={{ borderRadius: 8 }}>
                <h3 style={{ marginBottom: 16 }}>
                  Welcome, {admin.name}
                </h3>
                <p style={{ marginBottom: 8 }}>
                  <strong>Email:</strong> {admin.email}
                </p>
                <p style={{ marginBottom: 24 }}>
                  <strong>Admin ID:</strong> {admin.id}
                </p>
                <p style={{ color: "#666", marginBottom: 32 }}>
                  You are logged in as an administrator. This is a protected
                  area — only authenticated admins can see this page.
                </p>
                <div style={{ display: "flex", gap: 12, marginBottom: 16, flexWrap: "wrap" }}>
                  <Link
                    to="/admin/products"
                    className="btn btn-dark btn-outline-hover-dark"
                  >
                    Manage Products
                  </Link>
                  <Link
                    to="/admin/orders"
                    className="btn btn-dark btn-outline-hover-dark"
                  >
                    Manage Orders
                  </Link>
                </div>
                <button
                  className="btn btn-dark btn-outline-hover-dark"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
