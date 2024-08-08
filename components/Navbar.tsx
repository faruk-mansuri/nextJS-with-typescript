import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
    <nav className='max-w-3xl mx-auto py-4 flex justify-center gap-x-4 border-b-2'>
      <Link href='/'>Home Page</Link>
      <Link href='/counter'>Counter Page</Link>
      <Link href='/tours'>Tours Page</Link>
      <Link href='/actions'>Actions Page</Link>
    </nav>
  );
};

export default Navbar;
