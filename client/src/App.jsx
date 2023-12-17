import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import ProjectCreate from "./pages/ProjectCreate";
import { useSelector } from "react-redux";
import AllProject from "./pages/AllProject";
function App() {
  const { user } = useSelector((state) => state.user);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AllProject />} />
        <Route
          path="/login"
          element={!user ? <Login /> : <Navigate to="/home" />}
        />
        <Route
          path="/home"
          element={user ? <Home /> : <Navigate to="/login" />}
        />
        <Route
          path="/project/:id"
          element={user ? <Projects /> : <Navigate to="/login" />}
        />
        <Route
          path="/project/create"
          element={user ? <ProjectCreate /> : <Navigate to="/login" />}
        />
      </Routes>
    </Router>
  );
}

export default App;
