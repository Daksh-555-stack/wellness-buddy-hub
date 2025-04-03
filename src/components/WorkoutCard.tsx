
import React from 'react';
import { Dumbbell, Clock, Users, Heart } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

interface WorkoutCardProps {
  title: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  duration: number;
  participants: number;
  liked: boolean;
  likes: number;
  image?: string;
  className?: string;
}

const WorkoutCard = ({ 
  title, 
  level, 
  duration, 
  participants, 
  liked, 
  likes, 
  image = '/placeholder.svg', 
  className 
}: WorkoutCardProps) => {
  const levelColor = {
    'Beginner': 'bg-green-100 text-green-800',
    'Intermediate': 'bg-blue-100 text-blue-800',
    'Advanced': 'bg-purple-100 text-purple-800',
  }[level];

  return (
    <div className={cn("bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow", className)}>
      <div className="relative h-40 bg-slate-100">
        <img src={image} alt={title} className="w-full h-full object-cover" />
        <Badge className={cn("absolute top-3 right-3", levelColor)}>
          {level}
        </Badge>
      </div>
      
      <div className="p-4">
        <h3 className="font-semibold text-lg mb-2">{title}</h3>
        
        <div className="flex items-center gap-4 text-sm text-slate-600 mb-4">
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-1 text-slate-400" />
            <span>{duration} min</span>
          </div>
          <div className="flex items-center">
            <Users className="h-4 w-4 mr-1 text-slate-400" />
            <span>{participants}</span>
          </div>
        </div>
        
        <div className="flex items-center justify-between">
          <Button variant="outline" size="sm" className="rounded-lg">
            <Dumbbell className="h-4 w-4 mr-2" />
            Start Workout
          </Button>
          
          <Button variant="ghost" size="icon" className={cn(liked ? "text-red-500" : "text-slate-400")}>
            <Heart className="h-5 w-5" />
            <span className="sr-only">Like</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default WorkoutCard;
