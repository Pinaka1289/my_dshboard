import React, { useState, useEffect } from "react";
import axios from "axios";

const DataList = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const token = localStorage.getItem("token"); // Replace 'token' with the key you used to store the token

    const myHeaders = {
      Authorization: `Bearer ${token}`,
    };

    try {
      const response = await axios.get("http://localhost:8000/stocks/all", {
        headers: myHeaders,
      });
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <div className="flex justify-between w-full px-4 mb-4">
        <h2 className="mb-6 text-2xl font-semibold text-gray-700 dark:text-gray-200">
          Data List
        </h2>
        <button
          onClick={() => console.log("Add new stock")}
          className="px-2 py-1 font-semibold text-white bg-blue-500 rounded hover:bg-blue-700"
        >
          Add New Stock
        </button>
      </div>
      <div className="w-full overflow-hidden rounded-lg shadow-xs">
        <div className="w-full overflow-x-auto">
          <table className="w-full whitespace-no-wrap">
            <thead>
              <tr className="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800">
                <th className="px-4 py-3">Stock Ticker</th>
                <th className="px-4 py-3">Latest Price</th>
                <th className="px-4 py-3">Price per Stock</th>
                <th className="px-4 py-3">Quantity</th>
                <th className="px-4 py-3">Target Price</th>
                <th className="px-4 py-3">Trade Entry Date</th>
                <th className="px-4 py-3">Trade Exchange</th>
                {/* <th className="px-4 py-3">Trade ID</th> */}
                <th className="px-4 py-3">Trade Strategy</th>
                <th className="px-4 py-3">Trade Total Price</th>
                {/* <th className="px-4 py-3">User ID</th> */}
              </tr>
            </thead>
            <tbody className="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800">
              {data.map((item) => (
                <tr
                  key={item.trade_id}
                  className="text-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer"
                  onClick={() =>
                    console.log(`Clicked row with trade ID: ${item.trade_id}`)
                  }
                >
                  <td className="px-4 py-3">{item.stock_ticker}</td>
                  <td className="px-4 py-3">{item.latest_price}</td>
                  <td className="px-4 py-3">{item.price_per_stock}</td>
                  <td className="px-4 py-3">{item.quantity}</td>
                  <td className="px-4 py-3">{item.target_price}</td>
                  <td className="px-4 py-3">{item.trade_entry_date}</td>
                  <td className="px-4 py-3">{item.trade_exchange}</td>
                  {/* <td className="px-4 py-3">{item.trade_id}</td> */}
                  <td className="px-4 py-3">{item.trade_strategy}</td>
                  <td className="px-4 py-3">{item.trade_total_price}</td>
                  {/* <td className="px-4 py-3">{item.user_id}</td> */}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DataList;
