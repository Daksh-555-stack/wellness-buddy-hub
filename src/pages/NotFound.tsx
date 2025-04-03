
import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center">
      <div className="text-center p-8 max-w-md">
        <div className="mb-6">
          <span className="text-7xl font-bold text-teal-600">4</span>
          <span className="text-7xl font-bold text-blueberry-600">0</span>
          <span className="text-7xl font-bold text-teal-600">4</span>
        </div>
        
        <h1 className="text-2xl font-bold mb-4">Page Not Found</h1>
        <p className="text-slate-600 mb-8">
          Sorry, the page you're looking for doesn't exist or has been moved.
        </p>
        
        <Button className="bg-teal-600 hover:bg-teal-700">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Home
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
