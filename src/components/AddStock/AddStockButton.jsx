import React, { useState } from "react";
import AddStockForm from "./AddStockForm";

const AddStockButton = ({ onStockAdded }) => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleOpenForm = () => {
    setIsFormOpen(true);
  };

  const handleCloseForm = () => {
    setIsFormOpen(false);
  };

  return (
    <div>
      <button
        onClick={handleOpenForm}
        className="px-4 py-2 bg-blue-600 text-white rounded mb-4"
      >
        Add New Stock
      </button>
      {isFormOpen && (
        <AddStockForm onClose={handleCloseForm} onStockAdded={onStockAdded} />
      )}
    </div>
  );
};

export default AddStockButton;
