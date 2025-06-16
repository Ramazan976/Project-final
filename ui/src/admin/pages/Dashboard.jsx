import { useEffect, useState } from "react";

const AdminDashboard = () => {
  const [totalProducts, setTotalProducts] = useState(0);

  useEffect(() => {
    const handleStorageChange = () => {
      const updatedCartItems = JSON.parse(localStorage.getItem("cart")) || [];
      setTotalProducts(updatedCartItems.length);
    };

    // İlk renderdə `localStorage`-dan oxuyuruq
    const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
    setTotalProducts(cartItems.length);

    // `storage` event listener əlavə edirik
    window.addEventListener("storage", handleStorageChange);

    // component unmount zamanı listener-u təmizləyirik
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Admin Dashboard</h1>
      <p className="mt-4">Bu admin panelinizin əsas səhifəsidir.</p>
      <div className="mt-6">
        <h2>Total Products in Cart: {totalProducts}</h2>
      </div>
    </div>
  );
};

export default AdminDashboard;
