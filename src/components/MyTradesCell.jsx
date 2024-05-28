import React from "react";

const MyTradesCell = ({ value, className = "", children }) => {
  return (
    <td
      className={`px-6 py-4 whitespace-nowrap text-sm text-gray-700 ${className}`}
    >
      {value || children}
    </td>
  );
};

export default MyTradesCell;
