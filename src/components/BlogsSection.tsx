import React from "react";
import { blogs } from "@/lib/data";
import { BookOpen, Calendar, ExternalLink } from "lucide-react";
import MotionWrapper from "./MotionWrapper";
import { GlassCard } from "./ui/glass-card";
import { motion } from "framer-motion";

export default function BlogsSection() {
    return (
        <section
            id="blogs"
            className="py-12 bg-gradient-to-b from-background to-muted/10"
        >
            <div className="container max-w-4xl mx-auto px-6 md:px-4">
                <MotionWrapper>
                    <h2 className="text-2xl font-bold mb-8 text-center md:text-left">
                        📝 Blogs
                    </h2>
                </MotionWrapper>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {blogs.map((blog, index) => (
                        <MotionWrapper key={blog.title} delay={index * 0.1}>
                            <GlassCard className="group overflow-hidden dark:border-purple-500/10 hover:border-purple-500/30 transition-all duration-300 flex flex-col h-full">
                                <div className="p-6 flex-grow flex flex-col">
                                    <div className="flex items-start mb-3">
                                        <motion.div
                                            whileHover={{ rotate: 15 }}
                                            transition={{ type: "spring", stiffness: 500 }}
                                            className="flex items-center justify-center bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg p-2 mr-3 mt-1"
                                        >
                                            <BookOpen className="h-4 w-4 text-white" />
                                        </motion.div>
                                        <div className="flex-grow">
                                            <h3 className="font-semibold text-lg group-hover:text-purple-500 transition-colors duration-300 mb-2">
                                                {blog.title}
                                            </h3>
                                            <div className="flex items-center text-xs text-muted-foreground mb-3">
                                                <Calendar className="h-3 w-3 mr-1" />
                                                {blog.date}
                                            </div>
                                        </div>
                                    </div>

                                    <p className="text-sm text-muted-foreground mb-4 flex-grow">
                                        {blog.excerpt}
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

                                    <motion.a
                                        href={blog.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center text-sm text-muted-foreground hover:text-purple-500 transition-colors group/link mt-auto"
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                    >
                                        <ExternalLink className="h-4 w-4 mr-2 group-hover/link:translate-x-1 transition-transform duration-300" />
                                        Read More →
                                    </motion.a>
                                </div>
                            </GlassCard>
                        </MotionWrapper>
                    ))}
                </div>
            </div>
        </section>
    );
}
