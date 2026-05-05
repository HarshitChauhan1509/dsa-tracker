import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Topics from "./pages/Topic";
import Chapters from "./pages/Chapter";
import Problems from "./pages/Problem";
import Signup from "./pages/SignUp";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { useAuth } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";



const App = () => {

  const { isAuthenticated } = useAuth();

  return (
    <BrowserRouter>
      <div className="app-container">
        {isAuthenticated && <Navbar />}

        <main className="main-content">
          <Routes>
            {/* PUBLIC */}
            <Route path="/" element={<Login />} />
            <Route path="/signup" element={<Signup />} />

            {/* PROTECTED */}
            <Route
              path="/topics"
              element={
                <ProtectedRoute>
                  <Topics />
                </ProtectedRoute>
              }
            />

            <Route
              path="/chapters/:topicId"
              element={
                <ProtectedRoute>
                  <Chapters />
                </ProtectedRoute>
              }
            />

            <Route
              path="/problems/:chapterId"
              element={
                <ProtectedRoute>
                  <Problems />
                </ProtectedRoute>
              }
            />
          </Routes>
        </main>

        {isAuthenticated && <Footer />}
      </div>
    </BrowserRouter>
  );
};

export default App;