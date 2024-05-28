import React from "react";

const Watchlist = () => {
  return (
    <div className="bg-white shadow p-4 rounded">
      <h2 className="font-bold mb-4">Watchlist</h2>
      <ul>
        <li className="flex justify-between mb-2">
          <span>Amazon.com, Inc.</span>
          <span>$102.24</span>
        </li>
        <li className="flex justify-between mb-2">
          <span>Coca-Cola Co</span>
          <span>$60.49</span>
        </li>
        <li className="flex justify-between mb-2">
          <span>Bayerische Motoren Werke AG</span>
          <span>$92.94</span>
        </li>
        <li className="flex justify-between mb-2">
          <span>Microsoft Corp</span>
          <span>$248.16</span>
        </li>
        <li className="flex justify-between mb-2">
          <span>United Parcel Service, Inc.</span>
          <span>$182.09</span>
        </li>
        <li className="flex justify-between mb-2">
          <span>Mastercard Inc</span>
          <span>$372.15</span>
        </li>
      </ul>
    </div>
  );
};

export default Watchlist;
