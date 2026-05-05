import { useNavigate } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import { useAuth } from "../context/AuthContext";


const Navbar = () => {
  const { logout } = useAuth();

  const navigate = useNavigate();
  const { theme, toggleTheme } = useTheme();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <nav className="navbar">
      <div className="nav-left" onClick={() => navigate("/topics")}>
        <h3>DSA Tracker</h3>
      </div>

      <div className="nav-right">
        <button className="nav-btn" onClick={() => navigate("/topics")}>
          Topics
        </button>

        <button className="nav-btn" onClick={toggleTheme}>
          {theme === "light" ? "🌙" : "☀️"}
        </button>

        <button className="nav-btn logout" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;