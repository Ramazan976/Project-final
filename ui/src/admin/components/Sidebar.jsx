import { Link } from "react-router-dom";

 function Sidebar() {
  return (
    <aside className="w-64 bg-white p-6 shadow-md flex flex-col mt-3">
      <h2 className="text-xl font-bold mb-6">Admin Panel</h2>
      <nav className="flex flex-col space-y-4">
        <Link to="/admin" className="hover:text-blue-500">Dashboard</Link>
        <Link to="/admin/productSearch" className="hover:text-blue-500">Products</Link>
        <Link to="/admin/orders" className="hover:text-blue-500">Orders</Link>
      </nav>
    </aside>
  );
}

export default Sidebar;