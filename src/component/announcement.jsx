import React, { useState } from "react";

export default function Announcement() {
  const [show, setShow] = useState(true);

  if (!show) return null;

  return (
    <div className="bg-pink-600 text-white py-2 overflow-hidden relative flex items-center">
      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(100%); }
            100% { transform: translateX(-100%); }
          }
        `}
      </style>

      <p
        className="whitespace-nowrap"
        style={{
          animation: "marquee 10s linear infinite",
        }}
      >
        🎉 Big Sale on Sarees & Salwar Kameez — Free Shipping for Orders Above ₹3999! 🎉
      </p>

      <button
        onClick={() => setShow(false)}
        className="absolute right-3 text-red-800 text-lg cursor-pointer"
      >
        ✖
      </button>
    </div>
  );
}
