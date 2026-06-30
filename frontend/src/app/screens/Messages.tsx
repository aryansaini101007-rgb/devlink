import { useState } from 'react';
import { Card } from '../components/common/Card';
import { Avatar } from '../components/common/Avatar';
import { SearchBar } from '../components/common/SearchBar';
import { Send } from 'lucide-react';
import { conversations, messages } from '../data/mockData';

export default function Messages() {
  const [selectedConversation, setSelectedConversation] = useState(conversations[0].id);
  const [messageText, setMessageText] = useState('');

  const selectedConv = conversations.find(c => c.id === selectedConversation);
  const conversationMessages = messages.filter(m => m.conversationId === selectedConversation);

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-bold text-[#0F172A] mb-2">Messages</h1>
        <p className="text-lg text-[#64748B]">Connect with your team and collaborators.</p>
      </div>

      {/* Messages Layout */}
      <div className="grid grid-cols-3 gap-6 h-[700px]">
        {/* Conversations List */}
        <Card padding="md" className="flex flex-col">
          <SearchBar placeholder="Search conversations..." className="mb-4" />
          <div className="flex-1 overflow-y-auto space-y-2">
            {conversations.map((conversation) => (
              <button
                key={conversation.id}
                onClick={() => setSelectedConversation(conversation.id)}
                className={`w-full p-4 rounded-[18px] text-left transition-all ${
                  selectedConversation === conversation.id
                    ? 'bg-[#12A8E8] text-white'
                    : 'hover:bg-[#F8FAFC]'
                }`}
              >
                <div className="flex items-start gap-3">
                  <Avatar 
                    src={conversation.avatar} 
                    alt={conversation.name} 
                    size="md" 
                    online={conversation.online}
                  />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <p className={`font-semibold truncate ${
                        selectedConversation === conversation.id ? 'text-white' : 'text-[#0F172A]'
                      }`}>
                        {conversation.name}
                      </p>
                      <span className={`text-xs ${
                        selectedConversation === conversation.id ? 'text-white/80' : 'text-[#64748B]'
                      }`}>
                        {conversation.time}
                      </span>
                    </div>
                    <p className={`text-sm truncate ${
                      selectedConversation === conversation.id ? 'text-white/80' : 'text-[#64748B]'
                    }`}>
                      {conversation.lastMessage}
                    </p>
                  </div>
                  {conversation.unread > 0 && (
                    <span className="flex items-center justify-center w-5 h-5 bg-[#EF4444] text-white text-xs rounded-full">
                      {conversation.unread}
                    </span>
                  )}
                </div>
              </button>
            ))}
          </div>
        </Card>

        {/* Chat Window */}
        <Card padding="none" className="col-span-2 flex flex-col">
          {/* Chat Header */}
          <div className="px-8 py-6 border-b border-[#E5E7EB]">
            <div className="flex items-center gap-3">
              <Avatar 
                src={selectedConv?.avatar || ''} 
                alt={selectedConv?.name || ''} 
                size="md" 
                online={selectedConv?.online}
              />
              <div>
                <h3 className="font-semibold text-[#0F172A]">{selectedConv?.name}</h3>
                <p className="text-sm text-[#64748B]">
                  {selectedConv?.online ? 'Online' : 'Offline'}
                </p>
              </div>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-8 py-6 space-y-4">
            {conversationMessages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.isOwn ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`max-w-[70%] ${message.isOwn ? 'order-2' : 'order-1'}`}>
                  <div
                    className={`px-6 py-3 rounded-[18px] ${
                      message.isOwn
                        ? 'bg-[#12A8E8] text-white'
                        : 'bg-[#F8FAFC] text-[#0F172A]'
                    }`}
                  >
                    <p>{message.text}</p>
                  </div>
                  <p className={`text-xs text-[#64748B] mt-1 ${
                    message.isOwn ? 'text-right' : 'text-left'
                  }`}>
                    {message.timestamp}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Message Input */}
          <div className="px-8 py-6 border-t border-[#E5E7EB]">
            <div className="flex items-center gap-3">
              <input
                type="text"
                placeholder="Type a message..."
                value={messageText}
                onChange={(e) => setMessageText(e.target.value)}
                className="flex-1 px-4 py-3 rounded-[18px] border border-[#E5E7EB] bg-white text-[#0F172A] placeholder:text-[#64748B] focus:outline-none focus:ring-2 focus:ring-[#12A8E8] focus:border-transparent transition-all"
              />
              <button className="p-3 rounded-full bg-[#12A8E8] text-white hover:bg-[#0E8FCA] transition-colors">
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}