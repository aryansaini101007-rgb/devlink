import { StatsCard } from '../components/dashboard/StatsCard';
import { RecentActivity } from '../components/dashboard/RecentActivity';
import { RecentApplications } from '../components/dashboard/RecentApplications';
import { SuggestedBuilders } from '../components/dashboard/SuggestedBuilders';
import { stats } from '../data/mockData';

export default function Dashboard() {
  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <div>
        <h1 className="text-5xl font-bold text-[#0F172A] mb-2">Welcome back, Nancy</h1>
        <p className="text-lg text-[#64748B]">Here's what's happening with your projects today.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-4 gap-6">
        {stats.map((stat) => (
          <StatsCard
            key={stat.label}
            label={stat.label}
            value={stat.value}
            change={stat.change}
            trend={stat.trend as 'up' | 'down'}
          />
        ))}
      </div>

      {/* Two Column Layout */}
      <div className="grid grid-cols-2 gap-6">
        <RecentActivity />
        <RecentApplications />
      </div>

      {/* Suggested Builders */}
      <SuggestedBuilders />
    </div>
  );
}
