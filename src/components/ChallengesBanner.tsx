
import React from 'react';
import { Award, ChevronRight, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ChallengesBanner = () => {
  return (
    <div className="fitness-gradient rounded-xl p-6 mb-8">
      <div className="flex items-start justify-between">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <Award className="h-6 w-6 text-yellow-300" />
            <h2 className="text-xl font-bold">Weekly Challenge</h2>
          </div>
          
          <h3 className="text-2xl font-bold mb-2">10,000 Steps Daily</h3>
          <p className="mb-4 opacity-90">Complete 10,000 steps every day this week to earn a badge and points!</p>
          
          <div className="flex items-center gap-2 text-white/80 mb-5">
            <Users className="h-5 w-5" />
            <span>364 buddies participating</span>
          </div>
          
          <Button className="bg-white text-teal-700 hover:bg-white/90 hover:text-teal-800">
            Join Challenge
          </Button>
        </div>
        
        <Button variant="ghost" className="text-white p-0 hover:bg-transparent opacity-80 hover:opacity-100">
          <ChevronRight className="h-6 w-6" />
        </Button>
      </div>
    </div>
  );
};

export default ChallengesBanner;
