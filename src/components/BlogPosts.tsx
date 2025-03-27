import Link from 'next/link';
import { BlogPost as BlogPostType } from '../types/contentful';

interface Props {
  posts: BlogPostType[];
}

export const BlogPosts = ({ posts }: Props) => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">Blog</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <article 
              key={index} 
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition duration-300 flex flex-col
              border border-slate-200
              "
            >
              <div className="relative h-48">
                <img 
                  src={post.featuredImage} 
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold mb-3 text-slate-900 line-clamp-2 hover:text-indigo-600 transition-colors">
                  {post.title}
                </h3>
                <p className="text-slate-700 mb-4 line-clamp-3">{post.excerpt}</p>
                <div className="mt-auto">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-medium text-slate-700">{post.author}</span>
                    <span className="text-sm text-slate-600">
                      {new Date(post.publishedDate).toLocaleDateString('pt-BR')}
                    </span>
                  </div>
                  <Link 
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center text-indigo-600 hover:text-indigo-700 font-medium transition-colors"
                  >
                    Ler mais
                    <svg 
                      className="ml-2 w-4 h-4" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}; 