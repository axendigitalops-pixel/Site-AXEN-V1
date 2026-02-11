import React from 'react';
import { motion } from 'framer-motion';

interface CapsuleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost';
  size?: 'normal' | 'small';
  children: React.ReactNode;
  fullWidth?: boolean;
}

const CapsuleButton: React.FC<CapsuleButtonProps> = ({ 
  variant = 'primary', 
  size = 'normal',
  children, 
  className = '', 
  fullWidth = false,
  ...props 
}) => {
  const baseStyles = "relative inline-flex items-center justify-center rounded-full font-medium transition-all duration-300 overflow-hidden group";
  
  const sizeStyles = {
    normal: "px-8 py-3",
    small: "px-5 py-2 text-xs uppercase tracking-wider font-bold"
  };
  
  const variants = {
    // Changed primary to Ivory bg with Black text. Turquoise appears on hover shadow/border context if needed, 
    // but here we keep it monochrome for elegance, maybe a turquoise text on hover? 
    // Let's make it Ivory background, and on hover slightly brighter or a subtle turquoise tint.
    primary: "bg-axing-ivory text-axing-black hover:bg-white hover:shadow-[0_0_20px_rgba(62,230,219,0.3)]",
    
    // Outline is now White border by default, turns Turquoise on hover.
    outline: "border border-white/20 text-axing-ivory hover:border-axing-turquoise hover:text-axing-turquoise",
    
    ghost: "bg-axing-darkgray text-axing-ivory border border-axing-gray/30 hover:border-axing-turquoise hover:text-axing-turquoise"
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`${baseStyles} ${sizeStyles[size]} ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
      {...props}
    >
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </motion.button>
  );
};

export default CapsuleButton;