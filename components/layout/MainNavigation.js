import Link from 'next/link';
import React from 'react';

const MainNavigation = () => {
  return (
    <div>
      <div style={{ marginTop: '60px' }}></div>
      <ul>
        <li>
          <Link href="/">All Meetups</Link>
        </li>
        <li>
          <Link href="/new-meetup">Add a meetup</Link>
        </li>
      </ul>
    </div>
  );
};

export default MainNavigation;
