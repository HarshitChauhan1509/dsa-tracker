import { useState } from "react";
import { register } from "../services/authService";
import { useNavigate } from "react-router-dom";
import "../index.css"

type FormData = {
  email: string;
  password: string;
};

const Signup = () => {
  const [form, setForm] = useState<FormData>({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await register(form);
      localStorage.setItem("token", res.token);
      navigate("/topics");
    } catch {
      alert("Signup failed");
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-left">
        <div className="auth-card">
          <h2>Create Account</h2>

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
              Sign Up
            </button>
          </form>

          <p style={{ marginTop: "10px" }}>
            Already have an account?{" "}
            <span
              style={{ color: "#007bff", cursor: "pointer" }}
              onClick={() => navigate("/")}
            >
              Login
            </span>
          </p>
        </div>
      </div>

      <div className="auth-right">
        <div style={{ textAlign: "center" }}>
          <h1>DSA Tracker</h1>
          <p>Track your coding journey 🚀</p>
        </div>
      </div>
    </div>
  );
};

export default Signup;