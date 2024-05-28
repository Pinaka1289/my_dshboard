import React from "react";
import Header from "./Header";
import Sidebar from ".//Sidebar";
import Dashboard from "./Dashboard";
import Footer from "./Footer";

function DashboardLayout() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col md:flex-row">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="p-6 flex-1">
          <Dashboard />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default DashboardLayout;
