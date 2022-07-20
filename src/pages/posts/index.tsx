import Head from "next/head";
import styles from './styles.module.scss';

export default function Posts() {
  return (
    <>
      <Head>
        <title>
          ignews | Posts
        </title>
      </Head>

      <main className={styles.container}>
        <div className={styles.post}>

          <a href="">
            <time>20 de julho de 2022</time>
            <strong>Creating a Monorepo with Lerna</strong>
            <p>Lorem ipsum dolor sit amet, consectetur adip Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus distinctio ipsum velit. Earum, sint eos? Deleniti, rem molestias mollitia culpa quisquam aut magni doloribus nobis modi eius! Quod, corrupti tempora.</p>
          </a>

          <a href="">
            <time>20 de julho de 2022</time>
            <strong>Creating a Monorepo with Lerna</strong>
            <p>Lorem ipsum dolor sit amet, consectetur adip Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus distinctio ipsum velit. Earum, sint eos? Deleniti, rem molestias mollitia culpa quisquam aut magni doloribus nobis modi eius! Quod, corrupti tempora.</p>
          </a>

          <a href="">
            <time>20 de julho de 2022</time>
            <strong>Creating a Monorepo with Lerna</strong>
            <p>Lorem ipsum dolor sit amet, consectetur adip Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus distinctio ipsum velit. Earum, sint eos? Deleniti, rem molestias mollitia culpa quisquam aut magni doloribus nobis modi eius! Quod, corrupti tempora.</p>
          </a>

        </div>
      </main>
    </>
  )
}