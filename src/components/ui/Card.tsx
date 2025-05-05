import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  hoverable?: boolean;
}

const Card: React.FC<CardProps> = ({
  children,
  className = '',
  onClick,
  hoverable = false
}) => {
  const hoverStyles = hoverable 
    ? 'transition-transform duration-300 hover:-translate-y-2 cursor-pointer' 
    : '';
  
  return (
    <div 
      className={`bg-white rounded-xl shadow-md overflow-hidden ${hoverStyles} ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default Card;