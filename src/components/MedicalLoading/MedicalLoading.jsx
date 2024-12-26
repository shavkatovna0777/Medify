import React from 'react';

const MedicalLoading = () => {
  return (
    <div className="flex flex-col items-center justify-center p-6 gap-4">
      {/* Pulse Animation */}
      <div className="relative w-16 h-16">
        <div className="absolute w-full h-full rounded-full bg-teal-500 opacity-75 animate-ping"></div>
        <div className="relative w-16 h-16 rounded-full bg-teal-600 flex items-center justify-center">
          {/* Cross Symbol */}
          <div className="text-white text-2xl font-bold">+</div>
        </div>
      </div>
      
      {/* Loading Text */}
      <div className="text-teal-700 font-semibold animate-pulse">
        Processing...
      </div>

      {/* Heartbeat Line */}
      <div className="w-32 h-1 bg-gradient-to-r from-teal-200 via-teal-500 to-teal-200 animate-pulse"></div>
    </div>
  );
};

export default MedicalLoading;