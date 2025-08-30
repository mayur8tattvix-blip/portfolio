import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, User, Clock, Share2, BookOpen } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import { Button } from '../components/ui/Button';

export const BlogPost: React.FC = () => {
  const { id } = useParams();

  const blogPosts = {
    '1': {
      title: 'The Future of AI in Small Business: 5 Game-Changing Applications',
      content: `
        <div class="blog-intro">
          <p><strong>Artificial Intelligence is no longer just for tech giants.</strong> Small and medium businesses are increasingly leveraging AI to automate processes, improve customer experience, and gain competitive advantages. In this comprehensive guide, we'll explore five transformative AI applications that are reshaping how small businesses operate.</p>
        </div>
        
        <blockquote class="highlight-quote">
          <p>"AI adoption among small businesses has increased by 270% over the past four years, with 91% reporting measurable benefits within the first year." - <em>Small Business AI Report 2024</em></p>
        </blockquote>
        
        <h2>🤖 1. Customer Service Automation</h2>
        <p>AI-powered chatbots can handle <strong>80% of routine customer inquiries</strong>, providing 24/7 support while reducing operational costs. Modern chatbots understand context and can escalate complex issues to human agents seamlessly.</p>
        
        <div class="code-example">
          <h4>Implementation Example:</h4>
          <pre><code>// Simple chatbot integration
const chatbot = new AIAssistant({
  model: 'gpt-3.5-turbo',
  context: 'customer-service',
  escalation: true
});</code></pre>
        </div>
        
        <ul>
          <li><strong>Cost Reduction:</strong> Up to 60% reduction in customer service costs</li>
          <li><strong>Response Time:</strong> Instant responses vs. average 2-hour human response</li>
          <li><strong>Availability:</strong> 24/7 support without additional staffing</li>
        </ul>
        
        <h2>📊 2. Predictive Analytics for Inventory Management</h2>
        <p>Small retailers can now predict demand patterns using AI algorithms that analyze historical sales data, seasonal trends, and external factors like weather or local events.</p>
        
        <div class="stats-grid">
          <div class="stat-item">
            <h4>35%</h4>
            <p>Reduction in inventory costs</p>
          </div>
          <div class="stat-item">
            <h4>50%</h4>
            <p>Decrease in stockouts</p>
          </div>
          <div class="stat-item">
            <h4>25%</h4>
            <p>Improvement in cash flow</p>
          </div>
        </div>
        
        <h2>🎯 3. Personalized Marketing Campaigns</h2>
        <p>AI can analyze customer behavior to create highly targeted marketing campaigns, increasing conversion rates by up to <strong>40%</strong> compared to traditional mass marketing approaches.</p>
        
        <div class="feature-box">
          <h4>Key Benefits:</h4>
          <ul>
            <li>Dynamic pricing based on demand and competition</li>
            <li>Personalized product recommendations</li>
            <li>Optimal timing for marketing messages</li>
            <li>A/B testing automation</li>
          </ul>
        </div>
        
        <h2>💰 4. Automated Financial Analysis</h2>
        <p>AI tools can process financial data in real-time, identifying cash flow patterns, predicting future revenue, and flagging potential financial risks before they become critical.</p>
        
        <table class="comparison-table">
          <thead>
            <tr>
              <th>Traditional Method</th>
              <th>AI-Powered Analysis</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Monthly reports</td>
              <td>Real-time insights</td>
            </tr>
            <tr>
              <td>Historical analysis</td>
              <td>Predictive forecasting</td>
            </tr>
            <tr>
              <td>Manual data entry</td>
              <td>Automated processing</td>
            </tr>
          </tbody>
        </table>
        
        <h2>📄 5. Smart Document Processing</h2>
        <p>OCR and NLP technologies can automatically extract and process information from invoices, contracts, and other business documents, reducing manual data entry by <strong>90%</strong>.</p>
        
        <div class="process-flow">
          <h4>Document Processing Workflow:</h4>
          <ol>
            <li><strong>Upload:</strong> Scan or upload documents</li>
            <li><strong>Extract:</strong> AI identifies key information</li>
            <li><strong>Validate:</strong> Cross-reference with existing data</li>
            <li><strong>Store:</strong> Automatically file in appropriate systems</li>
          </ol>
        </div>
        
        <h2>🚀 Getting Started with AI</h2>
        <p>The key to successful AI implementation is starting small. Choose one specific business process, implement a focused AI solution, measure results, and then scale gradually.</p>
        
        <div class="action-steps">
          <h4>Your AI Implementation Roadmap:</h4>
          <div class="step">
            <span class="step-number">1</span>
            <div>
              <h5>Assess Your Needs</h5>
              <p>Identify repetitive tasks and pain points in your business processes.</p>
            </div>
          </div>
          <div class="step">
            <span class="step-number">2</span>
            <div>
              <h5>Start Small</h5>
              <p>Choose one area for initial AI implementation (e.g., customer service chatbot).</p>
            </div>
          </div>
          <div class="step">
            <span class="step-number">3</span>
            <div>
              <h5>Measure & Optimize</h5>
              <p>Track performance metrics and refine your AI solution based on results.</p>
            </div>
          </div>
          <div class="step">
            <span class="step-number">4</span>
            <div>
              <h5>Scale Gradually</h5>
              <p>Expand AI implementation to other business areas based on proven success.</p>
            </div>
          </div>
        </div>
        
        <div class="conclusion">
          <h3>Conclusion</h3>
          <p>AI is no longer a luxury for small businesses—it's becoming a necessity for staying competitive. By starting with these five applications, you can begin your AI journey and unlock significant improvements in efficiency, customer satisfaction, and profitability.</p>
        </div>
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
        <div class="blog-intro">
          <p><strong>Cloud migration is no longer optional—it's essential for business competitiveness.</strong> This comprehensive guide covers everything Indian businesses need to know about migrating to the cloud successfully, with specific focus on regulatory compliance and cost optimization.</p>
        </div>
        
        <blockquote class="highlight-quote">
          <p>"Indian cloud adoption has grown by 45% annually, with 78% of enterprises planning major cloud initiatives by 2025." - <em>India Cloud Report 2024</em></p>
        </blockquote>
        
        <h2>☁️ Why Cloud Migration Matters</h2>
        <p>Indian businesses are experiencing rapid digital transformation. Cloud migration offers <strong>scalability, cost reduction</strong>, and access to cutting-edge technologies that were previously available only to large enterprises.</p>
        
        <div class="stats-grid">
          <div class="stat-item">
            <h4>60%</h4>
            <p>Cost reduction potential</p>
          </div>
          <div class="stat-item">
            <h4>99.9%</h4>
            <p>Uptime guarantee</p>
          </div>
          <div class="stat-item">
            <h4>3x</h4>
            <p>Faster deployment</p>
          </div>
        </div>
        
        <h2>🔍 Pre-Migration Assessment</h2>
        <p>Before migrating, conduct a thorough assessment of your current infrastructure, applications, and data. Identify dependencies, security requirements, and compliance needs specific to Indian regulations.</p>
        
        <div class="feature-box">
          <h4>Assessment Checklist:</h4>
          <ul>
            <li><strong>Infrastructure Audit:</strong> Current servers, storage, and network setup</li>
            <li><strong>Application Dependencies:</strong> Inter-application connections and data flows</li>
            <li><strong>Compliance Requirements:</strong> RBI, SEBI, and industry-specific regulations</li>
            <li><strong>Security Posture:</strong> Current security measures and gaps</li>
            <li><strong>Cost Analysis:</strong> Current IT spending vs. projected cloud costs</li>
          </ul>
        </div>
        
        <h2>🏢 Choosing the Right Cloud Provider</h2>
        <p>Consider factors like data residency requirements, local support, pricing in INR, and compliance with Indian data protection laws when selecting between AWS, Azure, or Google Cloud.</p>
        
        <table class="comparison-table">
          <thead>
            <tr>
              <th>Provider</th>
              <th>Indian Data Centers</th>
              <th>Local Support</th>
              <th>Compliance</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>AWS</strong></td>
              <td>Mumbai, Hyderabad</td>
              <td>24/7 Hindi Support</td>
              <td>RBI, SEBI Compliant</td>
            </tr>
            <tr>
              <td><strong>Microsoft Azure</strong></td>
              <td>Mumbai, Chennai, Pune</td>
              <td>Local Enterprise Support</td>
              <td>Government Cloud Available</td>
            </tr>
            <tr>
              <td><strong>Google Cloud</strong></td>
              <td>Mumbai, Delhi</td>
              <td>Regional Support Team</td>
              <td>Data Localization Ready</td>
            </tr>
          </tbody>
        </table>
        
        <h2>🔄 Migration Strategies: The 6 R's</h2>
        <p>Each migration strategy has different cost implications and technical requirements:</p>
        
        <div class="action-steps">
          <div class="step">
            <span class="step-number">1</span>
            <div>
              <h5>Rehost (Lift & Shift)</h5>
              <p>Move applications as-is to cloud infrastructure. <strong>Fastest</strong> but least optimized approach.</p>
            </div>
          </div>
          <div class="step">
            <span class="step-number">2</span>
            <div>
              <h5>Replatform</h5>
              <p>Make minimal changes to optimize for cloud. <strong>Balanced</strong> approach between speed and benefits.</p>
            </div>
          </div>
          <div class="step">
            <span class="step-number">3</span>
            <div>
              <h5>Repurchase</h5>
              <p>Replace with cloud-native SaaS solutions. <strong>Immediate</strong> cloud benefits.</p>
            </div>
          </div>
          <div class="step">
            <span class="step-number">4</span>
            <div>
              <h5>Refactor</h5>
              <p>Redesign applications for cloud-native architecture. <strong>Maximum</strong> long-term benefits.</p>
            </div>
          </div>
        </div>
        
        <h2>🔒 Security and Compliance</h2>
        <p>Ensure your cloud setup complies with Indian IT Act, RBI guidelines for financial services, and industry-specific regulations.</p>
        
        <div class="code-example">
          <h4>Security Implementation Example:</h4>
          <pre><code>// AWS Security Configuration
const securityConfig = {
  encryption: {
    atRest: 'AES-256',
    inTransit: 'TLS 1.3'
  },
  access: {
    mfa: true,
    rbac: 'enabled',
    audit: 'cloudtrail'
  },
  compliance: ['SOC2', 'ISO27001', 'RBI']
};</code></pre>
        </div>
        
        <h2>💰 Cost Optimization Strategies</h2>
        <p>Use reserved instances, right-sizing, and automated scaling to optimize costs. Monitor usage patterns and implement cost allocation tags for better financial management.</p>
        
        <div class="process-flow">
          <h4>Cost Optimization Workflow:</h4>
          <ol>
            <li><strong>Monitor:</strong> Track resource usage and costs daily</li>
            <li><strong>Analyze:</strong> Identify underutilized resources</li>
            <li><strong>Optimize:</strong> Right-size instances and storage</li>
            <li><strong>Automate:</strong> Implement auto-scaling policies</li>
            <li><strong>Review:</strong> Monthly cost optimization reviews</li>
          </ol>
        </div>
        
        <div class="conclusion">
          <h3>Ready to Migrate?</h3>
          <p>Cloud migration is a journey, not a destination. Start with a pilot project, learn from the experience, and gradually expand your cloud footprint. With proper planning and execution, Indian businesses can achieve significant cost savings and operational improvements through cloud adoption.</p>
        </div>
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
      <section className="py-16 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link to="/blog" className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 mb-8 font-medium">
              <ArrowLeft size={20} className="mr-2" />
              Back to Blog
            </Link>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="mb-6">
              <span className="px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-semibold">
                {post.category}
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-8 leading-tight">
              {post.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-6 text-gray-600 dark:text-gray-300 mb-8">
              <div className="flex items-center space-x-2 bg-white dark:bg-gray-800 px-3 py-2 rounded-lg shadow-sm">
                <User size={16} className="text-blue-600 dark:text-blue-400" />
                <span className="font-medium">{post.author}</span>
              </div>
              <div className="flex items-center space-x-2 bg-white dark:bg-gray-800 px-3 py-2 rounded-lg shadow-sm">
                <Calendar size={16} className="text-blue-600 dark:text-blue-400" />
                <span>{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
              </div>
              <div className="flex items-center space-x-2 bg-white dark:bg-gray-800 px-3 py-2 rounded-lg shadow-sm">
                <Clock size={16} className="text-blue-600 dark:text-blue-400" />
                <span>{post.readTime}</span>
              </div>
              <Button 
                variant="outline" 
                size="sm" 
                className="ml-auto"
                onClick={() => {
                  if (navigator.share) {
                    navigator.share({
                      title: post.title,
                      text: post.shortDescription,
                      url: window.location.href,
                    });
                  } else {
                    navigator.clipboard.writeText(window.location.href);
                    alert('Article link copied to clipboard!');
                  }
                }}
              >
                <Share2 size={16} className="mr-2" />
                Share Article
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 p-2"
          >
            <img 
              src={post.image} 
              alt={post.title}
              className="w-full h-72 md:h-[500px] object-cover rounded-2xl"
            />
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="bg-white dark:bg-gray-900 rounded-3xl shadow-xl p-8 md:p-12 border border-gray-100 dark:border-gray-800">
              <style jsx>{`
                .blog-intro { 
                  background: linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%);
                  padding: 1.5rem;
                  border-radius: 1rem;
                  margin-bottom: 2rem;
                }
                .dark .blog-intro {
                  background: linear-gradient(135deg, #374151 0%, #4b5563 100%);
                }
                .highlight-quote {
                  background: #dbeafe;
                  border-left: 4px solid #3b82f6;
                  padding: 1rem 1.5rem;
                  margin: 2rem 0;
                  border-radius: 0.5rem;
                }
                .dark .highlight-quote {
                  background: #1e3a8a20;
                  border-left-color: #60a5fa;
                }
                .code-example {
                  background: #f8fafc;
                  border: 1px solid #e2e8f0;
                  border-radius: 0.75rem;
                  padding: 1.5rem;
                  margin: 1.5rem 0;
                }
                .dark .code-example {
                  background: #1e293b;
                  border-color: #475569;
                }
                .stats-grid {
                  display: grid;
                  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
                  gap: 1rem;
                  margin: 2rem 0;
                }
                .stat-item {
                  text-align: center;
                  padding: 1.5rem;
                  background: #f0f9ff;
                  border-radius: 1rem;
                  border: 2px solid #e0f2fe;
                }
                .dark .stat-item {
                  background: #0c4a6e20;
                  border-color: #0369a1;
                }
                .stat-item h4 {
                  font-size: 2rem;
                  font-weight: bold;
                  color: #0369a1;
                  margin: 0;
                }
                .dark .stat-item h4 {
                  color: #38bdf8;
                }
                .feature-box {
                  background: #f0fdf4;
                  border: 1px solid #bbf7d0;
                  border-radius: 1rem;
                  padding: 1.5rem;
                  margin: 2rem 0;
                }
                .dark .feature-box {
                  background: #14532d20;
                  border-color: #16a34a;
                }
                .comparison-table {
                  width: 100%;
                  border-collapse: collapse;
                  margin: 2rem 0;
                  border-radius: 0.75rem;
                  overflow: hidden;
                  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
                }
                .comparison-table th {
                  background: #3b82f6;
                  color: white;
                  padding: 1rem;
                  text-align: left;
                }
                .comparison-table td {
                  padding: 1rem;
                  border-bottom: 1px solid #e5e7eb;
                }
                .dark .comparison-table td {
                  border-bottom-color: #4b5563;
                }
                .process-flow {
                  background: #fef3c7;
                  border: 1px solid #fbbf24;
                  border-radius: 1rem;
                  padding: 1.5rem;
                  margin: 2rem 0;
                }
                .dark .process-flow {
                  background: #92400e20;
                  border-color: #f59e0b;
                }
                .action-steps {
                  margin: 2rem 0;
                }
                .step {
                  display: flex;
                  align-items: flex-start;
                  margin-bottom: 1.5rem;
                  padding: 1rem;
                  background: #f8fafc;
                  border-radius: 0.75rem;
                }
                .dark .step {
                  background: #1e293b;
                }
                .step-number {
                  background: #3b82f6;
                  color: white;
                  width: 2rem;
                  height: 2rem;
                  border-radius: 50%;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  font-weight: bold;
                  margin-right: 1rem;
                  flex-shrink: 0;
                }
                .conclusion {
                  background: linear-gradient(135deg, #e0e7ff 0%, #c7d2fe 100%);
                  padding: 2rem;
                  border-radius: 1rem;
                  margin-top: 3rem;
                }
                .dark .conclusion {
                  background: linear-gradient(135deg, #312e81 0%, #3730a3 100%);
                }
              `}</style>
              <div 
                className="prose prose-xl dark:prose-invert max-w-none text-gray-900 dark:text-white"
                dangerouslySetInnerHTML={{ __html: post.content }}
                style={{
                  lineHeight: '1.8',
                }}
              />
              
              {/* Author Bio */}
              <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-xl font-bold">
                      {post.author.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white">{post.author}</h4>
                    <p className="text-gray-600 dark:text-gray-400">Technical Writer at Tattvix Solutions</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Continue Reading
            </h2>
            <p className="text-gray-600 dark:text-gray-300">Explore more insights from our technical blog</p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {Object.entries(blogPosts)
              .filter(([key]) => key !== id)
              .slice(0, 2)
              .map(([key, relatedPost], index) => (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                >
                  <Link to={`/blog/${key}`}>
                    <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl overflow-hidden group hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-800">
                      <div className="h-48 overflow-hidden">
                        <img 
                          src={relatedPost.image} 
                          alt={relatedPost.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      
                      <div className="p-6">
                        <div className="mb-3">
                          <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium">
                            {relatedPost.category}
                          </span>
                        </div>
                        
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2">
                          {relatedPost.title}
                        </h3>
                        
                        <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                          <div className="flex items-center space-x-1">
                            <BookOpen size={14} />
                            <span>{relatedPost.readTime}</span>
                          </div>
                          <span>{relatedPost.author}</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
};