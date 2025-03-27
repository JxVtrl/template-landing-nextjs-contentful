import { BlogPost, BlogPostResponse, Feature, FeatureResponse, Hero, HeroResponse } from '@/types/contentful';
import { createClient } from 'contentful';
import { treatHeroResponse, treatFeaturesResponse, treatBlogPostsResponse, treatBlogPostResponse } from './treatContentful';

const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID!,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
});

export const getHero = async (): Promise<Hero[]> => {
    const response = await client.getEntries({
        content_type: 'hero',
        limit: 1,
    });

    const hero = response.items as unknown as HeroResponse[];

    const treatedHero = treatHeroResponse(hero);
    console.log('treatedHero', treatedHero)

    return treatedHero;
};

export const getFeatures = async (): Promise<Feature[]> => {
    const response = await client.getEntries({
        content_type: 'feature',
        order: ['fields.order'],
    });

    const features = response.items as unknown as FeatureResponse[];
    return treatFeaturesResponse(features);
};

export const getBlogPosts = async (): Promise<BlogPost[]> => {
    const response = await client.getEntries({
        content_type: 'blogPost',
        order: ['-sys.createdAt'],
        limit: 3,
    });

    const blogPosts = response.items as unknown as BlogPostResponse[];
    return treatBlogPostsResponse(blogPosts);
};

export const getAllBlogPosts = async () => {
    const response = await client.getEntries({
        content_type: 'blogPost',
        order: ['-sys.createdAt'],
    });

    const blogPosts = response.items as unknown as BlogPostResponse[];
    return treatBlogPostsResponse(blogPosts);
};

export const getBlogPostBySlug = async (slug: string) => {
    const response = await client.getEntries({
        content_type: 'blogPost',
        'fields.slug': slug,
        limit: 1,
    });

    const blogPost = response.items[0] as unknown as BlogPostResponse;
    return treatBlogPostResponse(blogPost);
}; 