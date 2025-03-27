import Link from 'next/link';
import { BlogPost as BlogPostType } from '../types/contentful';

interface Props {
  posts: BlogPostType[];
}

export const BlogPosts = ({ posts }: Props) => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Blog</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <article key={index} className="bg-white rounded-lg overflow-hidden shadow-lg">
              <img 
                src={post.featuredImage.url} 
                alt={post.featuredImage.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{post.author}</span>
                  <span className="text-sm text-gray-500">
                    {new Date(post.publishedDate).toLocaleDateString('pt-BR')}
                  </span>
                </div>
                <Link 
                  href={`/blog/${post.slug}`}
                  className="mt-4 inline-block text-blue-600 hover:text-blue-800"
                >
                  Ler mais →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}; 