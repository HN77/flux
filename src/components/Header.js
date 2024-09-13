import Link from 'next/link';
import React from 'react';

const Header = () => {
  return (
    <div className='header'>
      <h1 className='header-title'>
        <Link href='/'>Community Feed</Link>
      </h1>
    </div>
  );
};

export default Header;
