import React, { useContext } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import DashboardLayout from "./components/DashboardLayout";
import NotFound from "./components/NotFound";
import AuthContext from "./contexts/AuthContext";
import PrivateRoute from "./components/PrivateRoute";
import Dashboard from "./components/Dashboard";
import ResearchPortal from "./components/ResearchPortal";
import MarketMovers from "./components/MarketMovers"; // Import the new component

const App = () => {
  const { isAuthenticated, user } = useContext(AuthContext);

  return (
    <Routes>
      <Route path="/landing" element={<LandingPage />} />
      <Route element={<PrivateRoute />}>
        <Route
          path="/dashboard"
          element={
            <DashboardLayout user={user}>
              <Dashboard />
            </DashboardLayout>
          }
        />
        <Route
          path="/research"
          element={
            <DashboardLayout user={user}>
              <ResearchPortal />
            </DashboardLayout>
          }
        />
        <Route
          path="/market-movers"
          element={
            <DashboardLayout user={user}>
              <MarketMovers />
            </DashboardLayout>
          }
        />
      </Route>
      <Route path="/" element={<Navigate to="/landing" />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
