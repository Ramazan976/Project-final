import React from "react";
import Navbar from "../../user/components/navbar";
import { Outlet } from "react-router-dom";
import PrivateRoot from "../../provider/privateRoot";


function AdminLayout() {
    return (
            <PrivateRoot>
                <Navbar />
                <Outlet />
            </PrivateRoot>
    )
}
export default AdminLayout;

