import { useEffect, useState } from "react";

const AdminHome = () => {
  const [totalOrders, setTotalOrders] = useState(0);
  const [totalProducts, setTotalProducts] = useState(0);
  const [totalUsers, setTotalUsers] = useState(0);

  useEffect(() => {
    const handleStorageChange = () => {
      const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
      setTotalProducts(cartItems.length); 

      const orders = JSON.parse(localStorage.getItem("orders")) || [];
      const users = JSON.parse(localStorage.getItem("users")) || [];

      setTotalOrders(orders.length);
      setTotalUsers(users.length);
    };

    
    const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
    setTotalProducts(cartItems.length); 

    const orders = JSON.parse(localStorage.getItem("orders")) || [];
    const users = JSON.parse(localStorage.getItem("users")) || [];

    setTotalOrders(orders.length);
    setTotalUsers(users.length);

    
    window.addEventListener("storage", handleStorageChange);

    
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">📊 Admin Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white shadow p-4 rounded">
          <h2 className="text-lg font-semibold">Total Orders</h2>
          <p className="text-2xl text-blue-500">{totalOrders}</p>
        </div>
        <div className="bg-white shadow p-4 rounded">
          <h2 className="text-lg font-semibold">Total Products in Cart</h2>
          <p className="text-2xl text-green-500">{totalProducts}</p>
        </div>
        <div className="bg-white shadow p-4 rounded">
          <h2 className="text-lg font-semibold">Total Users</h2>
          <p className="text-2xl text-purple-500">{totalUsers}</p>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
