import Link from 'next/link';
import React from 'react';

const About = () => {
  return (
    <div>
      <h1 className='text-7xl'>about page</h1>
      <Link href='/' className='text-xl text-blue-400'>
        Home Page
      </Link>
    </div>
  );
};

export default About;
