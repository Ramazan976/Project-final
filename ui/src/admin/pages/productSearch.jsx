import React, { useState } from "react";

// Məhsul verilənlər bazası
const latestProducts = [
  { image: "https://preview.colorlib.com/theme/karma/img/product/p1.jpg", name: "ADDIDAS NEW HAMMER SOLE FOR SPORTS PERSON", price: "$150.00", oldPrice: "$210.00" },
  { image: "https://preview.colorlib.com/theme/karma/img/product/p2.jpg", name: "ADIDAS HAMMER GRIP – ULTIMATE PERFORMANCE FOOTWEAR", price: "$150.00", oldPrice: "$210.00" },
  { image: "https://preview.colorlib.com/theme/karma/img/product/p3.jpg", name: "ADIDAS PRO ATHLETE EDITION WITH HAMMER SOLE", price: "$150.00", oldPrice: "$210.00" },
  { image: "https://preview.colorlib.com/theme/karma/img/product/p4.jpg", name: "ADIDAS PERFORMANCE BOOST WITH ALL-NEW HAMMER SOLE", price: "$150.00", oldPrice: "$210.00" },
  { image: "https://preview.colorlib.com/theme/karma/img/product/p5.jpg", name: "ADIDAS POWERSTEP – HAMMER SOLE FOR ACTIVE LIFESTYLES", price: "$150.00", oldPrice: "$210.00" },
  { image: "https://preview.colorlib.com/theme/karma/img/product/p6.jpg", name: "ADIDAS SPORTS PRO WITH NEW HAMMER SOLE TECHNOLOGY", price: "$150.00", oldPrice: "$210.00" },
  { image: "https://preview.colorlib.com/theme/karma/img/product/p7.jpg", name: "ADIDAS HAMMER SOLE – BUILT FOR ATHLETES", price: "$150.00", oldPrice: "$210.00" },
  { image: "https://preview.colorlib.com/theme/karma/img/product/p8.jpg", name: "ADIDAS HAMMER SOLE SNEAKERS – ENGINEERED FOR SPEED AND SUPPORT", price: "$150.00", oldPrice: "$210.00" }
];

const ProductSearch = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState(""); // Axtarış mətni
  const [results, setResults] = useState([]);

  // Axtarış mətnini dəyişdirəndə
  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchQuery(value);

    // Axtarışa uyğun məhsulları tapmaq
    const filteredProducts = latestProducts.filter((product) =>
      product.name.toLowerCase().includes(value.toLowerCase()) // Adın kiçik hərflərlə uyğunlaşması
    );
    
    
    onSearch(filteredProducts);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="mb-6">
      <input
        type="text"
        value={searchQuery}
         onChange={(e) => setSearchQuery(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Search Products..."
        className="p-2 w-full bg-gray-700 text-white rounded"
      />

      {/* Məhsulun adı və şəkli axtarışa uyğun gələn zaman göstərilsin */}
      {searchQuery && (
        <div className="product-search-results mt-10">
          {latestProducts
            .filter((product) => product.name.toLowerCase().includes(searchQuery.toLowerCase()))
            .map((product, index) => (
              <div key={index} className="product-card flex flex-col gap-2">
                <img src={product.image} alt={product.name} className="w-60 h-40 object-cover" />
                <h3>{product.name}</h3>
                <p>{product.price}</p>
                <p><strike>{product.oldPrice}</strike></p>
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default ProductSearch;
