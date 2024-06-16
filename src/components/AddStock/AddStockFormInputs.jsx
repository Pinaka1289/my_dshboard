import React from "react";

const AddStockFormInputs = ({ formData, onChange }) => {
  return (
    <>
      {Object.keys(formData).map((key) =>
        key !== "stock_ticker" ? (
          <div className="mb-4" key={key}>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              {key.replace(/_/g, " ").toUpperCase()}
            </label>
            <input
              type={key === "trade_entry_date" ? "date" : "text"}
              name={key}
              value={formData[key]}
              onChange={onChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              required
            />
          </div>
        ) : null
      )}
    </>
  );
};

export default AddStockFormInputs;
