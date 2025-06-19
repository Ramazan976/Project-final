import React from "react";
import { useNavigate } from "react-router-dom";

function Navbar() {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("isAuthenticated");
        navigate("/login"); 
    };

    return (
        
        <nav className="p-4 bg-blue-600 text-white">
            <button onClick={handleLogout} className="ml-4 bg-red-500 px-4 py-2 rounded">
                Çıxış
            </button>
            <Link to="/admin">Dashboard</Link>
            <Link to="/admin/productSearch">Məhsullar</Link>
            <Link to="/admin/add-product">Məhsul Əlavə Et</Link> {/* ✅ */}
        </nav>
    );
}

export default Navbar;
