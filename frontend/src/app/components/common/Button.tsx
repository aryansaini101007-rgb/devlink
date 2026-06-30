import { ButtonHTMLAttributes, forwardRef } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', className = '', children, ...props }, ref) => {
    const baseStyles = 'inline-flex items-center justify-center gap-2 rounded-[18px] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed';
    
    const variants = {
      primary: 'bg-[#12A8E8] text-white hover:bg-[#0E8FCA] shadow-sm',
      secondary: 'bg-[#0F172A] text-white hover:bg-[#1E293B] shadow-sm',
      outline: 'border-2 border-[#E5E7EB] text-[#0F172A] hover:border-[#12A8E8] hover:text-[#12A8E8] bg-white',
      ghost: 'text-[#64748B] hover:text-[#12A8E8] hover:bg-[#F8FAFC]',
      danger: 'bg-[#EF4444] text-white hover:bg-[#DC2626] shadow-sm'
    };
    
    const sizes = {
      sm: 'px-4 py-2 text-sm',
      md: 'px-6 py-3',
      lg: 'px-8 py-4 text-lg'
    };
    
    return (
      <button
        ref={ref}
        className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';
