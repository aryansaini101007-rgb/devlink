import { Card } from '../common/Card';
import { Avatar } from '../common/Avatar';
import { Badge } from '../common/Badge';
import { recentApplications } from '../../data/mockData';

const statusConfig = {
  under_review: { label: 'Under Review', variant: 'warning' as const },
  interview: { label: 'Interview', variant: 'primary' as const },
  accepted: { label: 'Accepted', variant: 'success' as const },
  rejected: { label: 'Rejected', variant: 'danger' as const }
};

export function RecentApplications() {
  return (
    <Card>
      <h3 className="text-xl font-semibold text-[#0F172A] mb-6">Recent Applications</h3>
      <div className="space-y-4">
        {recentApplications.map((application) => (
          <div key={application.id} className="flex items-center gap-4 p-4 rounded-[18px] hover:bg-[#F8FAFC] transition-colors">
            <Avatar src={application.founderAvatar} alt={application.founder} size="md" />
            <div className="flex-1 min-w-0">
              <p className="font-semibold text-[#0F172A] mb-1">{application.project}</p>
              <p className="text-sm text-[#64748B]">{application.role}</p>
            </div>
            <div className="text-right">
              <Badge variant={statusConfig[application.status].variant}>
                {statusConfig[application.status].label}
              </Badge>
              <p className="text-xs text-[#64748B] mt-2">{application.date}</p>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}
