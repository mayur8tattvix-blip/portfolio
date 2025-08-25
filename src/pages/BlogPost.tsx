import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, User, Clock, Share2, BookOpen } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';

export const BlogPost: React.FC = () => {
  const { id } = useParams();

  const blogPosts = {
    '1': {
      title: 'The Future of AI in Small Business: 5 Game-Changing Applications',
      content: `
        <p>Artificial Intelligence is no longer just for tech giants. Small and medium businesses are increasingly leveraging AI to automate processes, improve customer experience, and gain competitive advantages.</p>
        
        <h2>1. Customer Service Automation</h2>
        <p>AI-powered chatbots can handle 80% of routine customer inquiries, providing 24/7 support while reducing operational costs. Modern chatbots understand context and can escalate complex issues to human agents seamlessly.</p>
        
        <h2>2. Predictive Analytics for Inventory Management</h2>
        <p>Small retailers can now predict demand patterns using AI algorithms that analyze historical sales data, seasonal trends, and external factors like weather or local events.</p>
        
        <h2>3. Personalized Marketing Campaigns</h2>
        <p>AI can analyze customer behavior to create highly targeted marketing campaigns, increasing conversion rates by up to 40% compared to traditional mass marketing approaches.</p>
        
        <h2>4. Automated Financial Analysis</h2>
        <p>AI tools can process financial data in real-time, identifying cash flow patterns, predicting future revenue, and flagging potential financial risks before they become critical.</p>
        
        <h2>5. Smart Document Processing</h2>
        <p>OCR and NLP technologies can automatically extract and process information from invoices, contracts, and other business documents, reducing manual data entry by 90%.</p>
        
        <h2>Getting Started with AI</h2>
        <p>The key to successful AI implementation is starting small. Choose one specific business process, implement a focused AI solution, measure results, and then scale gradually.</p>
      `,
      author: 'Alex Thompson',
      date: '2024-01-15',
      readTime: '8 min read',
      category: 'AI & Machine Learning',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop',
    },
    '2': {
      title: 'Cloud Migration Strategy: A Complete Guide for Indian Businesses',
      content: `
        <p>Cloud migration is no longer optional—it's essential for business competitiveness. This comprehensive guide covers everything Indian businesses need to know about migrating to the cloud successfully.</p>
        
        <h2>Why Cloud Migration Matters</h2>
        <p>Indian businesses are experiencing rapid digital transformation. Cloud migration offers scalability, cost reduction, and access to cutting-edge technologies that were previously available only to large enterprises.</p>
        
        <h2>Pre-Migration Assessment</h2>
        <p>Before migrating, conduct a thorough assessment of your current infrastructure, applications, and data. Identify dependencies, security requirements, and compliance needs specific to Indian regulations.</p>
        
        <h2>Choosing the Right Cloud Provider</h2>
        <p>Consider factors like data residency requirements, local support, pricing in INR, and compliance with Indian data protection laws when selecting between AWS, Azure, or Google Cloud.</p>
        
        <h2>Migration Strategies</h2>
        <p>The 6 R's of migration: Rehost (lift-and-shift), Replatform, Repurchase, Refactor, Retire, and Retain. Each strategy has different cost implications and technical requirements.</p>
        
        <h2>Security and Compliance</h2>
        <p>Ensure your cloud setup complies with Indian IT Act, RBI guidelines for financial services, and industry-specific regulations. Implement proper access controls and data encryption.</p>
        
        <h2>Cost Optimization</h2>
        <p>Use reserved instances, right-sizing, and automated scaling to optimize costs. Monitor usage patterns and implement cost allocation tags for better financial management.</p>
      `,
      author: 'Sarah Mitchell',
      date: '2024-01-10',
      readTime: '12 min read',
      category: 'Cloud Computing',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=400&fit=crop',
    },
    '3': {
      title: 'Python Best Practices for Enterprise Applications: Lessons from the Field',
      content: `
        <p>Python has become the go-to language for enterprise applications, from web services to AI/ML systems. However, building enterprise-grade Python applications requires following specific best practices.</p>
        
        <h2>Code Structure and Organization</h2>
        <p>Use a clear project structure with separate modules for models, views, services, and utilities. Follow PEP 8 style guidelines and use tools like Black for consistent code formatting.</p>
        
        <h2>Dependency Management</h2>
        <p>Use virtual environments and requirements.txt files. Consider using Poetry or Pipenv for more advanced dependency management with lock files for reproducible builds.</p>
        
        <h2>Error Handling and Logging</h2>
        <p>Implement comprehensive error handling with custom exceptions. Use structured logging with appropriate log levels and consider centralized logging solutions for production environments.</p>
        
        <h2>Testing Strategy</h2>
        <p>Implement unit tests, integration tests, and end-to-end tests. Use pytest for testing framework and aim for at least 80% code coverage. Implement continuous integration pipelines.</p>
        
        <h2>Performance Optimization</h2>
        <p>Profile your code to identify bottlenecks. Use caching strategies, database query optimization, and consider async programming for I/O-bound operations.</p>
        
        <h2>Security Considerations</h2>
        <p>Validate all inputs, use parameterized queries to prevent SQL injection, implement proper authentication and authorization, and keep dependencies updated.</p>
        
        <h2>Deployment and Monitoring</h2>
        <p>Use containerization with Docker, implement health checks, and set up monitoring with tools like Prometheus and Grafana for production applications.</p>
      `,
      author: 'Michael Rodriguez',
      date: '2024-01-05',
      readTime: '10 min read',
      category: 'Development',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=400&fit=crop',
    }
  };

  const post = blogPosts[id as keyof typeof blogPosts];

  if (!post) {
    return (
      <div className="pt-20 pb-20 text-center">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Blog post not found</h1>
        <Link to="/blog" className="text-blue-600 hover:text-blue-700">← Back to Blog</Link>
      </div>
    );
  }

  return (
    <div className="pt-20 pb-20">
      {/* Header */}
      <section className="py-12 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/blog" className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-8">
            <ArrowLeft size={20} className="mr-2" />
            Back to Blog
          </Link>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-4">
              <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium">
                {post.category}
              </span>
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              {post.title}
            </h1>
            
            <div className="flex items-center justify-between text-gray-600 dark:text-gray-400 mb-8">
              <div className="flex items-center space-x-6">
                <div className="flex items-center space-x-2">
                  <User size={16} />
                  <span>{post.author}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar size={16} />
                  <span>{new Date(post.date).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock size={16} />
                  <span>{post.readTime}</span>
                </div>
              </div>
              
              <Button variant="outline" size="sm">
                <Share2 size={16} className="mr-2" />
                Share
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img 
              src={post.image} 
              alt={post.title}
              className="w-full h-64 md:h-96 object-cover"
            />
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card>
            <div 
              className="prose prose-lg dark:prose-invert max-w-none"
              dangerouslySetInnerHTML={{ __html: post.content }}
              style={{
                lineHeight: '1.8',
              }}
            />
          </Card>
        </div>
      </section>

      {/* Related Articles */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Related Articles
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {Object.entries(blogPosts)
              .filter(([key]) => key !== id)
              .slice(0, 2)
              .map(([key, relatedPost]) => (
                <Card key={key} className="group cursor-pointer">
                  <Link to={`/blog/${key}`}>
                    <div className="h-32 rounded-lg mb-4 overflow-hidden">
                      <img 
                        src={relatedPost.image} 
                        alt={relatedPost.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    
                    <div className="mb-2">
                      <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded text-xs">
                        {relatedPost.category}
                      </span>
                    </div>
                    
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {relatedPost.title}
                    </h3>
                    
                    <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                      <BookOpen size={14} className="mr-1" />
                      <span>{relatedPost.readTime}</span>
                    </div>
                  </Link>
                </Card>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
};