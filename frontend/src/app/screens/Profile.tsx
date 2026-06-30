import { Card } from '../components/common/Card';
import { Avatar } from '../components/common/Avatar';
import { Badge } from '../components/common/Badge';
import { Button } from '../components/common/Button';
import { MapPin, Mail, Link as LinkIcon, Github, Linkedin, Edit } from 'lucide-react';
import { currentUser } from '../data/mockData';

export default function Profile() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-bold text-[#0F172A] mb-2">Profile</h1>
        <p className="text-lg text-[#64748B]">Manage your professional profile.</p>
      </div>

      {/* Profile Header */}
      <Card>
        <div className="flex items-start gap-6">
          <Avatar src={currentUser.avatar} alt={currentUser.name} size="xl" className="w-24 h-24" />
          <div className="flex-1">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h2 className="text-3xl font-bold text-[#0F172A] mb-2">{currentUser.name}</h2>
                <p className="text-xl text-[#64748B] mb-3">{currentUser.role}</p>
                <div className="flex items-center gap-2 text-[#64748B] mb-4">
                  <MapPin className="w-4 h-4" />
                  <span>{currentUser.location}</span>
                </div>
                <Badge variant="success">{currentUser.availability}</Badge>
              </div>
              <Button variant="outline">
                <Edit className="w-4 h-4" />
                Edit Profile
              </Button>
            </div>

            <div className="grid grid-cols-4 gap-6 py-6 border-y border-[#E5E7EB]">
              <div className="text-center">
                <p className="text-3xl font-bold text-[#0F172A] mb-1">{currentUser.projects}</p>
                <p className="text-sm text-[#64748B]">Projects</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-[#0F172A] mb-1">{currentUser.contributions}</p>
                <p className="text-sm text-[#64748B]">Contributions</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-[#0F172A] mb-1">{currentUser.followers}</p>
                <p className="text-sm text-[#64748B]">Followers</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-[#0F172A] mb-1">{currentUser.following}</p>
                <p className="text-sm text-[#64748B]">Following</p>
              </div>
            </div>
          </div>
        </div>
      </Card>

      <div className="grid grid-cols-3 gap-6">
        {/* About */}
        <div className="col-span-2 space-y-6">
          <Card>
            <h3 className="text-xl font-semibold text-[#0F172A] mb-4">About</h3>
            <p className="text-[#64748B] leading-relaxed">{currentUser.bio}</p>
          </Card>

          <Card>
            <h3 className="text-xl font-semibold text-[#0F172A] mb-4">Skills</h3>
            <div className="flex flex-wrap gap-2">
              {currentUser.skills.map((skill) => (
                <Badge key={skill} variant="primary">{skill}</Badge>
              ))}
            </div>
          </Card>

          <Card>
            <h3 className="text-xl font-semibold text-[#0F172A] mb-4">Experience</h3>
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-[#0F172A] mb-1">Senior Full-Stack Developer</h4>
                <p className="text-sm text-[#64748B] mb-2">TechCorp • 2022 - Present</p>
                <p className="text-[#64748B]">
                  Leading development of cloud-native applications using React, Node.js, and AWS. 
                  Mentoring junior developers and driving technical decisions.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-[#0F172A] mb-1">Full-Stack Developer</h4>
                <p className="text-sm text-[#64748B] mb-2">StartupXYZ • 2019 - 2022</p>
                <p className="text-[#64748B]">
                  Built and maintained web applications using modern JavaScript frameworks. 
                  Collaborated with cross-functional teams to deliver features.
                </p>
              </div>
            </div>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          <Card>
            <h3 className="text-xl font-semibold text-[#0F172A] mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-[#64748B]">
                <Mail className="w-4 h-4" />
                <span className="text-sm">{currentUser.email}</span>
              </div>
              <div className="flex items-center gap-3 text-[#64748B]">
                <LinkIcon className="w-4 h-4" />
                <a href="#" className="text-sm text-[#12A8E8] hover:underline">
                  nancychen.com
                </a>
              </div>
              <div className="flex items-center gap-3 text-[#64748B]">
                <Github className="w-4 h-4" />
                <a href="#" className="text-sm text-[#12A8E8] hover:underline">
                  github.com/nancychen
                </a>
              </div>
              <div className="flex items-center gap-3 text-[#64748B]">
                <Linkedin className="w-4 h-4" />
                <a href="#" className="text-sm text-[#12A8E8] hover:underline">
                  linkedin.com/in/nancychen
                </a>
              </div>
            </div>
          </Card>

          <Card>
            <h3 className="text-xl font-semibold text-[#0F172A] mb-4">Interests</h3>
            <div className="flex flex-wrap gap-2">
              <Badge variant="default">Open Source</Badge>
              <Badge variant="default">Cloud Computing</Badge>
              <Badge variant="default">DevOps</Badge>
              <Badge variant="default">AI/ML</Badge>
              <Badge variant="default">Web3</Badge>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
