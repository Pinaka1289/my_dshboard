import React from "react";
import Header from "../Header/Header";
import Sidebar from "./Sidebar";
import Footer from "../Footer/Footer";

function DashboardLayout({ user, children }) {
  const username = localStorage.getItem("username");
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col md:flex-row">
      <Sidebar user={{ name: username }} />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="p-6 flex-1">{children}</main>
        <Footer />
      </div>
    </div>
  );
}

export default DashboardLayout;
