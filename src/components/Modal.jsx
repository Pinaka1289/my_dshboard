import React from "react";

const Modal = ({ isOpen, onClose, contentUrl }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
      <div className="relative w-full h-full bg-white overflow-hidden">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white bg-red-600 rounded-full p-2"
        >
          Close
        </button>
        <iframe
          src={contentUrl}
          className="w-full h-full border-none"
          title="Embedded Content"
        />
      </div>
    </div>
  );
};

export default Modal;
