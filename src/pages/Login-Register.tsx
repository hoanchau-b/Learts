import { useState, type FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/authStore";
import toast from "react-hot-toast";

const LoginRegister = () => {
  const navigate = useNavigate();
  const { login, register, isLoading, error } = useAuthStore();

  // Login form
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  // Register form
  const [regName, setRegName] = useState("");
  const [regEmail, setRegEmail] = useState("");
  const [regPassword, setRegPassword] = useState("");

  const handleLogin = async (e: FormEvent) => {
    e.preventDefault();
    if (!loginEmail || !loginPassword) {
      toast.error("Please fill in all fields");
      return;
    }
    try {
      await login(loginEmail, loginPassword);
      toast.success("Login successful!");
      navigate("/dashboard");
    } catch {
      toast.error(error || "Login failed");
    }
  };

  const handleRegister = async (e: FormEvent) => {
    e.preventDefault();
    if (!regName || !regEmail || !regPassword) {
      toast.error("Please fill in all fields");
      return;
    }
    if (regPassword.length < 6) {
      toast.error("Password must be at least 6 characters");
      return;
    }
    try {
      await register(regEmail, regPassword, regName);
      toast.success("Registration successful!");
      navigate("/dashboard");
    } catch {
      toast.error(error || "Registration failed");
    }
  };

  return (
    <div>
      {/* Page Title/Header */}
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
                <h1 className="title">Login & Register</h1>
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a href="/">Home</a>
                  </li>
                  <li className="breadcrumb-item active">
                    Login & Register
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Login & Register Section */}
      <div className="section section-padding">
        <div className="container">
          <div className="row g-0">
            {/* Login */}
            <div className="col-lg-6">
              <div className="user-login-register bg-light">
                <div className="login-register-title">
                  <h2 className="title">Login</h2>
                  <p className="desc">Great to have you back!</p>
                </div>
                <div className="login-register-form">
                  <form onSubmit={handleLogin}>
                    <div className="row learts-mb-n50">
                      <div className="col-12 learts-mb-50">
                        <input
                          type="email"
                          placeholder="Email address"
                          value={loginEmail}
                          onChange={(e) => setLoginEmail(e.target.value)}
                        />
                      </div>
                      <div className="col-12 learts-mb-50">
                        <input
                          type="password"
                          placeholder="Password"
                          value={loginPassword}
                          onChange={(e) => setLoginPassword(e.target.value)}
                        />
                      </div>
                      <div className="col-12 text-center learts-mb-50">
                        <button
                          type="submit"
                          className="btn btn-dark btn-outline-hover-dark"
                          disabled={isLoading}
                        >
                          {isLoading ? "Loading..." : "Login"}
                        </button>
                      </div>
                      <div className="col-12 learts-mb-50">
                        <div className="row learts-mb-n20">
                          <div className="col-12 learts-mb-20">
                            <div className="form-check">
                              <input
                                type="checkbox"
                                className="form-check-input"
                                id="rememberMe"
                              />
                              <label className="form-check-label" htmlFor="rememberMe">
                                Remember me
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            {/* Register */}
            <div className="col-lg-6">
              <div className="user-login-register">
                <div className="login-register-title">
                  <h2 className="title">Register</h2>
                  <p className="desc">
                    If you don't have an account, register now!
                  </p>
                </div>
                <div className="login-register-form">
                  <form onSubmit={handleRegister}>
                    <div className="row learts-mb-n50">
                      <div className="col-12 learts-mb-20">
                        <label htmlFor="registerName">
                          Full Name <abbr className="required">*</abbr>
                        </label>
                        <input
                          type="text"
                          id="registerName"
                          value={regName}
                          onChange={(e) => setRegName(e.target.value)}
                        />
                      </div>
                      <div className="col-12 learts-mb-20">
                        <label htmlFor="registerEmail">
                          Email address <abbr className="required">*</abbr>
                        </label>
                        <input
                          type="email"
                          id="registerEmail"
                          value={regEmail}
                          onChange={(e) => setRegEmail(e.target.value)}
                        />
                      </div>
                      <div className="col-12 learts-mb-20">
                        <label htmlFor="registerPassword">
                          Password <abbr className="required">*</abbr>
                        </label>
                        <input
                          type="password"
                          id="registerPassword"
                          placeholder="6+ characters"
                          value={regPassword}
                          onChange={(e) => setRegPassword(e.target.value)}
                        />
                      </div>
                      <div className="col-12 learts-mb-50">
                        <p>
                          Your personal data will be used to support your
                          experience throughout this website, to manage access
                          to your account, and for other purposes described in
                          our privacy policy.
                        </p>
                      </div>
                      <div className="col-12 text-center learts-mb-50">
                        <button
                          type="submit"
                          className="btn btn-dark btn-outline-hover-dark"
                          disabled={isLoading}
                        >
                          {isLoading ? "Loading..." : "Register"}
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginRegister;
