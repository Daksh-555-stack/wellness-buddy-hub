
import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Heart, MessageCircle, ThumbsUp, Timer, TrendingUp, Trophy } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

interface ActivityProps {
  user: {
    name: string;
    image?: string;
  };
  time: string;
  type: 'workout' | 'achievement' | 'goal' | 'challenge';
  content: string;
  likes: number;
  comments: number;
  likedByMe: boolean;
}

const activities: ActivityProps[] = [
  {
    user: { name: 'Jordan Smith', image: '/placeholder.svg' },
    time: '2 hours ago',
    type: 'workout',
    content: 'Just finished a 5-mile run in 42 minutes! Feeling stronger every day. 💪',
    likes: 12,
    comments: 3,
    likedByMe: true
  },
  {
    user: { name: 'Taylor Wilson', image: '/placeholder.svg' },
    time: '5 hours ago',
    type: 'achievement',
    content: 'I hit my monthly goal of 20 workouts! Who wants to join me for a celebratory hike this weekend?',
    likes: 24,
    comments: 8,
    likedByMe: false
  },
  {
    user: { name: 'Jamie Rodriguez', image: '/placeholder.svg' },
    time: 'Yesterday',
    type: 'challenge',
    content: 'Just joined the 30-day strength challenge. Anyone else participating?',
    likes: 18,
    comments: 7,
    likedByMe: false
  }
];

const ActivityIcon = ({ type }: { type: ActivityProps['type'] }) => {
  switch (type) {
    case 'workout':
      return <Timer className="h-4 w-4 text-teal-500" />;
    case 'achievement':
      return <Trophy className="h-4 w-4 text-coral-500" />;
    case 'goal':
      return <TrendingUp className="h-4 w-4 text-blueberry-500" />;
    case 'challenge':
      return <Trophy className="h-4 w-4 text-purple-500" />;
    default:
      return null;
  }
};

const ActivityFeed = () => {
  return (
    <div className="bg-white rounded-xl shadow-sm">
      <div className="p-5">
        <h2 className="text-lg font-semibold mb-4">Activity Feed</h2>
      </div>
      
      {activities.map((activity, index) => (
        <React.Fragment key={index}>
          <div className="px-5 py-4">
            <div className="flex items-start gap-3">
              <Avatar className="h-10 w-10">
                <AvatarImage src={activity.user.image} alt={activity.user.name} />
                <AvatarFallback className="bg-blueberry-100 text-blueberry-800">
                  {activity.user.name.split(' ').map(n => n[0]).join('')}
                </AvatarFallback>
              </Avatar>
              
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <h4 className="font-medium">{activity.user.name}</h4>
                  <ActivityIcon type={activity.type} />
                  <span className="text-xs text-slate-500">{activity.time}</span>
                </div>
                
                <p className="text-slate-700 mb-3">{activity.content}</p>
                
                <div className="flex items-center gap-4">
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className={`flex items-center gap-1 p-1 ${activity.likedByMe ? 'text-coral-500' : 'text-slate-500'}`}
                  >
                    <ThumbsUp className="h-4 w-4" />
                    <span>{activity.likes}</span>
                  </Button>
                  
                  <Button variant="ghost" size="sm" className="flex items-center gap-1 p-1 text-slate-500">
                    <MessageCircle className="h-4 w-4" />
                    <span>{activity.comments}</span>
                  </Button>
                </div>
              </div>
            </div>
          </div>
          
          {index < activities.length - 1 && <Separator />}
        </React.Fragment>
      ))}
      
      <div className="p-4 text-center">
        <Button variant="ghost" className="text-teal-600 hover:text-teal-700">
          View More
        </Button>
      </div>
    </div>
  );
};

export default ActivityFeed;
