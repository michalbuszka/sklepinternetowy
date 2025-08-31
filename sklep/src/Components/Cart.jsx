import React from "react";

export default function Cart({ cart, onRemoveFromCart, totalPrice }) {
    return (
        <div className="p-6 text-black">
        <h2 className="text-xl font-bold mb-4">Twój koszyk</h2>
        {cart.length === 0 ? (
        <p>Koszyk jest pusty</p>
        ) : (
        <>
        <ul className="space-y-2">
        {cart.map((item, index) => (
        <li
        key={`${item.id}-${index}`}
        className="bg-white p-3 rounded shadow flex justify-between items-center"
        >
        <span className="mr-4">{item.title}</span>
        <div className="flex items-center gap-3">
        <span className="font-bold">${item.price}</span>
        <button
        onClick={() => onRemoveFromCart(index)}
        className="bg-red-500 text-white px-2 py-1 rounded"
        >
        Usuń
        </button>
        </div>
        </li>
        ))}
        </ul>
        <div className="mt-4 text-right font-bold">Razem: ${totalPrice}</div>
        </>
        )}
        </div>
    );
}
