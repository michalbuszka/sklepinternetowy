import React, { useEffect, useState } from "react";
import ProductCard from "../Components/ProductCard";

export default function Dashboard() {
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("user");
    return savedUser ? JSON.parse(savedUser) : null;
  });
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    if (user) return; 
    const token = localStorage.getItem("authToken");
    if (!token) return;

    fetch("https://dummyjson.com/auth/users/me", {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => {
        if (!res.ok) throw new Error("Unauthorized");
        return res.json();
      })
      .then((data) => {
        setUser(data);
        localStorage.setItem("user", JSON.stringify(data));
      })
      .catch(console.error);
  }, [user]);
  useEffect(() => {
    fetch("https://dummyjson.com/products?limit=20")
      .then((res) => res.json())
      .then((data) => setProducts(data.products))
      .catch(console.error);
  }, []);

  const addToCart = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
  };

  const filteredProducts = products.filter((p) =>
    p.title.toLowerCase().includes(search.toLowerCase())
  );

  if (!user) return <p className="p-6">Ładowanie danych...</p>;

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-green-600 p-4 text-white flex justify-between items-center">
        <h1 className="text-xl font-bold">Witaj {user.firstName}!</h1>
        <a
          href="/bucket"
          className="bg-white text-green-600 px-4 py-2 rounded-lg shadow"
        >
          Koszyk ({cart.length})
        </a>
      </nav>
      <div className="p-6">
        <input
          type="text"
          placeholder="Szukaj produktów..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full p-2 border rounded mb-6"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              addToCart={addToCart}
            />
          ))}
        </div>
      </div>
    </div>
  );
}