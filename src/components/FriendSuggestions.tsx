
import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';

interface FriendSuggestion {
  id: string;
  name: string;
  image?: string;
  mutualFriends: number;
  goals: string[];
}

const suggestions: FriendSuggestion[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    image: '/placeholder.svg',
    mutualFriends: 3,
    goals: ['Running', 'Weightlifting']
  },
  {
    id: '2',
    name: 'Michael Chen',
    image: '/placeholder.svg',
    mutualFriends: 5,
    goals: ['HIIT', 'Yoga']
  },
  {
    id: '3',
    name: 'Alex Rivera',
    image: '/placeholder.svg',
    mutualFriends: 2,
    goals: ['Swimming', 'Cycling']
  }
];

const FriendSuggestions = () => {
  return (
    <div className="bg-white rounded-xl shadow-sm p-5">
      <h3 className="text-lg font-semibold mb-4">Suggested Fitness Buddies</h3>
      
      <div className="space-y-4">
        {suggestions.map(friend => (
          <div key={friend.id} className="flex items-start gap-3">
            <Avatar className="h-12 w-12">
              <AvatarImage src={friend.image} alt={friend.name} />
              <AvatarFallback className="bg-teal-100 text-teal-800">
                {friend.name.split(' ').map(n => n[0]).join('')}
              </AvatarFallback>
            </Avatar>
            
            <div className="flex-1 min-w-0">
              <h4 className="font-medium text-slate-900">{friend.name}</h4>
              <p className="text-sm text-slate-500">
                {friend.mutualFriends} mutual {friend.mutualFriends === 1 ? 'buddy' : 'buddies'}
              </p>
              <div className="flex flex-wrap gap-1 mt-1">
                {friend.goals.map(goal => (
                  <span key={goal} className="inline-block px-2 py-0.5 bg-blueberry-50 text-blueberry-700 rounded text-xs">
                    {goal}
                  </span>
                ))}
              </div>
            </div>
            
            <Button size="sm" className="bg-teal-500 hover:bg-teal-600 text-white rounded-full">
              Connect
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FriendSuggestions;
