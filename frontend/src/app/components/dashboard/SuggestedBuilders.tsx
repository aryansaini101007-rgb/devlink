import { Card } from '../common/Card';
import { Avatar } from '../common/Avatar';
import { Badge } from '../common/Badge';
import { Button } from '../common/Button';
import { MapPin, UserPlus } from 'lucide-react';
import { suggestedBuilders } from '../../data/mockData';

export function SuggestedBuilders() {
  return (
    <Card>
      <h3 className="text-xl font-semibold text-[#0F172A] mb-6">Suggested Builders</h3>
      <div className="grid grid-cols-3 gap-6">
        {suggestedBuilders.map((builder) => (
          <div key={builder.id} className="p-6 rounded-[18px] border border-[#E5E7EB] hover:shadow-md transition-all">
            <div className="flex flex-col items-center text-center">
              <Avatar src={builder.avatar} alt={builder.name} size="xl" />
              <h4 className="font-semibold text-[#0F172A] mt-4 mb-1">{builder.name}</h4>
              <p className="text-sm text-[#64748B] mb-3">{builder.role}</p>
              
              <div className="flex items-center gap-1 text-xs text-[#64748B] mb-4">
                <MapPin className="w-3 h-3" />
                <span>{builder.location}</span>
              </div>

              <div className="flex flex-wrap gap-2 justify-center mb-4">
                {builder.skills.slice(0, 3).map((skill) => (
                  <Badge key={skill} variant="default">{skill}</Badge>
                ))}
              </div>

              <Button variant="outline" size="sm" className="w-full">
                <UserPlus className="w-4 h-4" />
                Connect
              </Button>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}
