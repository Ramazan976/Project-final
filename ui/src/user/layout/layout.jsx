import React from "react";
import Navbar from "../components/navbar";
import { Outlet } from "react-router-dom";
import Footer from "../components/footer";

function Layout() {
    return (
        <> 
        <Navbar/>
        <main className="pt-[70px]">
            <Outlet />
        </main>
        <Footer/>
        </>
    );
};

export default Layout;