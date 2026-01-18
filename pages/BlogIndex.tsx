
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { BlogPost, getAllPosts } from '../lib/blog';
import { SEO } from '../components/SEO';
import { Calendar, ArrowRight, Tag } from 'lucide-react';
import { format } from 'date-fns';

export const BlogIndex: React.FC = () => {
    const [posts, setPosts] = useState<BlogPost[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getAllPosts().then(data => {
            setPosts(data);
            setLoading(false);
        });
    }, []);

    return (
        <>
            <SEO
                title="Blog | 1n1scalez"
                description="Insights on client acquisition, CRM automation, and scaling service businesses."
                url="https://1n1scalez.com/blog"
            />

            <div className="pt-32 pb-24 container mx-auto px-6 relative z-10">

                {/* Header */}
                <div className="text-center mb-20">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-bold mb-6"
                    >
                        Growth <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#b3001b] to-purple-500">Insights</span>
                    </motion.h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Tactics and systems for scaling your service business to 7-figures.
                    </p>
                </div>

                {/* Post Grid */}
                {loading ? (
                    <div className="text-center text-gray-500">Loading articles...</div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {posts.map((post, idx) => (
                            <motion.div
                                key={post.slug}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                className="group relative bg-[#0f1115] border border-white/10 rounded-2xl overflow-hidden hover:border-purple-500/50 transition-colors"
                            >
                                {/* Image */}
                                <div className="h-48 overflow-hidden bg-white/5">
                                    {post.image ? (
                                        <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                    ) : (
                                        <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-purple-900/20 to-[#b3001b]/20">
                                            <span className="text-white/20 font-bold text-4xl">1n1</span>
                                        </div>
                                    )}
                                </div>

                                {/* Content */}
                                <div className="p-6">
                                    <div className="flex items-center gap-4 text-xs text-gray-400 mb-4">
                                        <span className="flex items-center gap-1">
                                            <Calendar size={12} />
                                            {format(new Date(post.date), 'MMM d, yyyy')}
                                        </span>
                                        {post.tags && post.tags.length > 0 && (
                                            <span className="flex items-center gap-1 text-purple-400">
                                                <Tag size={12} />
                                                {post.tags[0]}
                                            </span>
                                        )}
                                    </div>

                                    <Link to={`/blog/${post.slug}`} className="block">
                                        <h2 className="text-xl font-bold mb-3 group-hover:text-purple-400 transition-colors line-clamp-2">
                                            {post.title}
                                        </h2>
                                    </Link>

                                    <p className="text-gray-400 text-sm leading-relaxed mb-6 line-clamp-3">
                                        {post.excerpt}
                                    </p>

                                    <Link
                                        to={`/blog/${post.slug}`}
                                        className="inline-flex items-center gap-2 text-sm font-bold text-white hover:text-purple-400 transition-colors"
                                    >
                                        Read Article <ArrowRight size={16} />
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                )}
            </div>
        </>
    );
};

// Default export for lazy loading
export default BlogIndex;
