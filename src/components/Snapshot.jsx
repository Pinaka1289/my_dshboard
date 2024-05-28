import React from "react";

const Snapshot = () => {
  return (
    <div className="bg-white shadow p-4 rounded">
      <h2 className="font-bold mb-4">Snapshot</h2>
      <div className="flex flex-col md:flex-row justify-between">
        <div>
          <p>Prev Close: 12,051.48</p>
          <p>Open: 12,000.21</p>
        </div>
        <div>
          <p>Day Low: 11,999.87</p>
          <p>Day High: 12,248.15</p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between mt-4">
        <div>
          <p>52 Week Low: 10,440.64</p>
          <p>52 Week High: 15,285.42</p>
        </div>
        <div>
          <p>Trade Time: 05:16 PM</p>
          <p>Trade Date: 01/27/23</p>
        </div>
      </div>
    </div>
  );
};

export default Snapshot;
