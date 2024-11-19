'use client';

import { useQuery } from '@tanstack/react-query';
import { useRoute } from 'wouter';
import { marked } from 'marked';
import { Card, CardContent } from "@/components/ui/card";
import { format } from 'date-fns';

export default function BlogPost() {
  const [, params] = useRoute('/blog/:slug');
  const slug = params?.slug;

  const { data: post, isLoading, error } = useQuery({
    queryKey: ['blog-post', slug],
    queryFn: async () => {
      const response = await fetch(`/api/blog-posts/${slug}`);
      if (!response.ok) {
        throw new Error('Failed to fetch blog post');
      }
      return response.json();
    },
  });

  if (isLoading) {
    return (
      <Card>
        <CardContent className="pt-6">
          <div className="animate-pulse space-y-4">
            <div className="h-8 bg-gray-200 rounded w-3/4"></div>
            <div className="h-4 bg-gray-200 rounded w-1/4"></div>
            <div className="space-y-2">
              <div className="h-4 bg-gray-200 rounded"></div>
              <div className="h-4 bg-gray-200 rounded"></div>
              <div className="h-4 bg-gray-200 rounded w-5/6"></div>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  if (error) {
    return <div>Error loading blog post</div>;
  }

  if (!post) {
    return <div>Blog post not found</div>;
  }

  return (
    <Card>
      <CardContent className="pt-6">
        <article className="prose dark:prose-invert max-w-none">
          <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
          <div className="text-sm opacity-70 mb-6">
            {format(new Date(post.publishedAt), 'MMMM d, yyyy')}
          </div>
          <div dangerouslySetInnerHTML={{ __html: marked(post.content) }} />
        </article>
      </CardContent>
    </Card>
  );
}
