import React from "react";
import Navbar from "../components/navbar";
import { Outlet } from "react-router-dom";

function Layout() {
    return (
        <> 
        <Navbar/>
        <main className="pt-[70px]">
            <Outlet />
        </main>
        </>
    );
};

export default Layout;