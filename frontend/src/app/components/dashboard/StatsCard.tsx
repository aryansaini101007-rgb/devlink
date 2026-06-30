import { TrendingUp, TrendingDown } from 'lucide-react';
import { Card } from '../common/Card';

interface StatsCardProps {
  label: string;
  value: string;
  change: string;
  trend: 'up' | 'down';
}

export function StatsCard({ label, value, change, trend }: StatsCardProps) {
  return (
    <Card>
      <div className="flex items-start justify-between">
        <div>
          <p className="text-[#64748B] text-sm font-medium mb-2">{label}</p>
          <h3 className="text-4xl font-bold text-[#0F172A] mb-2">{value}</h3>
          <div className="flex items-center gap-1">
            {trend === 'up' ? (
              <TrendingUp className="w-4 h-4 text-[#22C55E]" />
            ) : (
              <TrendingDown className="w-4 h-4 text-[#EF4444]" />
            )}
            <span className={`text-sm font-medium ${trend === 'up' ? 'text-[#22C55E]' : 'text-[#EF4444]'}`}>
              {change}
            </span>
            <span className="text-sm text-[#64748B]">vs last month</span>
          </div>
        </div>
      </div>
    </Card>
  );
}
