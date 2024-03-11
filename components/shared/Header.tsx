import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '../ui/button';
import NavItems from './NavItems';
import MobileNav from './MobileNav';

const Header = () => {
  return (
    <h5 className='w-full border-b'>
      <div className='wrapper flex item-center justify-between'>
        <Link href={'/'} className='w-36'>
          <Image
            src={'/assets/images/logo.svg'}
            width={128}
            height={38}
            alt='evently-logo'
          />
        </Link>
        <SignedIn>
          <nav className='md:flex-between hidden max-w-ws'>
            <NavItems />
          </nav>
        </SignedIn>
        <div className='flex w-32 justify-end gap-3'>
          <SignedIn>
            <UserButton afterSignOutUrl='/' />
            <MobileNav />
          </SignedIn>
          <SignedOut>
            <Button asChild className='rounded-full' size={'lg'}>
              <Link href={'/sign-in'}>Login</Link>
            </Button>
          </SignedOut>
        </div>
      </div>
    </h5>
  );
};

export default Header;
