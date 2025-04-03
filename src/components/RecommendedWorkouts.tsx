
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
    likes: 128,
    exercises: [
      "5 min warm-up jog",
      "10 min interval sprints",
      "5 min cool-down walk"
    ],
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80'
  },
  {
    id: '2',
    title: 'Full Body HIIT',
    level: 'Intermediate' as const,
    duration: 45,
    participants: 178,
    liked: false,
    likes: 94,
    exercises: [
      "Burpees - 3 sets of 15",
      "Mountain climbers - 4 sets of 30 sec",
      "Jump squats - 3 sets of 20",
      "Push-ups - 3 sets of 12"
    ],
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80'
  },
  {
    id: '3',
    title: 'Strength & Conditioning',
    level: 'Advanced' as const,
    duration: 60,
    participants: 112,
    liked: false,
    likes: 76,
    exercises: [
      "Deadlifts - 4 sets of 8",
      "Bench press - 4 sets of 10",
      "Rows - 3 sets of 12",
      "Shoulder press - 3 sets of 12"
    ],
    image: 'https://images.unsplash.com/photo-1584466977773-e625c37cdd50?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80'
  },
  {
    id: '4',
    title: 'Yoga for Flexibility',
    level: 'Beginner' as const,
    duration: 30,
    participants: 320,
    liked: false,
    likes: 158,
    exercises: [
      "Sun salutations - 10 min",
      "Warrior poses - 8 min",
      "Hip openers - 7 min",
      "Relaxation - 5 min"
    ],
    image: 'https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80'
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
              exercises={workout.exercises}
              image={workout.image}
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
