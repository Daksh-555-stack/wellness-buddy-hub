
import React from 'react';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import RecommendedWorkouts from '@/components/RecommendedWorkouts';
import ChallengesBanner from '@/components/ChallengesBanner';
import GoalProgress from '@/components/GoalProgress';

const Index = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      
      <div className="flex">
        <Sidebar />
        
        <main className="flex-1 p-6">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Main Content - Left and Middle Columns */}
              <div className="lg:col-span-2 space-y-6">
                <ChallengesBanner />
                <RecommendedWorkouts />
              </div>
              
              {/* Right Sidebar */}
              <div className="space-y-6">
                <GoalProgress />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;
