import React from 'react';
import { ArrowLeft, Compass } from 'lucide-react';
import Button from '../components/ui/Button';

export const NotFound = () => {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center text-center px-4 bg-white">
      <div className="w-16 h-16 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600 mb-6">
        <Compass className="w-8 h-8 animate-spin" style={{ animationDuration: '8s' }} />
      </div>
      <h1 className="text-6xl font-extrabold text-slate-900 mb-2 font-display">404</h1>
      <h2 className="text-2xl font-bold text-slate-800 mb-4">Page Not Found</h2>
      <p className="text-slate-600 max-w-md mb-8">
        The page you are looking for might have been removed or is temporarily unavailable.
      </p>
      <Button href="/" variant="primary">
        <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home
      </Button>
    </div>
  );
};

export default NotFound;
