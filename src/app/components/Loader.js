'use client';

export default function Loader() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
      <div className="relative">
        <div className="w-32 h-32 border-t-4 border-b-4 border-primary-blue-light rounded-full animate-spin"></div>
        <div className="absolute top-0 left-0 w-32 h-32 border-t-4 border-primary-green-dark rounded-full animate-ping"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-gradient gradient-blue text-3xl font-bold">W</div>
        </div>
      </div>
      <div className="absolute mt-40">
        <h2 className="text-2xl font-bold bg-gradient-to-r from-primary-blue-dark to-primary-indigo-dark bg-clip-text text-transparent">
          WORKLOOP<span className="text-primary-green-dark">Agency</span>
        </h2>
        <div className="mt-2 w-full h-1 bg-gradient-to-r from-primary-green-dark to-primary-teal-light"></div>
      </div>
    </div>
  );
}
