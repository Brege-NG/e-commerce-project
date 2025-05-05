import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  type?: 'new' | 'sale' | 'featured';
  className?: string;
}

const Badge: React.FC<BadgeProps> = ({ children, type = 'new', className = '' }) => {
  let bgColor;
  
  switch(type) {
    case 'new':
      bgColor = 'bg-blue-500';
      break;
    case 'sale':
      bgColor = 'bg-red-500';
      break;
    case 'featured':
      bgColor = 'bg-purple-500';
      break;
    default:
      bgColor = 'bg-gray-500';
  }
  
  return (
    <span className={`${bgColor} text-white text-xs font-bold px-2 py-1 rounded-full ${className}`}>
      {children}
    </span>
  );
};

export default Badge;