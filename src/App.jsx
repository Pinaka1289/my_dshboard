import React, { useContext } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import LandingPage from "./components/user/LandingPage";
import DashboardLayout from "./components/sidebar/DashboardLayout";
import NotFound from "./components/common/NotFound";
import AuthContext from "./contexts/AuthContext";
import PrivateRoute from "./components/common/PrivateRoute";
import Dashboard from "./components/sidebar/Dashboard";
import ResearchPortal from "./components/sidebar/ResearchPortal";
import MarketMovers from "./components/Header/MarketMovers"; // Import the new component
import MyAnalysis from "./components/sidebar/MyAnalysis"; // Import the new component
import MarketCalendar from "./components/sidebar/MarketCalendar";

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
        <Route
          path="/my-analysis"
          element={
            <DashboardLayout user={user}>
              <MyAnalysis />
            </DashboardLayout>
          }
        />
        <Route
          path="/market-calendar"
          element={
            <DashboardLayout user={user}>
              <MarketCalendar />
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
