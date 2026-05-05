import { useState } from "react";
import { login } from "../services/authService";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { Navigate } from "react-router-dom";


type FormData = {
  email: string;
  password: string;
};

const Login = () => {
  const { login: lg } = useAuth();
  const { isAuthenticated } = useAuth();

  if (isAuthenticated) {
    return <Navigate to="/topics" />;
  }
  if (isAuthenticated === null) return <p>Loading...</p>;

  const [form, setForm] = useState<FormData>({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      setLoading(true);

      const res = await login(form);

      lg(res.token);
      // localStorage.setItem("token", res.token);

      navigate("/topics");
    } catch (error) {
      alert("Invalid credentials");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-left">
        <div className="auth-card">
          <h2>Welcome Back</h2>

          <form onSubmit={handleSubmit}>
            <input
              className="auth-input"
              type="email"
              placeholder="Email"
              value={form.email}
              onChange={(e) =>
                setForm({ ...form, email: e.target.value })
              }
            />

            <input
              className="auth-input"
              type="password"
              placeholder="Password"
              value={form.password}
              onChange={(e) =>
                setForm({ ...form, password: e.target.value })
              }
            />

            <button className="auth-button" type="submit">
              {loading ? "Logging in..." : "Login"}
            </button>
          </form>

          <p style={{ marginTop: "10px" }}>
            Don’t have an account?{" "}
            <span
              style={{ color: "#007bff", cursor: "pointer" }}
              onClick={() => navigate("/signup")}
            >
              Sign up
            </span>
          </p>
        </div>
      </div>

      {/* RIGHT */}
      <div className="auth-right">
        <div style={{ textAlign: "center" }}>
          <h1>DSA Tracker</h1>
          <p>Master Data Structures & Algorithms 📚</p>
        </div>
      </div>
    </div>
  );
};

export default Login;