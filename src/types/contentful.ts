import { Document } from "@contentful/rich-text-types";

export interface Metadata {
  tags: string[];
  concepts: string[];
}

export interface Sys {
  space: {
    sys: {
      type: string;
      linkType: string;
      id: string;
    };
  };
  id: string;
  type: string;
  createdAt: string;
  updatedAt: string;
  environment: {
    sys: {
      id: string;
      type: string;
      linkType: string;
    };
  };
  publishedVersion: number;
  revision: number;
  contentType: {
    sys: {
      type: string;
      linkType: string;
      id: string;
    };
  };
  locale: string;
}


export interface ImageAsset {
  metadata: Metadata;
  sys: Sys;
  fields: {
    title: string;
    description: string;
    file: {
      url: string;
      details: {
        size: number;
        image: {
          width: number;
          height: number;
        };
      };
      fileName: string;
      contentType: string;
    };
  };
}


export interface Hero {
  id: number;
  title: string;
  subtitle: string;
  ctaText: string;
  backgroundImage: string;
}

export interface Feature {
  id: number;
  title: string;
  description: string;
  icon: string;
  order: number;
}

export interface BlogPost {
  id: number;
  title: string;
  slug: string;
  content: Document; // Rich Text content
  featuredImage: string;
  excerpt: string;
  author: string;
  publishedDate: string;
} 

export interface HeroResponse {
  metadata: Metadata;
  sys: Sys;
  fields: {
    title: string;
    subtitle: string;
    ctaText: string;
    backgroundImage: ImageAsset;
  };
}

export interface FeatureResponse {
  metadata: Metadata;
  sys: Sys;
  fields: {
    title: string;
    description: string;
    icon: string;
    order: number;
  };
}

export interface BlogPostResponse {
  metadata: Metadata;
  sys: Sys;
  fields: {
    title: string;
    slug: string;
    content: Document;
    featuredImage: ImageAsset;
    excerpt: string;
    author: string;
    publishedDate: string;
  };
}

