import { GetStaticProps } from "next";
import Head from "next/head";
import { asText } from '@prismicio/helpers';
import { createClient } from "../../services/prismic";

import styles from './styles.module.scss';
import Link from "next/link";

type Post = {
  slug: string;
  title: string;
  excerpt: string;
  updatedAt: string;
};

interface PostsProps {
  posts: Post[];
}

export default function Posts({ posts }: PostsProps) {
  return (
    <>
      <Head>
        <title>
          Posts | ig.news
        </title>
      </Head>

      <main className={styles.container}>
        <div className={styles.post}>
          {
            posts.map(post => (
              <Link
                key={post.slug}
                href={`/posts/${post.slug}`}
              >
                <a>
                  <time>{post.updatedAt}</time>
                  <strong>{post.title}</strong>
                  <p>{post.excerpt}</p>
                </a>
              </Link>
            ))
          }
        </div>
      </main>
    </>
  )
}

export const getStaticProps: GetStaticProps = async ({ previewData }) => {
  const prismic = createClient({ previewData, accessToken: process.env.PRISMIC_ACCESS_TOKEN })

  const response = await prismic.getAllByType('post', {
    fetchLinks: ['post.title', 'post.content']
  });

  const posts = response.map((post) => {
    return ({
      slug: post.uid,
      title: asText(post.data.title),
      excerpt: post.data.content.find(content => content.type === 'paragraph')?.text ?? '',
      updatedAt: new Date(post.last_publication_date).toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: 'long',
        year: 'numeric'
      })
    });
  })

  return {
    props: {
      posts
    },
  }
}