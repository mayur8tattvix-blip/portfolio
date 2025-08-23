import React from 'react';
import { motion } from 'framer-motion';
import { Code, Brain, Cloud, Palette, CheckCircle } from 'lucide-react';
import { Card } from '../components/ui/Card';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export const Services: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation();

  const services = [
    {
      icon: Code,
      title: 'Custom Software Development',
      description: 'From concept to deployment, we build custom applications that solve real business problems. Our full-stack expertise ensures seamless integration and optimal performance.',
      technologies: ['React', 'Vue.js', 'Angular', 'Node.js', 'Python', 'PHP', 'Java'],
      deliverables: ['Web Applications', 'Mobile Applications', 'API Development', 'Database Design', 'Third-party Integrations'],
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: Brain,
      title: 'AI & Machine Learning Solutions',
      description: 'Transform your business with intelligent automation and data-driven insights. We develop custom AI solutions that learn and adapt to your specific business needs.',
      technologies: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'OpenAI', 'Computer Vision', 'NLP'],
      deliverables: ['Chatbots', 'Predictive Analytics', 'Recommendation Systems', 'Process Automation', 'Image Recognition'],
      color: 'from-purple-500 to-purple-600',
    },
    {
      icon: Cloud,
      title: 'Cloud Solutions',
      description: 'Leverage the power of cloud computing to scale your business efficiently. We help you migrate, optimize, and manage your infrastructure on leading cloud platforms.',
      technologies: ['AWS', 'Azure', 'Google Cloud', 'Docker', 'Kubernetes', 'Terraform'],
      deliverables: ['Cloud Migration', 'Architecture Design', 'DevOps & CI/CD', 'Security Implementation', 'Cost Optimization'],
      color: 'from-green-500 to-green-600',
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Create exceptional user experiences that engage customers and drive conversions. Our design process combines user research, creative design, and usability testing.',
      technologies: ['Figma', 'Adobe Creative Suite', 'Sketch', 'InVision', 'Miro'],
      deliverables: ['User Research', 'Wireframing', 'Visual Design', 'Prototyping', 'Design Systems'],
      color: 'from-orange-500 to-orange-600',
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
              Our Services
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              At Tattvix Solutions, we combine technical excellence with business acumen to deliver 
              solutions that drive real results. Our comprehensive service portfolio covers the entire 
              software development lifecycle.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Detail */}
      <section ref={ref} className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12`}
              >
                <div className="flex-1">
                  <Card className="h-full">
                    <div className={`w-16 h-16 mb-6 rounded-2xl bg-gradient-to-r ${service.color} flex items-center justify-center`}>
                      <service.icon className="text-white" size={32} />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Technologies We Use:</h4>
                      <div className="flex flex-wrap gap-2">
                        {service.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-3">What We Deliver:</h4>
                      <ul className="space-y-2">
                        {service.deliverables.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-center space-x-2">
                            <CheckCircle className="text-green-500 flex-shrink-0" size={16} />
                            <span className="text-gray-600 dark:text-gray-300">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </Card>
                </div>
                
                <div className="flex-1">
                  <div className={`h-80 rounded-2xl bg-gradient-to-br ${service.color} opacity-20`}></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};