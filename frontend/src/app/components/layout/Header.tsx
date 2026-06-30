import { Bell, MessageSquare } from 'lucide-react';
import { SearchBar } from '../common/SearchBar';
import { Avatar } from '../common/Avatar';
import { currentUser, quotes } from '../../data/mockData';

export function Header() {
  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return 'Good Morning';
    if (hour < 18) return 'Good Afternoon';
    return 'Good Evening';
  };

  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

  return (
    <header className="h-[88px] bg-white border-b border-[#E5E7EB] px-8 flex items-center justify-between">
      <div className="flex-1">
        <h2 className="text-2xl font-semibold text-[#0F172A]">
          {getGreeting()}, {currentUser.firstName}
        </h2>
        <p className="text-sm text-[#64748B] mt-1">{randomQuote}</p>
      </div>

      <div className="flex items-center gap-6">
        <SearchBar 
          placeholder="Search projects, builders..." 
          className="w-[400px]"
        />

        <div className="flex items-center gap-3">
          <button className="relative p-2 rounded-full hover:bg-[#F8FAFC] transition-colors">
            <Bell className="w-5 h-5 text-[#64748B]" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-[#EF4444] rounded-full" />
          </button>

          <button className="relative p-2 rounded-full hover:bg-[#F8FAFC] transition-colors">
            <MessageSquare className="w-5 h-5 text-[#64748B]" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-[#EF4444] rounded-full" />
          </button>

          <Avatar src={currentUser.avatar} alt={currentUser.name} size="md" />
        </div>
      </div>
    </header>
  );
}
