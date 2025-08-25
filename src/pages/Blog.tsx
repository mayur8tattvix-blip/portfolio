import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, User, Clock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export const Blog: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation();

  const blogPosts = [
    {
      id: 1,
      title: 'The Future of AI in Small Business: 5 Game-Changing Applications',
      excerpt: 'Artificial Intelligence is no longer just for tech giants. Small and medium businesses are increasingly leveraging AI to automate processes, improve customer experience, and gain competitive advantages.',
      author: 'Tech Team',
      date: '2024-01-15',
      readTime: '8 min read',
      category: 'AI & Machine Learning',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=300&fit=crop',
    },
    {
      id: 2,
      title: 'Cloud Migration Strategy: A Complete Guide for Indian Businesses',
      excerpt: 'Cloud migration is no longer optional—it\'s essential for business competitiveness. This comprehensive guide covers everything Indian businesses need to know about migrating to the cloud successfully.',
      author: 'Cloud Architect',
      date: '2024-01-10',
      readTime: '12 min read',
      category: 'Cloud Computing',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=300&fit=crop',
    },
    {
      id: 3,
      title: 'Python Best Practices for Enterprise Applications: Lessons from the Field',
      excerpt: 'Python has become the go-to language for enterprise applications, from web services to AI/ML systems. However, building enterprise-grade Python applications requires following specific best practices.',
      author: 'Python Specialist',
      date: '2024-01-05',
      readTime: '10 min read',
      category: 'Development',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=300&fit=crop',
    },
  ];

  return (
    <div className="pt-20 pb-20">
      {/* Header */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Technical Blog
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Insights, tutorials, and best practices from our team of technology experts
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Articles */}
      <section ref={ref} className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Featured Articles
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Latest insights from our technology experts
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <Card className="h-full group cursor-pointer">
                  {/* Blog Image */}
                  <div className="h-48 rounded-lg mb-6 overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  {/* Category */}
                  <div className="mb-3">
                    <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                    {post.excerpt}
                  </p>

                  {/* Meta Information */}
                  <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-6">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <User size={14} />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar size={14} />
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock size={14} />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  {/* Read More Button */}
                  <Link to={`/blog/${post.id}`}>
                    <Button variant="outline" className="w-full group">
                      Read More
                      <motion.div
                        whileHover={{ x: 4 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      >
                        <ArrowRight size={16} />
                      </motion.div>
                    </Button>
                  </Link>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Categories */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Explore by Category
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: 'AI & Machine Learning', count: 12, color: 'from-purple-500 to-purple-600' },
              { name: 'Cloud Computing', count: 8, color: 'from-blue-500 to-blue-600' },
              { name: 'Web Development', count: 15, color: 'from-green-500 to-green-600' },
              { name: 'Best Practices', count: 10, color: 'from-orange-500 to-orange-600' },
            ].map((category, index) => (
              <Card key={index} className="text-center group cursor-pointer">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r ${category.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <span className="text-white text-2xl font-bold">{category.count}</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {category.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {category.count} articles
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};