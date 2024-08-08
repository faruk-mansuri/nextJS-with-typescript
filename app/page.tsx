import Link from 'next/link';
import React from 'react';

const Home = () => {
  return (
    <div>
      <h1 className='text-7xl text-red-600'>Home Page</h1>
      <Link href='/about'>About Page</Link>
      <Link href='/info'>Info Page</Link>
    </div>
  );
};

export default Home;
