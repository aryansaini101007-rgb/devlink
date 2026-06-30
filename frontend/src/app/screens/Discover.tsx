import { useState } from 'react';
import { Card } from '../components/common/Card';
import { Avatar } from '../components/common/Avatar';
import { Badge } from '../components/common/Badge';
import { Button } from '../components/common/Button';
import { SearchBar } from '../components/common/SearchBar';
import { MapPin, UserPlus, Mail, UserCheck } from 'lucide-react';
import { allBuilders } from '../data/mockData';

export default function Discover() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRole, setSelectedRole] = useState('all');
  const [selectedAvailability, setSelectedAvailability] = useState('all');

  const roles = ['all', 'Frontend Developer', 'Backend Engineer', 'Mobile Developer', 'UX/UI Designer', 'Product Manager', 'DevOps Engineer', 'Data Scientist'];
  const availabilities = ['all', 'Available', 'Busy'];

  const filteredBuilders = allBuilders.filter((builder) => {
    const matchesSearch = builder.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         builder.role.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesRole = selectedRole === 'all' || builder.role === selectedRole;
    const matchesAvailability = selectedAvailability === 'all' || builder.availability === selectedAvailability;
    return matchesSearch && matchesRole && matchesAvailability;
  });

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-bold text-[#0F172A] mb-2">Discover Builders</h1>
        <p className="text-lg text-[#64748B]">Connect with talented developers and designers.</p>
      </div>

      {/* Search and Filters */}
      <Card>
        <div className="space-y-4">
          <SearchBar 
            placeholder="Search by name, role, or skills..."
            value={searchQuery}
            onChange={setSearchQuery}
          />
          
          <div className="flex items-center gap-4">
            <div className="flex-1">
              <label className="block text-sm font-medium text-[#0F172A] mb-2">Role</label>
              <select
                value={selectedRole}
                onChange={(e) => setSelectedRole(e.target.value)}
                className="w-full px-4 py-3 rounded-[18px] border border-[#E5E7EB] bg-white text-[#0F172A] focus:outline-none focus:ring-2 focus:ring-[#12A8E8] focus:border-transparent transition-all"
              >
                {roles.map((role) => (
                  <option key={role} value={role}>
                    {role === 'all' ? 'All Roles' : role}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex-1">
              <label className="block text-sm font-medium text-[#0F172A] mb-2">Availability</label>
              <select
                value={selectedAvailability}
                onChange={(e) => setSelectedAvailability(e.target.value)}
                className="w-full px-4 py-3 rounded-[18px] border border-[#E5E7EB] bg-white text-[#0F172A] focus:outline-none focus:ring-2 focus:ring-[#12A8E8] focus:border-transparent transition-all"
              >
                {availabilities.map((availability) => (
                  <option key={availability} value={availability}>
                    {availability === 'all' ? 'All Availability' : availability}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </Card>

      {/* Builder Cards Grid */}
      <div className="grid grid-cols-3 gap-6">
        {filteredBuilders.map((builder) => (
          <Card key={builder.id} padding="md">
            <div className="flex flex-col">
              <div className="flex items-start gap-4 mb-4">
                <Avatar src={builder.avatar} alt={builder.name} size="lg" />
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-[#0F172A] mb-1">{builder.name}</h3>
                  <p className="text-sm text-[#64748B] mb-2">{builder.role}</p>
                  <Badge variant={builder.availability === 'Available' ? 'success' : 'default'}>
                    {builder.availability}
                  </Badge>
                </div>
              </div>

              <div className="flex items-center gap-1 text-sm text-[#64748B] mb-4">
                <MapPin className="w-4 h-4" />
                <span>{builder.location}</span>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {builder.skills.map((skill) => (
                  <Badge key={skill} variant="default">{skill}</Badge>
                ))}
              </div>

              <div className="flex items-center gap-2 text-sm text-[#64748B] mb-6">
                <span>{builder.projects} projects</span>
                <span>•</span>
                <span>{builder.followers} followers</span>
              </div>

              <div className="flex gap-2">
                <Button variant="primary" size="sm" className="flex-1">
                  <UserPlus className="w-4 h-4" />
                  Connect
                </Button>
                <Button variant="outline" size="sm" className="flex-1">
                  <Mail className="w-4 h-4" />
                  Message
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
