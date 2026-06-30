import { Card } from '../components/common/Card';
import { Avatar } from '../components/common/Avatar';
import { Badge } from '../components/common/Badge';
import { Button } from '../components/common/Button';
import { Check, X, MessageSquare, Eye } from 'lucide-react';
import { applications } from '../data/mockData';

const statusConfig = {
  pending: { label: 'Pending', variant: 'warning' as const },
  interview: { label: 'Interview', variant: 'primary' as const },
  accepted: { label: 'Accepted', variant: 'success' as const },
  rejected: { label: 'Rejected', variant: 'danger' as const }
};

export default function Applications() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-bold text-[#0F172A] mb-2">Applications</h1>
        <p className="text-lg text-[#64748B]">Manage applications for your projects.</p>
      </div>

      {/* Applications Table */}
      <Card padding="none">
        <div className="overflow-hidden">
          <table className="w-full">
            <thead className="bg-[#F8FAFC] border-b border-[#E5E7EB]">
              <tr>
                <th className="px-8 py-4 text-left text-sm font-semibold text-[#0F172A]">Applicant</th>
                <th className="px-8 py-4 text-left text-sm font-semibold text-[#0F172A]">Role</th>
                <th className="px-8 py-4 text-left text-sm font-semibold text-[#0F172A]">Project</th>
                <th className="px-8 py-4 text-left text-sm font-semibold text-[#0F172A]">Experience</th>
                <th className="px-8 py-4 text-left text-sm font-semibold text-[#0F172A]">Applied</th>
                <th className="px-8 py-4 text-left text-sm font-semibold text-[#0F172A]">Status</th>
                <th className="px-8 py-4 text-left text-sm font-semibold text-[#0F172A]">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#E5E7EB]">
              {applications.map((application) => (
                <tr key={application.id} className="hover:bg-[#F8FAFC] transition-colors">
                  <td className="px-8 py-6">
                    <div className="flex items-center gap-3">
                      <Avatar src={application.applicantAvatar} alt={application.applicantName} size="md" />
                      <div>
                        <p className="font-semibold text-[#0F172A]">{application.applicantName}</p>
                        <div className="flex flex-wrap gap-1 mt-1">
                          {application.skills.slice(0, 2).map((skill) => (
                            <Badge key={skill} variant="default">{skill}</Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-8 py-6">
                    <p className="text-[#0F172A]">{application.role}</p>
                  </td>
                  <td className="px-8 py-6">
                    <p className="text-[#0F172A]">{application.project}</p>
                  </td>
                  <td className="px-8 py-6">
                    <p className="text-[#64748B]">{application.experience}</p>
                  </td>
                  <td className="px-8 py-6">
                    <p className="text-[#64748B]">{application.appliedDate}</p>
                  </td>
                  <td className="px-8 py-6">
                    <Badge variant={statusConfig[application.status].variant}>
                      {statusConfig[application.status].label}
                    </Badge>
                  </td>
                  <td className="px-8 py-6">
                    <div className="flex items-center gap-2">
                      {application.status === 'pending' && (
                        <>
                          <Button variant="ghost" size="sm" className="p-2">
                            <Check className="w-4 h-4 text-[#22C55E]" />
                          </Button>
                          <Button variant="ghost" size="sm" className="p-2">
                            <X className="w-4 h-4 text-[#EF4444]" />
                          </Button>
                        </>
                      )}
                      <Button variant="ghost" size="sm" className="p-2">
                        <MessageSquare className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="sm" className="p-2">
                        <Eye className="w-4 h-4" />
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}
