interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'primary' | 'success' | 'warning' | 'danger';
  className?: string;
}

export function Badge({ children, variant = 'default', className = '' }: BadgeProps) {
  const variants = {
    default: 'bg-[#F1F5F9] text-[#64748B]',
    primary: 'bg-[#12A8E8]/10 text-[#12A8E8]',
    success: 'bg-[#22C55E]/10 text-[#22C55E]',
    warning: 'bg-[#F59E0B]/10 text-[#F59E0B]',
    danger: 'bg-[#EF4444]/10 text-[#EF4444]'
  };

  return (
    <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${variants[variant]} ${className}`}>
      {children}
    </span>
  );
}
