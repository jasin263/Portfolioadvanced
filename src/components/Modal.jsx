import React from 'react';

export default function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
      <div className="bg-gray-900 rounded-lg shadow-lg max-w-4xl w-full max-h-[90vh] overflow-auto p-4 relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-white text-2xl font-bold hover:text-red-500"
          aria-label="Close modal"
        >
          &times;
        </button>
        {children}
      </div>
    </div>
  );
}
