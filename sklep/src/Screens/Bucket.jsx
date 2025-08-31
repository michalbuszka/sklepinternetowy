import React, { useEffect, useState } from "react";

export default function Bucket() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCart(savedCart);
  }, []);

  const removeFromCart = (index) => {
    const newCart = cart.filter((_, i) => i !== index);
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
  };

  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-2 text-gray-800">Twój koszyk</h2>
        <a
          href="/"
          className="inline-block text-green-600 font-semibold hover:underline"
        >
          ← Powrót do sklepu
        </a>
      </div>

      {cart.length === 0 ? (
        <p className="text-center text-gray-500 text-lg">Koszyk jest pusty</p>
      ) : (
        <div className="space-y-4 max-w-3xl mx-auto">
          {cart.map((item, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-xl shadow-md flex items-center justify-between gap-4"
            >
              <div className="flex flex-col">
                <span className="text-lg font-medium text-gray-800">
                  {item.title}
                </span>
                <span className="text-gray-500">${item.price.toFixed(2)}</span>
              </div>

              <button
                onClick={() => removeFromCart(index)}
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg font-semibold transition"
              >
                Usuń
              </button>
            </div>
          ))}
          <div className="flex justify-between items-center mt-6 p-4 bg-white rounded-xl shadow-md">
            <span className="text-xl font-bold text-gray-800">Razem:</span>
            <span className="text-xl font-bold text-green-600">
              ${totalPrice.toFixed(2)}
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
