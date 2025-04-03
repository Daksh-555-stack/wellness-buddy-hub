
import React from 'react';
import { Progress } from '@/components/ui/progress';
import { TrendingUp, Award, Zap } from 'lucide-react';

interface Goal {
  id: string;
  name: string;
  current: number;
  target: number;
  unit: string;
  color: string;
  icon: React.ElementType;
}

const goals: Goal[] = [
  {
    id: '1',
    name: 'Weekly Workouts',
    current: 3,
    target: 5,
    unit: 'workouts',
    color: 'bg-teal-500',
    icon: Zap
  },
  {
    id: '2',
    name: 'Running Distance',
    current: 12,
    target: 20,
    unit: 'km',
    color: 'bg-blueberry-500',
    icon: TrendingUp
  },
  {
    id: '3',
    name: 'Strength Training',
    current: 2,
    target: 3,
    unit: 'sessions',
    color: 'bg-coral-500',
    icon: Award
  }
];

const GoalProgress = () => {
  return (
    <div className="bg-white rounded-xl shadow-sm p-5">
      <h3 className="text-lg font-semibold mb-4">Your Goals</h3>
      
      <div className="space-y-5">
        {goals.map(goal => {
          const progress = Math.round((goal.current / goal.target) * 100);
          const Icon = goal.icon;
          
          return (
            <div key={goal.id}>
              <div className="flex items-center justify-between mb-1">
                <div className="flex items-center gap-2">
                  <div className={`h-8 w-8 rounded-full ${goal.color.replace('bg', 'bg-opacity-10')} flex items-center justify-center`}>
                    <Icon className={`h-4 w-4 ${goal.color.replace('bg', 'text')}`} />
                  </div>
                  <span className="font-medium">{goal.name}</span>
                </div>
                <span className="text-sm text-slate-600">
                  {goal.current} / {goal.target} {goal.unit}
                </span>
              </div>
              
              <div className="relative">
                <Progress 
                  value={progress} 
                  className="h-2" 
                  indicatorClassName={goal.color}
                />
                
                {progress >= 100 && (
                  <div className="absolute -right-1 -top-1 h-4 w-4 bg-yellow-400 rounded-full flex items-center justify-center">
                    <Award className="h-2 w-2 text-white" />
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
      
      <button className="w-full mt-4 border border-dashed border-slate-300 rounded-lg py-3 text-slate-500 hover:text-teal-600 hover:border-teal-300 transition-colors">
        + Add New Goal
      </button>
    </div>
  );
};

export default GoalProgress;
