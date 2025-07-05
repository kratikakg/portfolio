import React from 'react';

export const Card = ({ children, className = '' }) => {
  return (
    <div className={`p-4 rounded-lg bg-gray-900 shadow-lg ${className}`}>
      {children}
    </div>
  );
};

export const CardContent = ({ children, className = '' }) => {
  return (
    <div className={`space-y-2 ${className}`}>
      {children}
    </div>
  );
};