
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { BlogPost, getPostBySlug } from '../lib/blog';
import { SEO } from '../components/SEO';
import { Calendar, ArrowLeft, Clock } from 'lucide-react';
import { format } from 'date-fns';

export const BlogPostPage: React.FC = () => {
    const { slug } = useParams<{ slug: string }>();
    const [post, setPost] = useState<BlogPost | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (slug) {
            getPostBySlug(slug).then(data => {
                setPost(data);
                setLoading(false);
            });
        }
    }, [slug]);

    if (loading) return <div className="pt-40 text-center text-gray-500">Loading...</div>;
    if (!post) return <div className="pt-40 text-center text-white">Article not found.</div>;

    return (
        <>
            <SEO
                title={`${post.title} | 1n1scalez`}
                description={post.excerpt}
                image={post.image}
                type="article"
                url={`https://1n1scalez.com/blog/${post.slug}`}
            />

            <article className="pt-32 pb-24 container mx-auto px-6 relative z-10 max-w-3xl">

                {/* Breadcrumb / Back */}
                <Link to="/blog" className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-8 transition-colors">
                    <ArrowLeft size={16} /> Back to Blog
                </Link>

                {/* Header */}
                <header className="mb-12">
                    {post.tags && (
                        <div className="flex gap-2 mb-6">
                            {post.tags.map(tag => (
                                <span key={tag} className="px-3 py-1 rounded-full bg-purple-500/10 text-purple-400 text-xs font-bold border border-purple-500/20">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    )}

                    <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                        {post.title}
                    </h1>

                    <div className="flex items-center gap-6 text-gray-400 text-sm">
                        <span className="flex items-center gap-2">
                            <Calendar size={16} />
                            {format(new Date(post.date), 'MMMM d, yyyy')}
                        </span>
                        <span className="flex items-center gap-2">
                            <Clock size={16} />
                            {Math.ceil(post.content.length / 1000)} min read
                        </span>
                    </div>
                </header>

                {/* Featured Image */}
                {post.image && (
                    <div className="mb-12 rounded-2xl overflow-hidden border border-white/10 aspect-video">
                        <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
                    </div>
                )}

                {/* Content */}
                <div className="prose prose-invert prose-lg max-w-none prose-headings:font-bold prose-headings:text-white prose-a:text-purple-400 hover:prose-a:text-purple-300 prose-strong:text-white">
                    <ReactMarkdown>{post.content}</ReactMarkdown>
                </div>

                {/* Footer CTA */}
                <div className="mt-16 p-8 bg-gradient-to-r from-[#b3001b]/10 to-purple-900/10 rounded-2xl border border-white/10 text-center">
                    <h3 className="text-2xl font-bold mb-4">Want to implement this in your business?</h3>
                    <p className="text-gray-400 mb-6">We build these acquisition systems for you.</p>
                    <Link to="/" className="inline-block px-8 py-3 bg-[#b3001b] hover:bg-[#8e0016] text-white rounded-full font-bold transition-colors">
                        Get Your Roadmap
                    </Link>
                </div>

            </article>
        </>
    );
};

export default BlogPostPage;
