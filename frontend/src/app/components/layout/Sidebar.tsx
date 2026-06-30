import { NavLink } from 'react-router';
import { 
  LayoutDashboard, 
  Users, 
  FolderKanban, 
  FileText, 
  MessageSquare, 
  Bell, 
  User, 
  Settings 
} from 'lucide-react';
import { Avatar } from '../common/Avatar';
import { currentUser } from '../../data/mockData';

const navigation = [
  { name: 'Dashboard', to: '/', icon: LayoutDashboard },
  { name: 'Discover Builders', to: '/discover', icon: Users },
  { name: 'Projects', to: '/projects', icon: FolderKanban },
  { name: 'Applications', to: '/applications', icon: FileText },
  { name: 'Messages', to: '/messages', icon: MessageSquare },
  { name: 'Notifications', to: '/notifications', icon: Bell },
  { name: 'Profile', to: '/profile', icon: User },
  { name: 'Settings', to: '/settings', icon: Settings },
];

export function Sidebar() {
  return (
    <aside className="w-[280px] h-screen sticky top-0 bg-white border-r border-[#E5E7EB] flex flex-col">
      {/* Logo */}
      <div className="px-8 py-8">
        <h1 className="text-2xl font-bold text-[#12A8E8]">DevLink</h1>
        <p className="text-sm text-[#64748B] mt-1">Build Together</p>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 space-y-1">
        {navigation.map((item) => (
          <NavLink
            key={item.name}
            to={item.to}
            end={item.to === '/'}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 rounded-[18px] transition-all ${
                isActive
                  ? 'bg-[#12A8E8] text-white shadow-sm'
                  : 'text-[#64748B] hover:text-[#12A8E8] hover:bg-[#F8FAFC]'
              }`
            }
          >
            {({ isActive }) => (
              <>
                <item.icon className="w-5 h-5" />
                <span className="font-medium">{item.name}</span>
              </>
            )}
          </NavLink>
        ))}
      </nav>

      {/* User Profile */}
      <div className="p-6 border-t border-[#E5E7EB]">
        <div className="flex items-center gap-3">
          <Avatar src={currentUser.avatar} alt={currentUser.name} size="lg" online />
          <div className="flex-1 min-w-0">
            <p className="font-semibold text-[#0F172A] truncate">{currentUser.name}</p>
            <p className="text-sm text-[#64748B] truncate">{currentUser.role}</p>
          </div>
        </div>
      </div>
    </aside>
  );
}
