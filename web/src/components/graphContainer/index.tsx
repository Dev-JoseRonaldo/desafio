import React from 'react';

interface GraphContainerProps {
  children: React.ReactNode;
}

export const GraphContainer = ({ children }: GraphContainerProps) => {
  return (
    <main className="flex flex-col w-screen h-screen p-4 items-center justify-top gap-4 m-w-full"> 
      {children}
    </main>
  );
};
