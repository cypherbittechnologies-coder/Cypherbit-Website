import React from 'react';

/**
 * Button component based on Figma design
 * Supports various variants and sizes
 */
const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  icon,
  iconPosition = 'right',
  className = '',
  onClick,
  type = 'button',
  ...props
}) => {
  const baseStyles = 'font-montserrat font-medium rounded-full flex items-center justify-center gap-[10px] transition-colors';
  
  const variants = {
    primary: 'bg-[#27438E] text-white hover:bg-[#1e3570]',
    secondary: 'bg-white text-[#27438E] hover:bg-gray-100 border-0',
    outline: 'border-2 border-[#27438E] text-[#27438E] hover:bg-[#27438E] hover:text-white bg-transparent',
  };
  
  const sizes = {
    sm: 'h-[36px] px-[18px] text-[12px]',
    md: 'h-[42px] px-[18px] text-[14px]',
    lg: 'h-[48px] px-[24px] text-[16px]',
    icon: 'w-[43px] h-[43px] p-0',
  };
  
  const buttonClasses = `
    ${baseStyles}
    ${variants[variant]}
    ${sizes[size]}
    ${className}
  `.trim().replace(/\s+/g, ' ');
  
  return (
    <button
      type={type}
      className={buttonClasses}
      onClick={onClick}
      {...props}
    >
      {icon && iconPosition === 'left' && (
        <span className="flex items-center">{icon}</span>
      )}
      {children && <span>{children}</span>}
      {icon && iconPosition === 'right' && (
        <span className="flex items-center">{icon}</span>
      )}
    </button>
  );
};

export default Button;

