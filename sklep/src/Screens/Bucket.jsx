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
    <div className="p-6 text-gray-900 bg-gray-100 min-h-screen">
      {/* Nagłówek koszyka */}
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold mb-2">Twój koszyk</h2>
        <a
          href="/"
          className="inline-block text-green-600 font-semibold hover:underline"
        >
          ← Powrót do sklepu
        </a>
      </div>

      {cart.length === 0 ? (
        <p className="text-center">Koszyk jest pusty</p>
      ) : (
        <>
          <ul className="space-y-2">
            {cart.map((item, index) => (
              <li
                key={index}
                className="bg-white p-3 rounded shadow flex justify-between"
              >
                <span>{item.title}</span>
                <div className="flex gap-3 items-center">
                  <span className="font-bold">${item.price}</span>
                  <button
                    onClick={() => removeFromCart(index)}
                    className="bg-red-500 text-white px-2 py-1 rounded"
                  >
                    Usuń
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-4 text-right font-bold">
            Razem: ${totalPrice.toFixed(2)}
          </div>
        </>
      )}
    </div>
  );
}
