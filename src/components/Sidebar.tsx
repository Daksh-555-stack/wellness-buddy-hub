
import React from 'react';
import { CalendarDays, Users, Dumbbell, BarChart2, Trophy, Heart, User } from 'lucide-react';
import { cn } from '@/lib/utils';

interface NavItemProps {
  icon: React.ElementType;
  label: string;
  active?: boolean;
}

const NavItem = ({ icon: Icon, label, active }: NavItemProps) => {
  return (
    <li>
      <a 
        href="#" 
        className={cn(
          "flex items-center px-4 py-3 rounded-lg gap-3 hover:bg-teal-50 transition-colors",
          active ? "bg-teal-100 text-teal-800 font-medium" : "text-slate-700"
        )}
      >
        <Icon className={cn("h-5 w-5", active ? "text-teal-600" : "text-slate-500")} />
        <span>{label}</span>
      </a>
    </li>
  );
};

const Sidebar = () => {
  return (
    <aside className="w-64 h-screen hidden lg:block p-4 border-r">
      <div className="flex flex-col h-full">
        <div className="pb-6">
          <div className="flex items-center justify-center mb-6">
            <span className="text-2xl font-bold text-teal-600">Fitness</span>
            <span className="text-2xl font-bold text-blueberry-600">Buddy</span>
          </div>
          
          <div className="flex items-center justify-center">
            <div className="flex flex-col items-center">
              <div className="relative">
                <div className="h-16 w-16 rounded-full bg-teal-100 flex items-center justify-center">
                  <User className="h-8 w-8 text-teal-600" />
                </div>
                <div className="absolute -bottom-1 -right-1 bg-teal-500 text-white h-6 w-6 rounded-full flex items-center justify-center text-xs font-medium">
                  3
                </div>
              </div>
              <h3 className="mt-2 font-medium">Welcome back!</h3>
            </div>
          </div>
        </div>
        
        <nav className="flex-1">
          <ul className="space-y-1">
            <NavItem icon={Dumbbell} label="Workouts" active />
            <NavItem icon={Users} label="Buddies" />
            <NavItem icon={CalendarDays} label="Schedule" />
            <NavItem icon={BarChart2} label="Progress" />
            <NavItem icon={Trophy} label="Challenges" />
            <NavItem icon={Heart} label="Health" />
          </ul>
        </nav>
        
        <div className="mt-auto">
          <div className="bg-teal-50 rounded-xl p-4">
            <h4 className="font-medium text-teal-800 mb-2">Need motivation?</h4>
            <p className="text-sm text-teal-700 mb-3">Join today's cardio challenge with 32 buddies!</p>
            <button className="w-full bg-teal-600 hover:bg-teal-700 text-white rounded-lg py-2 text-sm font-medium transition-colors">
              Join Now
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
