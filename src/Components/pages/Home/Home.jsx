import React from 'react';
import { Landing } from './landing';
import BusinessVerticals from './sevices';

export const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <main className="container mx-auto px-4 py-12">
        <Landing/>
        <BusinessVerticals/>
      </main>
    </div>
  );
};