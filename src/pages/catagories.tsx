import React, { useState } from "react";
import { ProductCard } from "@/components/ProductCard";
import { ShoppingCart } from "@/components/ShoppingCart";
import watchImg from "@/assets/watch.jpg";
import walletImg from "@/assets/wallet.jpg";
import sneakersImg from "@/assets/sneakers.jpg";

// Sample Product Data
const sampleProducts = [
  {
    id: "1",
    name: "Classic Leather Wallet",
    price: 899,
    originalPrice: 1299,
    image: walletImg,
    category: "Wallets",
    brand: "Fossil",
    gender: "Men",
    delivery: "2-3days",
    age: "Adult",
    size: "M",
    rating: 4.3,
    reviews: 85,
    isNew: true,
    isSale: true,
  },
  {
    id: "2",
    name: "Running Shoes Pro",
    price: 2199,
    originalPrice: 2999,
    image: sneakersImg,
    category: "Shoes",
    brand: "Nike",
    gender: "Unisex",
    delivery: "1day",
    age: "Adult",
    size: "L",
    rating: 4.6,
    reviews: 210,
    isNew: false,
    isSale: true,
  },
  {
    id: "3",
    name: "Smart Watch X2",
    price: 4499,
    image: watchImg,
    category: "Watches",
    brand: "Fossil",
    gender: "Men",
    delivery: "week",
    age: "Teen",
    size: "M",
    rating: 4.8,
    reviews: 430,
    isNew: true,
    isSale: false,
  },
];

const Categories = () => {
  const [wishlist, setWishlist] = useState<string[]>([]);
  const [filters, setFilters] = useState({
    gender: "",
    brand: "",
    price: "",
    age: "",
    delivery: "",
  });

  const [cartItems, setCartItems] = useState<any[]>([]);

  // Cart logic
  const handleAddToCart = (product: any) => {
    setCartItems((prev) => {
      const exists = prev.find((item) => item.id === product.id);
      if (exists) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const handleUpdateQuantity = (id: string, quantity: number) => {
    setCartItems((prev) =>
      quantity <= 0
        ? prev.filter((item) => item.id !== id)
        : prev.map((item) =>
            item.id === id ? { ...item, quantity } : item
          )
    );
  };

  const handleRemoveItem = (id: string) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const handleToggleWishlist = (productId: string) => {
    setWishlist((prev) =>
      prev.includes(productId)
        ? prev.filter((id) => id !== productId)
        : [...prev, productId]
    );
  };

  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  const filteredProducts = sampleProducts.filter((p) => {
    return (
      (filters.gender === "" || p.gender === filters.gender) &&
      (filters.brand === "" || p.brand === filters.brand) &&
      (filters.age === "" || p.age === filters.age) &&
      (filters.delivery === "" || p.delivery === filters.delivery) &&
      (filters.price === "" ||
        (filters.price === "under1000" && p.price < 1000) ||
        (filters.price === "1000-3000" && p.price >= 1000 && p.price <= 3000) ||
        (filters.price === "above3000" && p.price > 3000))
    );
  });

  return (
    <div className="min-h-screen bg-white px-6 py-12 sm:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Top Row */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900">Accessories Catagories</h1>

          {/* Cart Button */}
          <ShoppingCart
            items={cartItems}
            onUpdateQuantity={handleUpdateQuantity}
            onRemoveItem={handleRemoveItem}
            onClearCart={handleClearCart}
          />
        </div>

        {/* Filters */}
<div className="mb-10 bg-gray-50 border border-gray-200 rounded-lg p-4 shadow-sm">
  <div className="flex items-center justify-between mb-4">
    <h2 className="text-lg font-semibold text-gray-800">Filters</h2>
    <button
      className="text-sm text-red-600 hover:underline"
      onClick={() =>
        setFilters({
          gender: "",
          brand: "",
          price: "",
          age: "",
          delivery: "",
        })
      }
    >
      Reset Filters
    </button>
  </div>

  <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 text-sm">
    {/* Gender */}
    <div>
      <label className="block font-medium text-gray-700 mb-1">Gender</label>
      <div className="flex flex-wrap gap-2">
        {["Men", "Women", "Unisex"].map((option) => (
          <button
            key={option}
            className={`px-3 py-1 rounded-full border ${
              filters.gender === option
                ? "bg-blue-500 text-white border-blue-500"
                : "bg-white text-gray-700 border-gray-300 hover:bg-blue-50"
            }`}
            onClick={() =>
              setFilters((prev) => ({
                ...prev,
                gender: prev.gender === option ? "" : option,
              }))
            }
          >
            {option}
          </button>
        ))}
      </div>
    </div>

    {/* Age */}
    <div>
      <label className="block font-medium text-gray-700 mb-1">Age</label>
      <div className="flex flex-wrap gap-2">
        {["Kids", "Teen", "Adult"].map((option) => (
          <button
            key={option}
            className={`px-3 py-1 rounded-full border ${
              filters.age === option
                ? "bg-green-500 text-white border-green-500"
                : "bg-white text-gray-700 border-gray-300 hover:bg-green-50"
            }`}
            onClick={() =>
              setFilters((prev) => ({
                ...prev,
                age: prev.age === option ? "" : option,
              }))
            }
          >
            {option}
          </button>
        ))}
      </div>
    </div>

    {/* Delivery */}
    <div>
      <label className="block font-medium text-gray-700 mb-1">Delivery</label>
      <select
        className="w-full border-gray-300 rounded px-2 py-1"
        value={filters.delivery}
        onChange={(e) =>
          setFilters((prev) => ({ ...prev, delivery: e.target.value }))
        }
      >
        <option value="">Select</option>
        <option value="1day">1 Day</option>
        <option value="2-3days">2–3 Days</option>
        <option value="week">Within a Week</option>
      </select>
    </div>

    {/* Brand */}
    <div>
      <label className="block font-medium text-gray-700 mb-1">Brand</label>
      <select
        className="w-full border-gray-300 rounded px-2 py-1"
        value={filters.brand}
        onChange={(e) =>
          setFilters((prev) => ({ ...prev, brand: e.target.value }))
        }
      >
        <option value="">Select</option>
        <option value="Nike">Nike</option>
        <option value="Puma">Puma</option>
        <option value="Fossil">Fossil</option>
        <option value="Woodland">Woodland</option>
      </select>
    </div>

    {/* Price */}
    <div>
      <label className="block font-medium text-gray-700 mb-1">Price</label>
      <select
        className="w-full border-gray-300 rounded px-2 py-1"
        value={filters.price}
        onChange={(e) =>
          setFilters((prev) => ({ ...prev, price: e.target.value }))
        }
      >
        <option value="">Select</option>
        <option value="under1000">Under ₹1000</option>
        <option value="1000-3000">₹1000 – ₹3000</option>
        <option value="above3000">Above ₹3000</option>
      </select>
    </div>
  </div>
</div>

        {/* Products */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={handleAddToCart}
              onToggleWishlist={handleToggleWishlist}
              isInWishlist={wishlist.includes(product.id)}
            />
          ))}
        </div>

        {/* No Products Found */}
        {filteredProducts.length === 0 && (
          <div className="text-center text-gray-500 mt-16">No products found.</div>
        )}
      </div>
    </div>
  );
};

export default Categories;
