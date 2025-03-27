import { BlogPost, BlogPostResponse, Feature, FeatureResponse, Hero, HeroResponse } from '@/types/contentful';

export const treatHeroResponse = (heros: HeroResponse[]): Hero[] => {

    const res  = heros.map((hero, index) => ({
        id: index,
        title: hero.fields.title || "",
        subtitle: hero.fields.subtitle || "",
        ctaText: hero.fields.ctaText || "",
        backgroundImage: `https:${hero.fields.backgroundImage.fields.file.url}`,
    }))

    console.log('res', res)

    return res;
};

export const treatFeaturesResponse = (features: FeatureResponse[]): Feature[] => {
    return features.map((feature, index) => ({
        id: index,
        title: feature.fields.title || "",
        description: feature.fields.description || "",
        icon: feature.fields.icon || "",
        order: feature.fields.order || 0,
    }));
};

export const treatBlogPostsResponse = (blogPosts: BlogPostResponse[]): BlogPost[] => {
    return blogPosts.map((blogPost, index) => ({
        id: index,
        title: blogPost.fields.title || "",
        slug: blogPost.fields.slug || "",
        content: blogPost.fields.content || "",
        featuredImage: `https:${blogPost.fields.featuredImage.fields.file.url}`,
        excerpt: blogPost.fields.excerpt || "",
        author: blogPost.fields.author || "",
        publishedDate: blogPost.fields.publishedDate || "",
    }));
};

export const treatBlogPostResponse = (blogPost: BlogPostResponse): BlogPost => {
    return {
        id: 0,
        title: blogPost.fields.title || "",
        slug: blogPost.fields.slug || "",
        content: blogPost.fields.content || "",
        featuredImage: `https:${blogPost.fields.featuredImage.fields.file.url}`,
        excerpt: blogPost.fields.excerpt || "",
        author: blogPost.fields.author || "",
        publishedDate: blogPost.fields.publishedDate || "",
    };
};
