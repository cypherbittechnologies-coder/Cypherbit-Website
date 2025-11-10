import React from 'react';

/**
 * Icon component wrapper
 * Can be used for SVG icons or image icons
 */
const Icon = ({ 
  src, 
  alt = '', 
  className = '', 
  width = 24, 
  height = 24,
  ...props 
}) => {
  if (!src) return null;
  
  // If it's an SVG path or component, render as SVG
  if (typeof src === 'string' && src.includes('<svg')) {
    return (
      <div 
        className={className}
        dangerouslySetInnerHTML={{ __html: src }}
        {...props}
      />
    );
  }
  
  // Otherwise render as image
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      width={width}
      height={height}
      {...props}
    />
  );
};

export default Icon;

