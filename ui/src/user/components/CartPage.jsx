import { useEffect, useState } from "react";

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(storedCart);
  }, []);

  const addToCart = (product) => {
    const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
    const alreadyInCart = existingCart.find(item => item.id === product.id);

    if (!alreadyInCart) {
      const updatedCart = [...existingCart, product];
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      setCartItems(updatedCart);  // cartItems yeniləyirik

      // Yenidən totalProducts saxlayırıq
      const totalProducts = updatedCart.length;
      localStorage.setItem("totalProducts", totalProducts);

      alert("Məhsul səbətə əlavə olundu!");
    } else {
      alert("Bu məhsul artıq səbətdə var.");
    }
  };

  const totalPrice = cartItems.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">🛒 Səbət</h1>

      {cartItems.length === 0 ? (
        <p className="text-gray-500">Səbət boşdur.</p>
      ) : (
        <div className="space-y-4">
          {cartItems.map((item, index) => (
            <div key={index} className="flex justify-between items-center border-b pb-2">
              <img src={item.image} />
              <span className="font-medium">{item.name}</span>
              <span className="text-gray-600">{item.price}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CartPage;
