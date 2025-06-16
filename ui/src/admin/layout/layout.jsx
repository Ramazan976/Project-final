import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../../user/components/navbar";
import Sidebar from "../components/Sidebar";

function AdminLayout() {
  return (
    <div className="flex flex-col h-screen">
      
      <div className="sticky top-0 z-50">
        <Navbar />
      </div>

      
      <div className="flex flex-1 jus">
        <Sidebar />

        <main className="flex-1 p-6 bg-gray-50 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default AdminLayout;
