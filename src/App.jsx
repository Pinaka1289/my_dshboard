import React, { useContext } from "react";
import {
  Navigate,
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import LandingPage from "./components/LandingPage";
import DashboardLayout from "./components/DashboardLayout";
import NotFound from "./components/NotFound";
import AuthContext from "./contexts/AuthContext";
import PrivateRoute from "./components/PrivateRoute";
import ResearchPortal from "./components/ResearchPortal"; // Import the new component

const App = () => {
  const { isAuthenticated, user } = useContext(AuthContext);

  return (
    <div>
      <Routes>
        <Route path="/landing" element={<LandingPage />} />
        {/* <PrivateRoute path="/dashboard">
          <Dashboard />
        </PrivateRoute> */}
        <Route
          element={<DashboardLayout />} // Wrap these routes with DashboardLayout
        ></Route>
        <Route path="/dashboard" element={<DashboardLayout user={user} />} />
        <Route path="/research" element={<ResearchPortal />} />
        <Route path="/" element={<Navigate to="/landing" />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
