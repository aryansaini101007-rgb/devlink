import { useState } from 'react';
import { Card } from '../components/common/Card';
import { Avatar } from '../components/common/Avatar';
import { Badge } from '../components/common/Badge';
import { Button } from '../components/common/Button';
import { SearchBar } from '../components/common/SearchBar';
import { Plus, Users, Bookmark } from 'lucide-react';
import { projects } from '../data/mockData';

export default function Projects() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedStage, setSelectedStage] = useState('all');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const stages = ['all', 'Idea', 'MVP', 'Beta', 'Growth'];
  const categories = ['all', 'AI/ML', 'DevOps', 'Health', 'E-commerce', 'Finance', 'Education'];

  const filteredProjects = projects.filter((project) => {
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStage = selectedStage === 'all' || project.stage === selectedStage;
    const matchesCategory = selectedCategory === 'all' || project.category === selectedCategory;
    return matchesSearch && matchesStage && matchesCategory;
  });

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold text-[#0F172A] mb-2">Projects</h1>
          <p className="text-lg text-[#64748B]">Discover and join exciting projects.</p>
        </div>
        <Button variant="primary">
          <Plus className="w-5 h-5" />
          Create Project
        </Button>
      </div>

      {/* Search and Filters */}
      <Card>
        <div className="space-y-4">
          <SearchBar 
            placeholder="Search projects..."
            value={searchQuery}
            onChange={setSearchQuery}
          />
          
          <div className="flex items-center gap-4">
            <div className="flex-1">
              <label className="block text-sm font-medium text-[#0F172A] mb-2">Stage</label>
              <select
                value={selectedStage}
                onChange={(e) => setSelectedStage(e.target.value)}
                className="w-full px-4 py-3 rounded-[18px] border border-[#E5E7EB] bg-white text-[#0F172A] focus:outline-none focus:ring-2 focus:ring-[#12A8E8] focus:border-transparent transition-all"
              >
                {stages.map((stage) => (
                  <option key={stage} value={stage}>
                    {stage === 'all' ? 'All Stages' : stage}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex-1">
              <label className="block text-sm font-medium text-[#0F172A] mb-2">Category</label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-3 rounded-[18px] border border-[#E5E7EB] bg-white text-[#0F172A] focus:outline-none focus:ring-2 focus:ring-[#12A8E8] focus:border-transparent transition-all"
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category === 'all' ? 'All Categories' : category}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </Card>

      {/* Project Cards Grid */}
      <div className="grid grid-cols-2 gap-6">
        {filteredProjects.map((project) => (
          <Card key={project.id} padding="md">
            <div className="flex flex-col h-full">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-xl font-semibold text-[#0F172A]">{project.title}</h3>
                    <Badge variant={project.status === 'Open' ? 'success' : 'default'}>
                      {project.status}
                    </Badge>
                  </div>
                  <p className="text-sm text-[#64748B] mb-4">{project.description}</p>
                </div>
                <button className="p-2 rounded-full hover:bg-[#F8FAFC] transition-colors">
                  <Bookmark className="w-5 h-5 text-[#64748B]" />
                </button>
              </div>

              <div className="flex items-center gap-3 mb-4">
                <Avatar src={project.founderAvatar} alt={project.founder} size="sm" />
                <div>
                  <p className="text-sm font-medium text-[#0F172A]">{project.founder}</p>
                  <p className="text-xs text-[#64748B]">Founder</p>
                </div>
              </div>

              <div className="space-y-3 mb-4">
                <div className="flex items-center gap-2">
                  <span className="text-sm text-[#64748B]">Required Skills:</span>
                  <div className="flex flex-wrap gap-2">
                    {project.requiredSkills.map((skill) => (
                      <Badge key={skill} variant="primary">{skill}</Badge>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-4 text-sm text-[#64748B]">
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    <span>{project.teamSize}/{project.maxTeamSize} members</span>
                  </div>
                  <span>•</span>
                  <span>{project.stage}</span>
                  <span>•</span>
                  <span>{project.posted}</span>
                </div>
              </div>

              <div className="mt-auto pt-4 border-t border-[#E5E7EB]">
                <Button 
                  variant={project.status === 'Open' ? 'primary' : 'outline'} 
                  size="sm" 
                  className="w-full"
                  disabled={project.status === 'Closed'}
                >
                  {project.status === 'Open' ? 'Apply Now' : 'Applications Closed'}
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
