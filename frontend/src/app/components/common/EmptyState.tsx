import { LucideIcon } from 'lucide-react';
import { Button } from './Button';

interface EmptyStateProps {
  icon: LucideIcon;
  title: string;
  description: string;
  action?: {
    label: string;
    onClick: () => void;
  };
}

export function EmptyState({ icon: Icon, title, description, action }: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-4 text-center">
      <div className="p-4 rounded-full bg-[#F8FAFC] mb-4">
        <Icon className="w-12 h-12 text-[#64748B]" />
      </div>
      <h3 className="text-xl font-semibold text-[#0F172A] mb-2">{title}</h3>
      <p className="text-[#64748B] mb-6 max-w-md">{description}</p>
      {action && (
        <Button variant="primary" onClick={action.onClick}>
          {action.label}
        </Button>
      )}
    </div>
  );
}
