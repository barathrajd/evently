'use client';
import { headerLinks } from '@/constants';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const NavItems = () => {
  const pathname = usePathname();
  return (
    <ul className='md:flex-between flex w-full flex-col items-start gap-5 md:flex-row'>
      {headerLinks.map((headerLink) => {
        const isActive = pathname === headerLink.route;
        return (
          <li
            key={headerLink.label}
            className={`${
              isActive && 'text-primary-500'
            } flex-center p-mediu,-16 whitespace-nowrap`}
          >
            <Link href={headerLink.route}>{headerLink.label}</Link>
          </li>
        );
      })}
    </ul>
  );
};

export default NavItems;
