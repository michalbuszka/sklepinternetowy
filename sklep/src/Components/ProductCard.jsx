import { useEffect, useState } from "react";

export default function ProductCard({ product, addToCart }) {
  return (
    <div className="bg-white rounded-lg shadow p-4 flex flex-col">
      <h3 className="font-bold text-lg mb-2 text-black">{product.title}</h3>
      
      <img
        src={product.thumbnail}
        alt={product.title}
        className="h-40 object-cover rounded mb-4"
      />
      
      <p className="text-gray-600 flex-grow">{product.description}</p>
      
      <div className="mt-4 flex justify-between items-center">
        <span className="text-green-600 font-bold">${product.price}</span>
        <button
          onClick={() => addToCart(product)}
          className="bg-green-600 text-white px-3 py-1 rounded shadow"
        >
          Dodaj
        </button>
      </div>
    </div>
  );
}