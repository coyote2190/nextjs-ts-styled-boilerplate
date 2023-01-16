import { Button } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import { StyledHeader } from './StyledHeader';
import { HeaderProps } from './types';
const Header: FC<HeaderProps> = () => {
  return (
    <StyledHeader>
      <a href="/">
        <Image
          src="/logo-yklic.png"
          alt="Yklic Logo"
          width={150}
          height={50}
          priority
        />
      </a>
      <nav>
        <ul>
          <li>
            <Link href="/">
              <Button variant="contained">Home</Button>
            </Link>
          </li>
          <li>
            <Link href="/post/abc">
              <Button variant="contained">Page Params</Button>
            </Link>
          </li>
        </ul>
      </nav>
    </StyledHeader>
  );
};

export default Header;
