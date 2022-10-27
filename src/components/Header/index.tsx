import Image from 'next/image';
// import logoImg from '/public/images/logo.svg';

import { ActiveLink } from '../ActiveLink';
import { SignInButton } from '../SignInButton';

import styles from './styles.module.scss';

export function Header() {

  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        {/* <Image
          src={logoImg}
          alt="ig.news"
        /> */}
        <Image
          src="/images/logo.svg"
          width={110}
          height={31}
          alt="ig.news"
        />
        <nav>
          <ActiveLink
            href="/"
            activeClassName={styles.active}
          >
            <a>
              Home
            </a>
          </ActiveLink>
          <ActiveLink
            href="/posts"
            activeClassName={styles.active}
          >
            <a>
              Posts
            </a>
          </ActiveLink>
        </nav>
        <SignInButton />
      </div>
    </header>
  );
}