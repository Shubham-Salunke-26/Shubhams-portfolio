import React from "react";
import { BookOpen, Calendar, ExternalLink } from "lucide-react";
import MotionWrapper from "./MotionWrapper";
import { GlassCard } from "./ui/glass-card";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faBook, faCalendar, faArrowRight } from "@fortawesome/free-solid-svg-icons";

interface Blog {
    slug: string;
    title: string;
    description: string;
    date: Date;
    tags: string[];
}

interface BlogsSectionProps {
    blogs: Blog[];
}

export default function BlogsSection({ blogs }: BlogsSectionProps) {
    function formatDate(date: Date) {
        return new Intl.DateTimeFormat("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
        }).format(date);
    }

    // Show only latest 6 blogs
    const latestBlogs = blogs.slice(0, 6);

    return (
        <section
            id="blogs"
            className="py-12 bg-gradient-to-b from-background to-muted/10"
        >
            <div className="container max-w-4xl mx-auto px-6 md:px-4">
                <MotionWrapper>
                    <div className="flex items-center justify-between mb-8">
                        <h2 className="text-2xl font-bold text-center md:text-left flex items-center gap-2 justify-center md:justify-start">
                            <FontAwesomeIcon icon={faPenToSquare} className="text-purple-500" />
                            Latest Blogs
                        </h2>
                        <a
                            href="/blog"
                            className="hidden md:flex items-center gap-2 text-sm text-purple-500 hover:gap-3 transition-all duration-300"
                        >
                            View All
                            <FontAwesomeIcon icon={faArrowRight} />
                        </a>
                    </div>
                </MotionWrapper>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {latestBlogs.map((blog, index) => (
                        <MotionWrapper key={blog.slug} delay={index * 0.1}>
                            <GlassCard className="group overflow-hidden dark:border-purple-500/10 hover:border-purple-500/30 transition-all duration-300 flex flex-col h-full">
                                <a href={`/blog/${blog.slug}`} className="p-6 flex-grow flex flex-col">
                                    <div className="flex items-start mb-3">
                                        <motion.div
                                            whileHover={{ rotate: 15 }}
                                            transition={{ type: "spring", stiffness: 500 }}
                                            className="flex items-center justify-center bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg p-2 mr-3 mt-1"
                                        >
                                            <FontAwesomeIcon icon={faBook} className="text-white" />
                                        </motion.div>
                                        <div className="flex-grow">
                                            <h3 className="font-semibold text-lg group-hover:text-purple-500 transition-colors duration-300 mb-2">
                                                {blog.title}
                                            </h3>
                                            <div className="flex items-center text-xs text-muted-foreground mb-3 gap-1">
                                                <FontAwesomeIcon icon={faCalendar} className="text-purple-500" />
                                                {formatDate(blog.date)}
                                            </div>
                                        </div>
                                    </div>

                                    <p className="text-sm text-muted-foreground mb-4 flex-grow">
                                        {blog.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {blog.tags.map((tag) => (
                                            <motion.span
                                                key={tag}
                                                className="text-xs px-2 py-1 bg-purple-500/10 text-purple-600 dark:text-purple-400 rounded-full"
                                                whileHover={{ scale: 1.05 }}
                                            >
                                                {tag}
                                            </motion.span>
                                        ))}
                                    </div>

                                    <motion.div
                                        className="flex items-center text-sm text-muted-foreground hover:text-purple-500 transition-colors group/link mt-auto gap-2"
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                    >
                                        <FontAwesomeIcon icon={faArrowRight} className="group-hover/link:translate-x-1 transition-transform duration-300" />
                                        Read More
                                    </motion.div>
                                </a>
                            </GlassCard>
                        </MotionWrapper>
                    ))}
                </div>

                {/* Mobile View All Button */}
                <div className="mt-8 text-center md:hidden">
                    <a
                        href="/blog"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-purple-500/10 hover:bg-purple-500/20 text-purple-500 rounded-lg transition-all duration-300"
                    >
                        View All Blogs
                        <FontAwesomeIcon icon={faArrowRight} />
                    </a>
                </div>
            </div>
        </section>
    );
}

