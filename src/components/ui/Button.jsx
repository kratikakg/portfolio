import React from 'react';

export const Button = ({ children, className = '', ...props }) => {
  return (
    <button
      className={`px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded text-white ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};