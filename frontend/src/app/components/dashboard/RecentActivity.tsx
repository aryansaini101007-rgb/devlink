import { Clock } from 'lucide-react';
import { Card } from '../common/Card';
import { Avatar } from '../common/Avatar';
import { recentActivity } from '../../data/mockData';

export function RecentActivity() {
  return (
    <Card>
      <h3 className="text-xl font-semibold text-[#0F172A] mb-6">Recent Activity</h3>
      <div className="space-y-4">
        {recentActivity.map((activity) => (
          <div key={activity.id} className="flex items-start gap-4 p-4 rounded-[18px] hover:bg-[#F8FAFC] transition-colors">
            <Avatar src={activity.avatar} alt={activity.title} size="md" />
            <div className="flex-1 min-w-0">
              <p className="font-medium text-[#0F172A] mb-1">{activity.title}</p>
              <p className="text-sm text-[#64748B] mb-2">{activity.project}</p>
              <div className="flex items-center gap-1 text-xs text-[#64748B]">
                <Clock className="w-3 h-3" />
                <span>{activity.time}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}
