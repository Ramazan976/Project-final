import React, { useState } from "react";

const AddProduct = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newProduct = { title, price, image };
    const products = JSON.parse(localStorage.getItem("products")) || [];

    products.push(newProduct);
    localStorage.setItem("products", JSON.stringify(products));

    setSuccess("✅ Məhsul uğurla əlavə edildi!");
    setTitle("");
    setPrice("");
    setImage("");
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Yeni Məhsul Əlavə Et</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Məhsul adı"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border p-2"
          required
        />
        <input
          type="text"
          placeholder="Qiymət ($)"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="border p-2"
          required
        />
        <input
          type="text"
          placeholder="Şəkil URL"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          className="border p-2"
          required
        />
        <button
          type="submit"
          className=" !bg-amber-500 text-white px-4 py-2 rounded"
        >
          Əlavə Et
        </button>
        {success && <p className="text-green-600">{success}</p>}
      </form>
    </div>
  );
};

export default AddProduct;
