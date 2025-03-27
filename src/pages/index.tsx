import { GetStaticProps } from 'next';
import Head from 'next/head';
import { Hero } from '../components/Hero';
import { Features } from '../components/Features';
import { BlogPosts } from '../components/BlogPosts';
import { getHero, getFeatures, getBlogPosts } from '../lib/contentful';
import { Hero as HeroType, Feature as FeatureType, BlogPost as BlogPostType } from '../types/contentful';

interface Props {
  hero: HeroType | null;
  features: FeatureType[];
  posts: BlogPostType[];
}

export default function Home({ hero, features, posts }: Props) {
  return (
    <>
      <Head>
        <title>Landing Page - Next.js + Contentful</title>
        <meta name="description" content="Uma landing page moderna construída com Next.js e Contentful" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        {hero && <Hero hero={hero} />}
        <Features features={features} />
        <BlogPosts posts={posts} />
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  let hero: HeroType | null = null;
  let features: FeatureType[] = [];
  let posts: BlogPostType[] = [];

  try {
    const heroData = await getHero();
    hero = heroData[0] || null;
  } catch (error) {
    console.error('Erro ao buscar hero:', error);
  }

  try {
    const featuresData = await getFeatures();
    features = featuresData || [];
  } catch (error) {
    console.error('Erro ao buscar features:', error);
  }

  try {
    const postsData = await getBlogPosts();
    posts = postsData || [];
  } catch (error) {
    console.error('Erro ao buscar posts:', error);
  }

  return {
    props: {
      hero,
      features,
      posts,
    },
    revalidate: 60,
  };
};
