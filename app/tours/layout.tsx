import React from 'react';

const TourLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <header className='py-2 w-1/2 bg-slate-500 rounded mb-4'>
        <h1 className='text-3xl text-white text-center'>Nested Layout</h1>
      </header>

      <main>{children}</main>
    </div>
  );
};

export default TourLayout;
