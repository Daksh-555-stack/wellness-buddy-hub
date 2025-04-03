
import React from 'react';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import WorkoutCard from './WorkoutCard';

const workouts = [
  {
    id: '1',
    title: 'Morning Cardio Blast',
    level: 'Beginner' as const,
    duration: 20,
    participants: 245,
    liked: true,
    likes: 128
  },
  {
    id: '2',
    title: 'Full Body HIIT',
    level: 'Intermediate' as const,
    duration: 45,
    participants: 178,
    liked: false,
    likes: 94
  },
  {
    id: '3',
    title: 'Strength & Conditioning',
    level: 'Advanced' as const,
    duration: 60,
    participants: 112,
    liked: false,
    likes: 76
  },
  {
    id: '4',
    title: 'Yoga for Flexibility',
    level: 'Beginner' as const,
    duration: 30,
    participants: 320,
    liked: false,
    likes: 158
  },
];

const RecommendedWorkouts = () => {
  return (
    <div className="mb-8">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold">Recommended Workouts</h2>
        <a href="#" className="text-teal-600 hover:text-teal-700 text-sm font-medium">
          See All
        </a>
      </div>
      
      <ScrollArea className="w-full">
        <div className="flex space-x-4 pb-4">
          {workouts.map(workout => (
            <WorkoutCard 
              key={workout.id}
              title={workout.title}
              level={workout.level}
              duration={workout.duration}
              participants={workout.participants}
              liked={workout.liked}
              likes={workout.likes}
              className="min-w-[280px]"
            />
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  );
};

export default RecommendedWorkouts;
