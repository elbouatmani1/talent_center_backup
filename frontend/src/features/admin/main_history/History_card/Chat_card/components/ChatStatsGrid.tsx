import { FunctionComponent } from 'react';
import { MessageCircle, MessageSquare, Plus, Users } from 'lucide-react';
import { chatStats } from '../data/chatHistoryMock';
import type { ChatStatCard } from '../types';

const StatIcon: FunctionComponent<{ icon: ChatStatCard['icon'] }> = ({ icon }) => {
  if (icon === 'messages_sent') return <MessageSquare className="h-5 w-5" strokeWidth={2} />;
  if (icon === 'conversations') return <Plus className="h-5 w-5" strokeWidth={2} />;
  if (icon === 'group_chats') return <Users className="h-5 w-5" strokeWidth={2} />;
  return <MessageCircle className="h-5 w-5" strokeWidth={2} />;
};

const ChatStatsGrid: FunctionComponent = () => {
  return (
    <section className="mb-4 grid w-full grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-4">
      {chatStats.map((stat) => (
        <article
          key={stat.key}
          className="flex h-[98px] items-center justify-between gap-5 rounded-[12px] border border-[rgba(0,0,0,0.1)] bg-white p-6 text-sm text-[#717182] font-inter"
        >
          <div className="min-w-0 space-y-1">
            <p className="text-[14px] font-normal leading-5 text-[#717182]">{stat.label}</p>
            <p className="text-[34px] font-bold leading-9 text-[#0a0a0a]">{stat.value}</p>
          </div>
          <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-[10px] bg-[#dbeafe] text-[#2563eb]">
            <StatIcon icon={stat.icon} />
          </span>
        </article>
      ))}
    </section>
  );
};

export default ChatStatsGrid;
