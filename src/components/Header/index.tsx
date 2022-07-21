import Image from 'next/image';
import logoImg from '/public/images/logo.svg';

import styles from './styles.module.scss';
import { SignInButton } from '../SignInButton';
import Link from 'next/link';

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <Image
          src={logoImg}
          alt="ig.news"
        />
        <nav>
          <Link href="/">
            <a className={styles.active}>
              Home
            </a>
          </Link>
          <Link href="/posts">
            <a>
              Posts
            </a>
          </Link>
        </nav>
        <SignInButton />
      </div>
    </header>
  );
}