import Navbar from '@/components/shared/navbar';
import { Sidebar } from 'lucide-react';
import React from 'react';
import { ReactNode } from 'react';

export interface ChildProps {
  children: ReactNode; // Correct type for children
}

const AuthLayout = ({ children }: ChildProps) => {
  return (
    <div className='relative'>
      <Navbar/>
      <Sidebar/>
      <main className='flex items-center justify-center w-full h-[90vh] z-50 relative'>
        {children} {/* Render the children */}
      </main>
    </div>
  );
};

export default AuthLayout;
