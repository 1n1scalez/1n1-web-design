
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
    const [activeCategory, setActiveCategory] = useState("All");

    useEffect(() => {
        getAllPosts().then(data => {
            setPosts(data);
            setLoading(false);
        });
    }, []);

    const categories = ["All", "Strategy", "Automation", "Sales", "CRM", "Case Studies"];

    const featuredPost = posts[0];
    const remainingPosts = posts.slice(1);

    return (
        <>
            <SEO
                title="Blog | 1n1scalez"
                description="Insights on client acquisition, CRM automation, and scaling service businesses."
                url="https://1n1scalez.com/blog"
            />

            <div className="pt-24 md:pt-32 pb-24 container mx-auto px-4 md:px-6 relative z-10">

                {/* Header */}
                <div className="mb-12 md:mb-20">
                    <motion.h1
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-white text-5xl md:text-7xl font-bold tracking-tight mb-6"
                    >
                        Noteworthy <span className="text-[#b3001b]">Insights</span>
                    </motion.h1>
                    <p className="text-xl text-gray-400 max-w-2xl leading-relaxed">
                        Tactics, systems, and "money truths" for scaling your service business to 7-figures.
                    </p>
                </div>

                {/* Category Navigation (Sticky) */}
                <div className="sticky top-20 z-40 bg-[#0a0a0a]/80 backdrop-blur-md border-y border-white/5 py-4 mb-12 flex items-center gap-2 overflow-x-auto no-scrollbar">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`px-5 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap ${activeCategory === cat
                                    ? "bg-white text-black"
                                    : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white"
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {loading ? (
                    <div className="h-64 flex items-center justify-center text-gray-500">Loading articles...</div>
                ) : (
                    <div className="space-y-16">

                        {/* FEATURED POST (Hero Style) */}
                        {featuredPost && (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.98 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="group relative grid grid-cols-1 lg:grid-cols-12 gap-0 rounded-[2rem] overflow-hidden bg-[#0f1115] border border-white/10"
                            >
                                <div className="lg:col-span-7 p-8 md:p-12 flex flex-col justify-center order-2 lg:order-1">
                                    <div className="flex items-center gap-3 text-sm font-medium text-[#b3001b] mb-4 uppercase tracking-wider">
                                        <Tag size={14} />
                                        {featuredPost.tags?.[0] || "Featured"}
                                    </div>
                                    <Link to={`/blog/${featuredPost.slug}`}>
                                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-[1.1] group-hover:text-gray-200 transition-colors">
                                            {featuredPost.title}
                                        </h2>
                                    </Link>
                                    <p className="text-gray-400 text-lg leading-relaxed mb-8 line-clamp-3">
                                        {featuredPost.excerpt}
                                    </p>
                                    <div className="flex items-center gap-4 text-sm text-gray-500">
                                        <span className="flex items-center gap-2">
                                            <Calendar size={14} />
                                            {format(new Date(featuredPost.date), 'MMMM d, yyyy')}
                                        </span>
                                        <Link to={`/blog/${featuredPost.slug}`} className="ml-auto flex items-center gap-2 text-white font-bold hover:gap-3 transition-all">
                                            Read Article <ArrowRight size={18} />
                                        </Link>
                                    </div>
                                </div>
                                <div className="lg:col-span-5 relative h-64 lg:h-auto order-1 lg:order-2 overflow-hidden">
                                    {featuredPost.image ? (
                                        <img src={featuredPost.image} alt={featuredPost.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                                    ) : (
                                        <div className="w-full h-full bg-gradient-to-br from-[#b3001b]/20 to-purple-900/20 flex items-center justify-center">
                                            <span className="text-white/10 text-6xl font-black">1N1</span>
                                        </div>
                                    )}
                                </div>
                            </motion.div>
                        )}

                        {/* REMAINING POSTS GRID */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
                            {remainingPosts.map((post, idx) => (
                                <motion.div
                                    key={post.slug}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="group flex flex-col"
                                >
                                    {/* Image Card */}
                                    <Link to={`/blog/${post.slug}`} className="block relative aspect-[4/3] rounded-2xl overflow-hidden mb-6 bg-white/5 border border-white/5 group-hover:border-white/20 transition-colors">
                                        {post.image ? (
                                            <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                        ) : (
                                            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-800 to-black">
                                                <span className="text-white/20 text-2xl font-bold">1n1</span>
                                            </div>
                                        )}
                                        {/* Tag Overlay */}
                                        {post.tags && (
                                            <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-white uppercase tracking-wider border border-white/10">
                                                {post.tags[0]}
                                            </div>
                                        )}
                                    </Link>

                                    {/* Content */}
                                    <div className="flex-1 flex flex-col">
                                        <div className="text-xs text-[#b3001b] font-bold uppercase mb-2">
                                            {format(new Date(post.date), 'MMM d, yyyy')}
                                        </div>
                                        <Link to={`/blog/${post.slug}`} className="block mb-3">
                                            <h3 className="text-2xl font-bold text-white group-hover:text-gray-300 transition-colors leading-tight">
                                                {post.title}
                                            </h3>
                                        </Link>
                                        <p className="text-gray-400 text-sm leading-relaxed line-clamp-2 mb-4 flex-1">
                                            {post.excerpt}
                                        </p>
                                        <Link to={`/blog/${post.slug}`} className="inline-flex items-center gap-1 text-sm font-bold text-white/60 hover:text-white transition-colors">
                                            Read More <ArrowRight size={14} />
                                        </Link>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};

// Default export for lazy loading
export default BlogIndex;
