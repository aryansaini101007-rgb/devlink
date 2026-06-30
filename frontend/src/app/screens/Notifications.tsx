import { Card } from '../components/common/Card';
import { Badge } from '../components/common/Badge';
import { FileText, MessageSquare, FolderKanban, Clock } from 'lucide-react';
import { notifications } from '../data/mockData';

const iconMap = {
  application: FileText,
  message: MessageSquare,
  project: FolderKanban
};

export default function Notifications() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-bold text-[#0F172A] mb-2">Notifications</h1>
        <p className="text-lg text-[#64748B]">Stay updated with your latest activities.</p>
      </div>

      {/* Notifications List */}
      <Card padding="none">
        <div className="divide-y divide-[#E5E7EB]">
          {notifications.map((notification) => {
            const Icon = iconMap[notification.type as keyof typeof iconMap];
            return (
              <div
                key={notification.id}
                className={`p-6 hover:bg-[#F8FAFC] transition-colors ${
                  !notification.read ? 'bg-[#12A8E8]/5' : ''
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-full ${
                    !notification.read ? 'bg-[#12A8E8]/10' : 'bg-[#F8FAFC]'
                  }`}>
                    <Icon className={`w-5 h-5 ${
                      !notification.read ? 'text-[#12A8E8]' : 'text-[#64748B]'
                    }`} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-semibold text-[#0F172A]">{notification.title}</h3>
                      {!notification.read && (
                        <Badge variant="primary">New</Badge>
                      )}
                    </div>
                    <p className="text-[#64748B] mb-2">{notification.message}</p>
                    <div className="flex items-center gap-1 text-xs text-[#64748B]">
                      <Clock className="w-3 h-3" />
                      <span>{notification.time}</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Card>
    </div>
  );
}
