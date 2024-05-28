import React from "react";

const AddStockFormButtons = ({ onClose }) => {
  return (
    <div className="flex justify-end">
      <button
        type="button"
        onClick={onClose}
        className="mr-4 px-4 py-2 bg-gray-300 text-black rounded"
      >
        Cancel
      </button>
      <button
        type="submit"
        className="px-4 py-2 bg-blue-600 text-white rounded"
      >
        Add Stock
      </button>
    </div>
  );
};

export default AddStockFormButtons;
