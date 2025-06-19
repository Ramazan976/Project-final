import { useEffect, useState } from "react";

const AdminDashboard = () => {
  const [totalProducts, setTotalProducts] = useState(0);
  const [newProductName, setNewProductName] = useState("");
  const [newProductPrice, setNewProductPrice] = useState("");
  const [newProductDescription, setNewProductDescription] = useState("");
  const [newProductImage, setNewProductImage] = useState("");

  // Məhsul əlavə etmək
  const handleAddProduct = (e) => {
    e.preventDefault();

    if (!newProductName || !newProductPrice || !newProductDescription || !newProductImage) {
      alert("Bütün sahələri doldurun!");
      return;
    }

    const newProduct = {
      name: newProductName,
      price: newProductPrice,
      description: newProductDescription,
      image: newProductImage,
    };

    const existingProducts = JSON.parse(localStorage.getItem("products")) || [];
    existingProducts.push(newProduct);
    localStorage.setItem("products", JSON.stringify(existingProducts));

    // Formu sıfırlamaq
    setNewProductName("");
    setNewProductPrice("");
    setNewProductDescription("");
    setNewProductImage("");

    // Məhsulların sayını yeniləmək
    setTotalProducts(existingProducts.length + 1);
  };

  useEffect(() => {
    const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
    setTotalProducts(cartItems.length);

    // `storage` event listener əlavə edirik
    const handleStorageChange = () => {
      const updatedCartItems = JSON.parse(localStorage.getItem("cart")) || [];
      setTotalProducts(updatedCartItems.length);
    };

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

      <div className="mt-8">
        <h3 className="font-bold text-xl">Yeni Məhsul Əlavə Et</h3>
        <form onSubmit={handleAddProduct} className="space-y-4">
          <input
            type="text"
            placeholder="Məhsul Adı"
            className="border p-2 w-full"
            value={newProductName}
            onChange={(e) => setNewProductName(e.target.value)}
          />
          <input
            type="number"
            placeholder="Qiymət"
            className="border p-2 w-full"
            value={newProductPrice}
            onChange={(e) => setNewProductPrice(e.target.value)}
          />
          <textarea
            placeholder="Təsvir"
            className="border p-2 w-full"
            value={newProductDescription}
            onChange={(e) => setNewProductDescription(e.target.value)}
          />
          <input
            type="text"
            placeholder="Şəkil URL"
            className="border p-2 w-full"
            value={newProductImage}
            onChange={(e) => setNewProductImage(e.target.value)}
          />

          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded"
          >
            Məhsulu Əlavə Et
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminDashboard;
