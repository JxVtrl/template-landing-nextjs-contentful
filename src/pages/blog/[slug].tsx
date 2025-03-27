import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { getAllBlogPosts, getBlogPostBySlug } from '../../lib/contentful';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import type { BlogPost } from '../../types/contentful';

interface Props {
  post: BlogPost | null;
}

export default function BlogPost({ post }: Props) {
  if (!post) {
    return (
      <main className="container mx-auto px-4 py-12">
        <Link 
          href="/"
          className="text-blue-600 hover:text-blue-800 mb-8 inline-block"
        >
          ← Voltar para Home
        </Link>
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Post não encontrado</h1>
          <p className="text-gray-600">O post que você está procurando não existe ou foi removido.</p>
        </div>
      </main>
    );
  }

  return (
    <>
      <Head>
        <title>{post.title} - Blog</title>
        <meta name="description" content={post.excerpt} />
      </Head>

      <main className="container mx-auto px-4 py-12">
        <Link 
          href="/"
          className="text-blue-600 hover:text-blue-800 mb-8 inline-block"
        >
          ← Voltar para Home
        </Link>

        <article className="max-w-3xl mx-auto">
          <img 
            src={post.featuredImage}
            alt={post.title}
            className="w-full h-64 object-cover rounded-lg mb-8"
          />
          
          <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
          
          <div className="flex items-center text-gray-600 mb-8">
            <span>{post.author}</span>
            <span className="mx-2">•</span>
            <time>{new Date(post.publishedDate).toLocaleDateString('pt-BR')}</time>
          </div>

          <div className="prose prose-lg max-w-none">
            {documentToReactComponents(post.content)}
          </div>
        </article>
      </main>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  try {
    const posts = await getAllBlogPosts();
    
    const paths = posts.map((post) => ({
      params: { slug: post.slug },
    }));

    return {
      paths,
      fallback: 'blocking',
    };
  } catch (error) {
    console.error('Erro ao buscar posts para gerar paths:', error);
    return {
      paths: [],
      fallback: 'blocking',
    };
  }
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  try {
    const slug = params?.slug as string;
    if (!slug) {
      return {
        notFound: true,
      };
    }

    const post = await getBlogPostBySlug(slug);

    if (!post) {
      return {
        props: {
          post: null,
        },
        revalidate: 60,
      };
    }

    return {
      props: {
        post,
      },
      revalidate: 60,
    };
  } catch (error) {
    console.error('Erro ao buscar post:', error);
    return {
      props: {
        post: null,
      },
      revalidate: 60,
    };
  }
}; 